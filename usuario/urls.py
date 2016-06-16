from django.conf.urls import url
from django.contrib.auth.views import (login, logout, password_reset,
                                       password_reset_done,
                                       password_reset_confirm,
                                       password_reset_complete)

from unb_alerta.settings import DEFAULT_FROM_EMAIL
from usuario.forms import (LoginForm, RecuperarSenhaEmailForm,
                           RecuperacaoMudarSenhaForm)

from .views import CriarUsuarioView, PerfilView

recuperar_email = [
    url(r'^recuperar/recuperar_senha/$',
        password_reset,
        {'template_name': 'usuario/recuperar_senha.html',
         'password_reset_form': RecuperarSenhaEmailForm,
         'post_reset_redirect': 'recuperar_senha_finalizado',
         'email_template_name': 'usuario/recuperar_senha_email.html',
         'from_email': DEFAULT_FROM_EMAIL,
         'html_email_template_name': 'usuario/recuperar_senha_email.html'},
        name='recuperar_senha'),
    url(r'^recuperar/recuperar_recuperar/finalizado/$',
        password_reset_done,
        {'template_name': 'usuario/recuperar_senha_enviado.html'},
        name='recuperar_senha_finalizado'),
    url(r'^recuperar/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$',
        password_reset_confirm,
        {'post_reset_redirect': 'recuperar_senha_completo',
         'template_name': 'usuario/recuperacao_senha_form.html',
         'set_password_form': RecuperacaoMudarSenhaForm},
        name='recuperar_senha_confirma'),
    url(r'^recuperar/completo/$',
        password_reset_complete,
        {'template_name': 'usuario/recuperacao_senha_completo.html'},
        name='recuperar_senha_completo'),
]

urlpatterns = [
    url(r'^usuario/cadastrar-usuario/$',
        CriarUsuarioView.as_view(), name='cadastrar_usuario'),

    url(r'^login/$', login, {
        'template_name': 'usuario/login.html',
        'authentication_form': LoginForm},
        name='login'),

    url(r'^logout/$', logout, {'next_page': '/login'}, name='logout'),

    url(r'^perfil/$', PerfilView.as_view(), name='perfil'),
] + recuperar_email
