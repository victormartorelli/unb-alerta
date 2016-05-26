from django.contrib import admin

# Register your models here.

from .models import Categoria, Ocorrencia, Localizacao
    

class OcorrenciaAdmin(admin.ModelAdmin):
    fields = ['data','hora','validade','atendida','emergencia','vitimado','descricao','resposta','usuario_id','vigilante_id','tb_categoria_id','tb_localizacao_id']
    list_filter = ['data','tb_categoria_id']
    list_display = ('data','hora','usuario_id','tb_categoria_id')

admin.site.register(Categoria,)
admin.site.register(Ocorrencia,OcorrenciaAdmin)
admin.site.register(Localizacao,)
