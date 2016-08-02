# -*- coding: utf-8 -*-
import datetime
import django_filters

from captcha.fields import CaptchaField
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Fieldset, Layout

from datetime import timedelta
from django import forms
from django.db import models
from django.forms import ModelForm, ValidationError
from django.utils.timezone import now
from .models import Categoria, Ocorrencia, Local, StatusOcorrencia

from unb_alerta.utils import to_row, form_actions

YES_NO_CHOICES = [('', '--------'),
                  (0, 'Não'),
                  (1, 'Sim')]


class OcorrenciaForm(ModelForm):

    tb_categoria_ID = forms.ModelChoiceField(
        label=('Tipo de Ocorrência'),
        required=True,
        queryset=Categoria.objects.all(),
        empty_label='Selecione')

    emergencia = forms.ChoiceField(
        label='Emergência?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    vitimado = forms.ChoiceField(
        label='Tem alguma vítima?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    foto = forms.ImageField(label='Fotografia',
                            required=False,
                            widget=forms.FileInput
                            )

    descricao = forms.CharField(
        widget=forms.Textarea(
            attrs={'rows': 15,
                   'cols': 48,
                   'placeholder': 'Escreva aqui a descricao da ocorrencia, ou seja, detalhes que você pode perceber mas não tem campos no formulario para tal informação'}),
        required=False)

    informacoes_segurancas = forms.CharField(
        widget=forms.Textarea(
            attrs={'rows': 15,
                   'cols': 48}),
        required=False)

    captcha = CaptchaField()

    class Meta:
        model = Ocorrencia
        fields = ['emergencia',
                  'tb_categoria_ID',
                  'vitimado',
                  'validade',
                  'atendida',
                  'vigilante_ID',
                  'usuario_ID',
                  'hora',
                  'foto',
                  'data',
                  'latitude',
                  'longitude',
                  'descricao',
                  'localidade',
                  'repetida',
                  'informacoes_segurancas',
                  'data_publicacao']

        widgets = {'atendida': forms.HiddenInput(),
                   'vigilante_ID': forms.HiddenInput(),
                   'usuario_ID': forms.HiddenInput(),
                   'validade': forms.HiddenInput(),
                   'repetida': forms.HiddenInput(),
                   'informacoes_segurancas': forms.HiddenInput(),
                   'data_publicacao': forms.HiddenInput()}

    def clean(self):
        cleaned_data = self.cleaned_data

        data_hoje = datetime.datetime.now().date()
        # Validação de Data
        if self.data['data']:
            if cleaned_data['data'] > data_hoje:
                raise ValidationError(
                    'Não é possível fazer uma ocorrência em uma data futura')
        if self.files:
            if self.files['foto'].size > 30000000:
                raise ValidationError(
                    'Não é possível fazer o upload ' +
                    'de uma imagem maior que 30MB.')
        return cleaned_data

    def __init__(self, *args, **kwargs):
        super(OcorrenciaForm, self).__init__(*args, **kwargs)
        self.fields['hora'].widget.attrs['class'] = 'hora'
        self.fields['data'].widget.attrs['class'] = 'data'


class ValidarOcorrenciaEditForm(ModelForm):

    emergencia = forms.ChoiceField(
        label='Emergência?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    vitimado = forms.ChoiceField(
        label='Tem alguma vítima?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    repetida = forms.ChoiceField(
        label='É repetida?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    validade = forms.ChoiceField(
        label='É válida?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    atendida = forms.ChoiceField(
        label='Foi atendida?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    resposta = forms.CharField(
        widget=forms.Textarea(
            attrs={'rows': 15,
                   'cols': 48,
                   'placeholder': 'Escreva aqui a resposta da ocorrencia'}))

    status = forms.ModelChoiceField(
        label=('Status da Ocorrência'),
        required=True,
        queryset=StatusOcorrencia.objects.all(),
        empty_label='Selecione')

    class Meta:
        model = Ocorrencia
        fields = ['emergencia',
                  'tb_categoria_ID',
                  'vitimado',
                  'data',
                  'hora',
                  'latitude',
                  'longitude',
                  'localidade',
                  'validade',
                  'atendida',
                  'vigilante_ID',
                  'usuario_ID',
                  'resposta',
                  'repetida',
                  'foto',
                  'descricao',
                  'informacoes_segurancas',
                  'status',
                  'data_publicacao']

        widgets = {'id': forms.HiddenInput(),
                   'vigilante_ID': forms.HiddenInput(),
                   'usuario_ID': forms.HiddenInput(),
                   'data': forms.HiddenInput(),
                   'hora': forms.HiddenInput(),
                   'latitude': forms.HiddenInput(),
                   'longitude': forms.HiddenInput(),
                   'descricao': forms.HiddenInput(),
                   'localidade': forms.HiddenInput(),
                   'data_publicacao': forms.HiddenInput()}


