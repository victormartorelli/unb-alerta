from django.contrib import admin
from .models import Usuario
from django.contrib.auth.models import User
from .filters import StatusFilter, GroupFilter

from django.forms import ModelForm, ValidationError, ChoiceField, RadioSelect
from django import forms

'''
TODO 
    Trocar seleção de sexo por select one
class UsuarioAdminForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = "__all__" 
        sexo = ChoiceField(
            label = 'Opcoes',
            choices = (
                (0, 'Don\'t change anything.'),
                (1, 'Do some crazy stuff.'),
            ),
            initial = 0,
            widget = RadioSelect,
        )
'''


class UsuarioAdmin(admin.ModelAdmin):
    '''
    form   = UsuarioAdminForm
    '''
    fields = ['login',
              'senha',
              'nome',
              'cpf',
              'rg',
              'matricula',
              'sexo',
              'email',
              'data_nasc',
              'status',
              'grupo_usuario']
    list_filter = ['sexo', 'data_nasc', GroupFilter, StatusFilter]
    search_fields = ['nome', 'email']
    list_display = ['nome',
                    'email',
                    'sexo',
                    'data_nasc',
                    'grupo_usuario']

    def save_model(self, request, obj, form, change):
        u = User.objects.get_or_create(
            username=obj.login,
            email=obj.email)
        u = u[0]
        u.is_active = obj.status
        u.set_password(obj.senha)
        u.save()
        obj.user = u
        obj.save()

admin.site.register(Usuario, UsuarioAdmin)
admin.site.site_title = 'Administração - UnB Alerta'
admin.site.site_header = 'Administração - UnB Alerta'
