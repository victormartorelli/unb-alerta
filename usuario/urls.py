from django.conf.urls import patterns, include, url
from django.contrib.auth.views import login, logout
from django.contrib.auth import views as auth_views

from usuario.forms import LoginForm

from .views import CriarUsuarioView, PerfilView

urlpatterns = [
    url(r'^usuario/cadastrar-usuario/$',
        CriarUsuarioView.as_view(), name='cadastrar_usuario'),

    url(r'^login/$', login, {
        'template_name': 'usuario/login.html',
        'authentication_form': LoginForm},
        name='login'),

    url(r'^logout/$', logout, {'next_page': '/login'}, name='logout'),

    url(r'^perfil/$', PerfilView.as_view(), name='perfil'),

    url(r'^reset/password_reset/$',
        'django.contrib.auth.views.password_reset',
        name='reset_password_reset1'),

    url(r'^reset/password_reset/done/$',
        'django.contrib.auth.views.password_reset_done',
        name='password_reset_done'),

    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$',
        'django.contrib.auth.views.password_reset_confirm',
        name='password_reset_confirm'),

    url(r'^reset/done/$',
        'django.contrib.auth.views.password_reset_complete',
        name='password_reset_complete'),

]
