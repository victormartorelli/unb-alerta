from django.contrib import admin
from .models import Usuario
from django.contrib.auth.models import User


class UsuarioAdmin(admin.ModelAdmin):
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
    list_filter = ['sexo', 'data_nasc', 'grupo_usuario']
    search_fields = ['nome', 'email']
    list_display = ['nome',
                    'email',
                    'sexo',
                    'data_nasc',
                    'grupo_usuario']

    def save_model(self, request, obj, form, change):
        import ipdb; ipdb.set_trace()
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
