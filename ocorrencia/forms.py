from django import forms
from django.forms import ModelForm
from .models import Categoria, Ocorrencia


class OcorrenciaForm(ModelForm):

    tb_categoria_ID = forms.ModelChoiceField(
        label=('Tipo de Ocorrência'),
        required=True,
        queryset=Categoria.objects.all(),
        empty_label='Selecione',
    )
    emergencia = forms.ChoiceField(
        label='Emergência?',
        choices=[(False, 'Não'), (True, 'Sim')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

    vitimado = forms.ChoiceField(
        label='Tem alguma vítima?',
        choices=[(0, 'Não'), (1, 'Sim')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

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
                  'descricao']

        widgets = {'atendida': forms.HiddenInput(),
                   'vigilante_ID': forms.HiddenInput(),
                   'usuario_ID': forms.HiddenInput(),
                   'validade': forms.HiddenInput()}

    def clean(self):
        cleaned_data = self.cleaned_data

        return cleaned_data
