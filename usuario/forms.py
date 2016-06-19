from django import forms
from django.contrib.auth.models import User, Group
from django.db import transaction
from django.forms import ModelForm, ValidationError
from django.contrib.auth.forms import (AuthenticationForm, PasswordResetForm,
                                       SetPasswordForm)
from .models import Usuario


class LoginForm(AuthenticationForm):
    username = forms.CharField(
        label="Username", max_length=30,
        widget=forms.TextInput(
            attrs={'class': 'form-control', 'name': 'username'}))

    password = forms.CharField(
        label="Password", max_length=30,
        widget=forms.PasswordInput(
            attrs={'class': 'form-control', 'name': 'password'}))


class UsuarioForm(ModelForm):
    senha = forms.CharField(
        max_length=45,
        label='Senha',
        widget=forms.PasswordInput())

    confirma_senha = forms.CharField(
        max_length=45,
        label='Confirmar Senha',
        widget=forms.PasswordInput())

    confirma_email = forms.CharField(
        max_length=45,
        label='Confirmar Email')

    class Meta:
        model = Usuario
        fields = ['login',
                  'email',
                  'nome',
                  'senha',
                  'confirma_senha',
                  'confirma_email',
                  'cpf',
                  'rg',
                  'status',
                  'matricula',
                  'sexo',
                  'data_nasc',
                  'grupo_usuario']

        widgets = {'status': forms.HiddenInput(),
                   'grupo_usuario': forms.HiddenInput()}

    def valida_igualdade(self, texto1, texto2, msg):
        if texto1 != texto2:
            raise ValidationError(msg)
        return True

    def clean(self):

        if ('senha' not in self.cleaned_data or
                'confirma_senha' not in self.cleaned_data):
            raise ValidationError(
                'Favor preencher o campo senha e o de confirmação')

        msg = 'As senhas não conferem.'
        self.valida_igualdade(
            self.cleaned_data['senha'],
            self.cleaned_data['confirma_senha'],
            msg)

        if ('email' not in self.cleaned_data or
                'confirma_email' not in self.cleaned_data):
            raise ValidationError('Favor informar endereços de email')

        msg = 'Os emails não conferem.'
        self.valida_igualdade(
            self.cleaned_data['email'],
            self.cleaned_data['confirma_email'],
            msg)

        if (self.cleaned_data['cpf'] != '' and len(self.cleaned_data['cpf']) != 14):
            raise ValidationError('CPF deve ter 11 dígitos')

        if len(self.cleaned_data['matricula']) > 10:
            raise ValidationError(
                'A matrícula deve ter ter no máximo 9 números')

        msg = 'As senhas não conferem.'
        self.valida_igualdade(
            self.cleaned_data['senha'],
            self.cleaned_data['confirma_senha'],
            msg)

        email_existente1 = Usuario.objects.filter(
            email=self.cleaned_data['email'])

        email_existente2 = User.objects.filter(
            email=self.cleaned_data['email'])

        if email_existente1 or email_existente2:
            msg = 'Esse email já foi cadastrado.'
            raise ValidationError(msg)

        return self.cleaned_data

    @transaction.atomic
    def save(self, commit=False):
        usuario = super(UsuarioForm, self).save(commit)

        u = User.objects.create(
            username=usuario.login,
            email=usuario.email)
        u.set_password(self.cleaned_data['senha'])
        u.is_active = usuario.status
        usuario.password = u.password
        u.save()

        usuario.user = u
        usuario.save()

        grupo = Group.objects.get(name='Usuário Comum')
        u.groups.add(grupo)

        return usuario

    def __init__(self, *args, **kwargs):
        super(UsuarioForm, self).__init__(*args, **kwargs)
        self.fields['cpf'].widget.attrs['class'] = 'cpf'
        self.fields['data_nasc'].widget.attrs['class'] = 'data'


class RecuperarSenhaEmailForm(PasswordResetForm):

    def __init__(self, *args, **kwargs):
        super(RecuperarSenhaEmailForm, self).__init__(*args, **kwargs)

    def clean(self):
        email_existente_usuario = Usuario.objects.filter(
            email=self.cleaned_data['email'])
        email_existente_user = User.objects.filter(
            email=self.cleaned_data['email'])

        if not email_existente_usuario and not email_existente_user:
            msg = 'Não existe nenhum usuário cadastrado com este e-mail.'
            raise ValidationError(msg)

        return self.cleaned_data


class RecuperacaoMudarSenhaForm(SetPasswordForm):
    def __init__(self, *args, **kwargs):
        super(RecuperacaoMudarSenhaForm, self).__init__(*args, **kwargs)
