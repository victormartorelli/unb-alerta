from django.contrib import admin
from .models import Usuario
from django.contrib.auth.models import User
from .filters import StatusFilter, GroupFilter

from django import forms
from django.forms import ModelForm, ValidationError, ChoiceField, RadioSelect, PasswordInput

'''
TODO 
    Trocar seleção de sexo por select one
'''
class UsuarioAdminForm(forms.ModelForm):
    senha = forms.CharField(max_length=45, widget=forms.PasswordInput)


class UsuarioAdmin(admin.ModelAdmin):
    form   = UsuarioAdminForm
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

    def delete_model(self, request, obj):
        u = obj.user
        user = User.objects.get(id=u.id)
        user.delete()
        obj.delete()

admin.site.register(Usuario, UsuarioAdmin)
admin.site.site_title = 'Administração - UnB Alerta'
admin.site.site_header = 'Administração - UnB Alerta'
