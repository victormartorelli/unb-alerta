from django import forms
from django.forms import ModelForm

from .models import Categoria, Ocorrencia


class OcorrenciaForm(ModelForm):
    tb_categoria_id = forms.ModelChoiceField(
        label=('Tipo de Ocorrência'),
        required=True,
        queryset=Categoria.objects.all(),
        empty_label='Selecione',
    )
    emergencia = forms.ChoiceField(
        required=True,
        label='Emergência?',
        choices=[(True, 'Sim'), (False, 'Não')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

    class Meta:
        model = Ocorrencia
        fields = ['data',
                  'hora',
                  'descricao',
                  'foto']

    def clean(self):
        cleaned_data = self.cleaned_data

        return cleaned_data