class RangeWidgetOverrideDate(forms.MultiWidget):

    def __init__(self, attrs=None):
        widgets = (forms.DateInput(format='%d/%m/%Y',
                                   attrs={'class': 'dateinput',
                                          'placeholder': 'Inicial'}),
                   forms.DateInput(format='%d/%m/%Y',
                                   attrs={'class': 'dateinput',
                                          'placeholder': 'Final'}))
        super(RangeWidgetOverrideDate, self).__init__(widgets, attrs)

    def decompress(self, value):
        if value:
            return [value.start, value.stop]
        return [None, None]

    def format_output(self, rendered_widgets):
        return ''.join(rendered_widgets)


class RangeWidgetOverrideTime(forms.MultiWidget):

    def __init__(self, attrs=None):
        widgets = (forms.TimeInput(format='%H:%M',
                                   attrs={'class': 'timeinput',
                                          'placeholder': 'Inicial'}),
                   forms.TimeInput(format='%H:%M',
                                   attrs={'class': 'timeinput',
                                          'placeholder': 'Final'}))
        super(RangeWidgetOverrideTime, self).__init__(widgets, attrs)

    def decompress(self, value):
        if value:
            return [value.start, value.stop]
        return [None, None]

    def format_output(self, rendered_widgets):
        return ''.join(rendered_widgets)


class OcorrenciaFiltro(django_filters.FilterSet):

    filter_overrides = {models.DateField: {
        'filter_class': django_filters.DateFromToRangeFilter,
        'extra': lambda f: {
            'label': '%s (%s)' % (f.verbose_name, 'Inicial - Final'),
            'widget': RangeWidgetOverrideDate}
    }}

    hora = django_filters.TimeRangeFilter(
        label='Hora (Inicial-Final)',
        widget=RangeWidgetOverrideTime)

    vitimado = django_filters.ChoiceFilter(
        label='Tem alguma vítima?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    emergencia = django_filters.ChoiceFilter(
        label='Emergência?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    descricao = django_filters.CharFilter(
        label='Descrição (Palavras-Chave)',
        lookup_expr='icontains')

    resposta = django_filters.CharFilter(
        label='Resposta (Palavras-Chave)',
        lookup_expr='icontains')

    class Meta:
        model = Ocorrencia
        fields = ['hora',
                  'data',
                  'id',
                  'tb_categoria_ID',
                  'localidade',
                  ]

        order_by = (
            ('', 'Selecione'),
            ('dataC', 'Data - Ordem Crescente'),
            ('dataD', 'Data - Ordem Decrescente'),
        )

    order_by_mapping = {
        '': [],
        'dataC': ['data'],
        'dataD': ['-data'],
    }

    def get_order_by(self, order_value):
        if order_value in self.order_by_mapping:
            return self.order_by_mapping[order_value]
        else:
            return super(OcorrenciaFiltro,
                         self).get_order_by(order_value)

    def __init__(self, *args, **kwargs):
        super(OcorrenciaFiltro, self).__init__(*args, **kwargs)
        self.form.fields['id'].label = 'ID'
        self.form.fields['hora'].widget.attrs['class'] = 'hora'
        self.form.fields['data'].widget.attrs['class'] = 'data'

        row1 = to_row(
            [('id', 2),
             ('tb_categoria_ID', 4),
             ('vitimado', 3),
             ('emergencia', 3)])
        row2 = to_row(
            [('data', 6),
             ('hora', 6)])
        row3 = to_row(
            [('localidade', 4),
             ('descricao', 4),
             ('resposta', 4)])
        row4 = to_row([('o', 6)])

        self.form.helper = FormHelper()
        self.form.helper.form_method = 'GET'
        self.form.helper.layout = Layout(
            Fieldset('Filtragem de Ocorrências'),
            row1, row2, row3, row4,
            form_actions(save_label='Filtrar'))


class RelatorioFiltro(forms.Form):

    localidade = forms.ModelChoiceField(
        label='Locais',
        required=False,
        queryset=Local.objects.all(),
        empty_label='Selecione',
    )

    hora = forms.TimeField(
        label='Hora Inicial',
        required=True)

    data = forms.DateField(
        label='Data Inicial',
        required=True,
        input_formats=['%d/%m/%Y'])

    hora_1 = forms.TimeField(label='Hora Final', required=True)

    data_1 = forms.DateField(
        label='Data Final',
        required=True,
        input_formats=['%d/%m/%Y'])

    tipo = forms.ModelChoiceField(
        label='Categoria',
        required=False,
        queryset=Categoria.objects.all(),
        empty_label='Selecione',
    )

    def __init__(self, *args, **kwargs):
        super(RelatorioFiltro, self).__init__(*args, **kwargs)
        self.fields['hora'].widget.attrs['class'] = 'hora'
        self.fields['data'].widget.attrs['class'] = 'data'
        self.fields['hora_1'].widget.attrs['class'] = 'hora'
        self.fields['data_1'].widget.attrs['class'] = 'data'

        row1 = to_row(
            [('data', 6),
             ('data_1', 6)])
        row2 = to_row(
            [('hora', 6),
             ('hora_1', 6)])
        row3 = to_row([('localidade', 6),
                       ('tipo', 6)])

        self.helper = FormHelper()
        self.helper.layout = Layout(
            Fieldset('Filtragem de Relatórios'),
            row1, row2, row3,
            form_actions(save_label='Gerar Relatório'))


