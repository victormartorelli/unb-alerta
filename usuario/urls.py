from django.conf.urls import url
from django.contrib.auth.views import login, logout

from django.views.generic.base import TemplateView

from usuario.forms import LoginForm

from .views import CriarUsuarioView

urlpatterns = [
    url(r'^usuario/cadastrar-usuario/$',
        CriarUsuarioView.as_view(), name='cadastrar_usuario'),
    url(r'^login/$', login, {
        'template_name': 'usuario/login.html',
        'authentication_form': LoginForm},
        name='login'),
    url(r'^logout/$', logout, {'next_page': '/login'}, name='logout'),
    url(r'^perfil/$', TemplateView.as_view(
        template_name='perfil.html'),
        name='perfil'),
]
