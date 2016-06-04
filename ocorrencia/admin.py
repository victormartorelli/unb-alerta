from django.contrib import admin

# Register your models here.

from .models import Categoria, Ocorrencia

admin.site.register(Ocorrencia)
admin.site.register(Categoria)

