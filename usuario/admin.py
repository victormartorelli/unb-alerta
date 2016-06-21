from django.contrib import admin
from .models import Usuario
from django.contrib.auth.models import User, Group
from .filters import StatusFilter, GroupFilter, IdadeFilter

from django.forms import ModelForm, ValidationError, ChoiceField, RadioSelect
from django import forms


# '''
# TODO 
#     Trocar seleção de sexo por select one
# '''

class UsuarioAdminForm(forms.ModelForm):
    senha = forms.CharField(max_length=45, widget=forms.PasswordInput)


class UsuarioAdmin(admin.ModelAdmin):
    form = UsuarioAdminForm

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
    list_filter = [IdadeFilter, GroupFilter, StatusFilter, 'user__last_login']
    search_fields = ['nome',
                     'email',
                     'cpf',
                     'rg',
                     'login',
                     'matricula']
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
        grupo = Group.objects.get(name=obj.grupo_usuario.name)
        u.groups.add(grupo)
        u.is_active = obj.status
        u.set_password(obj.senha)
        u.save()
        obj.senha = u.password
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
