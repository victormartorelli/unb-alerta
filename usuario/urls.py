from django.conf.urls import url

from .views import CriarUsuarioView

urlpatterns = [
    url(r'^usuario/cadastrar-usuario/$',
        CriarUsuarioView.as_view(), name='cadastrar_usuario'),
]
