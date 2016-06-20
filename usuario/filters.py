import datetime

from django.utils.translation import ugettext_lazy as _
from django.contrib import admin
from django.db.models import F, Q

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
            return queryset.filter(status=1)
        if self.value() == 'inativo':
            return queryset.filter(status=0)


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
            return queryset.filter(
                # Verifica se tem menos de 20 anos
                Q(data_nasc__year__gt=(hoje.year - 20)) |
                # Verifica se nasceu há 20 anos num mês depois do atual
                Q(Q(data_nasc__year__exact=hoje.year - 20) & Q(data_nasc__month__gt=hoje.month)) |
                # Verifica se nasceu há 20 anos, nesse mês e num dia depois do atual
                Q(Q(data_nasc__year__exact=hoje.year - 20) & Q(data_nasc__month__exact=hoje.month) &
                 Q(data_nasc__day__gt=hoje.day)))
        if self.value() == '2030anos':
            return queryset.filter(
                # Verifica se tem menos de 30 anos
                Q(Q(data_nasc__year__gt=(hoje.year - 30)) |
                # Verifica se nasceu há 30 anos num mês depois do atual
                Q(Q(data_nasc__year__exact=hoje.year - 30) & Q(data_nasc__month__gt=hoje.month)) |
                # Verifica se nasceu há 30 anos, nesse mês e num dia depois do atual
                Q(Q(data_nasc__year__exact=hoje.year - 30) & Q(data_nasc__month__exact=hoje.month) &
                  Q(data_nasc__day__gt=hoje.day))) &

                # Verifica se tem 20 anos ou mais
                Q(Q(data_nasc__year__lt=hoje.year - 20) |
                # Verifica se nasceu há 20 anos num mês antes do atual
                Q(Q(data_nasc__year__exact=hoje.year - 20) & Q(data_nasc__month__lt=hoje.month)) |
                  # Verifica se nasceu há 20 anos, nesse mês e num dia antes ou igual ao atual
                Q(Q(data_nasc__year__exact=hoje.year - 20) & Q(data_nasc__month__exact=hoje.month) &
                  Q(data_nasc__day__lte=hoje.day)))
            )

        if self.value() == '3040anos':
            return queryset.filter(
                # Verifica se tem menos de 40 anos
                Q(Q(data_nasc__year__gt=(hoje.year - 40)) |
                  # Verifica se nasceu há 40 anos num mês depois do atual
                  Q(Q(data_nasc__year__exact=hoje.year - 40) & Q(data_nasc__month__gt=hoje.month)) |
                  # Verifica se nasceu há 40 anos, nesse mês e num dia depois do atual
                  Q(Q(data_nasc__year__exact=hoje.year - 40) & Q(data_nasc__month__exact=hoje.month) &
                    Q(data_nasc__day__gt=hoje.day))) &

                # Verifica se tem 30 anos ou mais
                Q(Q(data_nasc__year__lt=hoje.year - 30) |
                  # Verifica se nasceu há 30 anos num mês antes do atual
                  Q(Q(data_nasc__year__exact=hoje.year - 30) & Q(data_nasc__month__lt=hoje.month)) |
                  # Verifica se nasceu há 30 anos, nesse mês e num dia antes ou igual ao atual
                  Q(Q(data_nasc__year__exact=hoje.year - 30) & Q(data_nasc__month__exact=hoje.month) &
                    Q(data_nasc__day__lte=hoje.day)))
            )
        if self.value() == 'acima':
            return queryset.filter(
                #Verifica se tem 40 anos ou mais
                Q(data_nasc__year__lt=hoje.year - 40) |
                # Verifica se nasceu há 40 anos num mês antes do atual
                Q(Q(data_nasc__year__exact=hoje.year - 40) & Q(data_nasc__month__lt=hoje.month)) |
                # Verifica se nasceu há 40 anos, nesse mês e num dia antes ou igual ao atual
                Q(Q(data_nasc__year__exact=hoje.year - 40) & Q(data_nasc__month__exact=hoje.month) &
                  Q(data_nasc__day__lte=hoje.day))
            )
