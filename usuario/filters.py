from django.utils.translation import ugettext_lazy as _
from django.db.models import Q
from django.contrib import admin


class StatusFilter(admin.SimpleListFilter):
    title = _('Status do usuário')
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
