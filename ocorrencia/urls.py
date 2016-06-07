from django.conf.urls import url

from .views import (CriarOcorrenciaView, DescricaoOcorrenciaView,
                    ListaOcorrenciasView,
                    ListaValidacaoView, ValidarOcorrenciaEditView)

urlpatterns = [
    url(r'^ocorrencias/$',
        ListaOcorrenciasView.as_view(), name='lista_ocorrencias'),

    url(r'^ocorrencias/criar-ocorrencia/$',
        CriarOcorrenciaView.as_view(), name='criar_ocorrencia'),

    url(r'^ocorrencias/(?P<pk>\d+)$',
        DescricaoOcorrenciaView.as_view(), name='ver_ocorrencia'),

    url(r'^ocorrencias/validar$',
        ListaValidacaoView.as_view(), name='lista_validacao'),

    url(r'^ocorrencias/(?P<pk>\d+)/validar$',
        ValidarOcorrenciaEditView.as_view(), name='validar_ocorrencia'),
]
