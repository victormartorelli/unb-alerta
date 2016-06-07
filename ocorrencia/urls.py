from django.conf.urls import url
from django.views.generic.base import TemplateView

from .views import (CriarOcorrenciaView, ListaOcorrenciasView,
                    ListaValidacaoView, ValidarOcorrenciaEditView)

urlpatterns = [
    url(r'^ocorrencias/$',
        ListaOcorrenciasView.as_view(), name='lista_ocorrencias'),

    url(r'^ocorrencias/criar-ocorrencia/$',
        CriarOcorrenciaView.as_view(), name='criar_ocorrencia'),

    url(r'^ocorrencias/(?P<pk>\d+)$',
        TemplateView.as_view(
            template_name='ocorrencias/descricao_ocorrencia.html'),
        name='ver_ocorrencia'),

    url(r'^ocorrencias/validar$',
        ListaValidacaoView.as_view(), name='lista_validacao'),

    url(r'^ocorrencias/(?P<pk>\d+)/validar$',
        ValidarOcorrenciaEditView.as_view(), name='validar_ocorrencia'),
]
