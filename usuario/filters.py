import datetime

from django.utils.translation import ugettext_lazy as _
from django.contrib import admin
from django.db.models import F

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

class IdadeFilter(SimpleListFilter):
    title = _('Faixa Etária')
    parameter_name = 'data_nasc'

    def lookups(self, request, model_admin):
        return (
            ('abaixo', _('Abaixo de 20 anos')),
            ('2030anos', _('20-30 anos')),
            ('3040anos', _('30-40 anos')),
            ('acima', _('Acima de 40 anos')),
        )

    def queryset(self, request, queryset):

        hoje = datetime.date.today()

        if self.value() == 'abaixo':
            return queryset.filter((hoje.year - F('data_nasc_year') - ((hoje.month, hoje.day) < (F('data_nasc__month'), F('data_nasc__day')))) < 20)
        if self.value() == '2030anos':
            return queryset.all()
        if self.value() == '3040anos':
            return queryset.all()
        if self.value() == 'acima':
            return queryset.all()