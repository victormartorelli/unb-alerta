# -*- coding: utf-8 -*-
import datetime
import django_filters

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Fieldset, Layout

from django import forms
from django.db import models
from django.forms import ModelForm, ValidationError
from .models import Categoria, Ocorrencia

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
                  'informacoes_segurancas']

        widgets = {'atendida': forms.HiddenInput(),
                   'vigilante_ID': forms.HiddenInput(),
                   'usuario_ID': forms.HiddenInput(),
                   'validade': forms.HiddenInput(),
                   'repetida': forms.HiddenInput()}

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
                  'descricao']

        widgets = {'id': forms.HiddenInput(),
                   'vigilante_ID': forms.HiddenInput(),
                   'usuario_ID': forms.HiddenInput(),
                   'data': forms.HiddenInput(),
                   'hora': forms.HiddenInput(),
                   'latitude': forms.HiddenInput(),
                   'longitude': forms.HiddenInput(),
                   'descricao': forms.HiddenInput(),
                   'localidade': forms.HiddenInput()}


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
