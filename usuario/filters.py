from django.utils.translation import ugettext_lazy as _
from django.db.models import Q
from django.contrib import admin

from django.contrib.admin import SimpleListFilter
from django.contrib.auth.models import Group
from django.utils.translation import ugettext as _

class StatusFilter(admin.SimpleListFilter):
    title = _('Status do Usuário')
    parameter_name = 'status'

    def lookups(self, request, model_admin):
        return (
            ('ativo', _('Ativo')),
            ('inativo', _('Inativo')),
        )

    def queryset(self, request, queryset):
        if self.value() == 'ativo':
            return queryset.filter(status = 1)
        if self.value() == 'inativo':
            return queryset.filter(status = 0)


class GroupFilter(SimpleListFilter):
    title = _('Tipo de Usuário')
    parameter_name = 'group'

    def lookups(self, request, model_admin):
        items = ()
        for group in Group.objects.all():
            items += ((str(group.id), str(group.name),),)
        return items

    def queryset(self, request, queryset):
        group_id = request.GET.get(self.parameter_name, None)
        if group_id:
            return queryset.filter(groups=group_id)
        return queryset

