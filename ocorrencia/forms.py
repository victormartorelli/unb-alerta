from django import forms
from django.forms import ModelForm

from .models import Categoria, Ocorrencia


class OcorrenciaForm(ModelForm):

    # tb_categoria_ID = forms.ModelChoiceField(
    #     label=('Tipo de Ocorrência'),
    #     required=True,
    #     queryset=Categoria.objects.all(),
    #     empty_label='Selecione',
    # )
    emergencia = forms.ChoiceField(
        label='Emergência?',
        choices=[(0, 'Sim'), (1, 'Não')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

    class Meta:
        model = Ocorrencia
        fields = ['emergencia',
                  'tb_categoria_ID',
                  'data',
                  'hora',
                  'descricao',
                  'foto',
                  'validade',
                  'atendida',
                  'vitimado',
                  'vigilante_ID',
                  'usuario_ID',
                  'latitude',
                  'longitude']

    def clean(self):
        cleaned_data = self.cleaned_data

        return cleaned_data