class GraficosFiltro(forms.Form):

    ano_grafico_barra = forms.IntegerField(
        label='Ano Gráfico de Barras',
        required=True)

    localidade = forms.ModelChoiceField(
        label='Locais',
        required=False,
        queryset=Local.objects.all(),
        empty_label='Selecione',
    )

    hora = forms.TimeField(
        label='Hora Inicial',
        required=True)

    data = forms.DateField(
        label='Data Inicial',
        required=True,
        input_formats=['%d/%m/%Y'])

    hora_1 = forms.TimeField(label='Hora Final', required=True)

    data_1 = forms.DateField(
        label='Data Final',
        required=True,
        input_formats=['%d/%m/%Y'])

    tipo = forms.ModelChoiceField(
        label='Categoria',
        required=False,
        queryset=Categoria.objects.all(),
        empty_label='Selecione',
    )

    emergencia = forms.ChoiceField(
        label='Emergência?',
        choices=YES_NO_CHOICES,
        required=False,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    vitimado = forms.ChoiceField(
        label='Tem alguma vítima?',
        required=False,
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    validade = forms.ChoiceField(
        label='É válida?',
        required=False,
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    def __init__(self, *args, **kwargs):
        super(GraficosFiltro, self).__init__(*args, **kwargs)
        self.fields['hora'].widget.attrs['class'] = 'hora'
        self.fields['data'].widget.attrs['class'] = 'data'
        self.fields['hora_1'].widget.attrs['class'] = 'hora'
        self.fields['data_1'].widget.attrs['class'] = 'data'

        row1 = to_row(
            [('data', 6),
             ('data_1', 6)])
        row2 = to_row(
            [('hora', 6),
             ('hora_1', 6)])
        row3 = to_row(
            [('emergencia', 4),
             ('validade', 4),
             ('vitimado', 4)])
        row4 = to_row([('localidade', 6),
                       ('tipo', 6)])
        row5 = to_row([('ano_grafico_barra', 6)])

        self.helper = FormHelper()
        self.helper.layout = Layout(
            Fieldset('Gráficos'),
            row1, row2, row3, row4, row5,
            form_actions(save_label='Gerar Gráficos'))


class OcorrenciaFiltroMapa(OcorrenciaFiltro):

    validade = django_filters.ChoiceFilter(
        label='É válida?',
        choices=YES_NO_CHOICES,
        widget=forms.Select(
            attrs={'class': 'selector'}))

    status = django_filters.ModelChoiceFilter(
        label='Status',
        required=False,
        queryset=StatusOcorrencia.objects.all(),
        empty_label='Selecione',
    )

    def __init__(self, *args, **kwargs):
        super(OcorrenciaFiltroMapa, self).__init__(*args, **kwargs)
        self.form.fields['id'].label = 'ID'
        self.form.fields['hora'].widget.attrs['class'] = 'hora'
        self.form.fields['data'].widget.attrs['class'] = 'data'

        row1 = to_row(
            [('id', 4),
             ('vitimado', 4),
             ('emergencia', 4)])
        row2 = to_row(
            [('data', 6),
             ('hora', 6)])
        row3 = to_row(
            [('localidade', 6),
             ('tb_categoria_ID', 6)])
        row4 = to_row(
            [('status', 6),
             ('validade', 6)])
        row5 = to_row(
            [('descricao', 6),
             ('resposta', 6)])

        self.form.helper = FormHelper()
        self.form.helper.form_method = 'GET'
        self.form.helper.layout = Layout(
            Fieldset('Filtragem de Ocorrências'),
            row1, row2, row3, row4, row5,
            form_actions(save_label='Filtrar'))


def _truncate(dt):
    return dt.date()


class DateRangeFilterEdit(django_filters.DateRangeFilter):
    options = {
        '': ('Hoje', lambda qs, name: qs.filter(**{
            '%s__year' % name: now().year,
            '%s__month' % name: now().month,
            '%s__day' % name: now().day
        })),
        2: ('Últimos 7 dias', lambda qs, name: qs.filter(**{
            '%s__gte' % name: _truncate(now() - timedelta(days=7)),
            '%s__lt' % name: _truncate(now() + timedelta(days=1)),
        })),
        3: ('Esse mês', lambda qs, name: qs.filter(**{
            '%s__year' % name: now().year,
            '%s__month' % name: now().month
        })),
    }


class OcorrenciaFiltroMapaUsuario(django_filters.FilterSet):
    data = DateRangeFilterEdit(
        label='Data da Ocorrência')

    class Meta:
        model = Ocorrencia
        fields = ['data']

    def __init__(self, *args, **kwargs):
        super(OcorrenciaFiltroMapaUsuario, self).__init__(*args, **kwargs)

        row1 = to_row(
            [('data', 6)])

        self.form.helper = FormHelper()
        self.form.helper.form_method = 'GET'
        self.form.helper.layout = Layout(
            Fieldset('Filtragem de Ocorrências'),
            row1,
            form_actions(save_label='Filtrar'))
