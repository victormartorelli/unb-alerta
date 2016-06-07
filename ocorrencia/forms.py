from django import forms
from django.forms import ModelForm
from .models import Categoria, Ocorrencia

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit


my_default_errors = {
    'required': 'Este campo é obrigatório',
    'invalid': 'Insira um campo válido'
}


class OcorrenciaForm(ModelForm):

    tb_categoria_ID = forms.ModelChoiceField(
        label=('Tipo de Ocorrência'),
        required=True,
        queryset=Categoria.objects.all(),
        empty_label='Selecione',
        error_messages=my_default_errors
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

    foto = forms.ImageField(label='Fotografia',
                            required=False,
                            widget=forms.FileInput
                            )

    descricao = forms.CharField(
        widget=forms.Textarea(
            attrs={'rows': 10,
                   'cols': 48,
                   'placeholder': 'Escreva aqui a descricao da ocorrencia'}))

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

    def __init__(self, *args, **kwargs):
        super(OcorrenciaForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_id = 'id-exampleForm'
        self.helper.form_class = 'blueForms'
        self.helper.form_method = 'post'
        self.helper.form_action = 'submit_survey'

        self.helper.add_input(Submit('submit', 'Submit'))


class ValidarOcorrenciaEditForm(ModelForm):

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

    repetida = forms.ChoiceField(
        label='É repetida?',
        choices=[(False, 'Não'), (True, 'Sim')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

    validade = forms.ChoiceField(
        label='É válida?',
        choices=[(False, 'Não'), (True, 'Sim')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

    atendida = forms.ChoiceField(
        label='Foi atendida?',
        choices=[(False, 'Não'), (True, 'Sim')],
        widget=forms.Select(
            attrs={'class': 'selector'}))

    class Meta:
        model = Ocorrencia
        fields = ['emergencia',
                  'tb_categoria_ID',
                  'vitimado',
                  'data',
                  'hora',
                  'latitude',
                  'longitude',
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
                   'descricao': forms.HiddenInput()}
