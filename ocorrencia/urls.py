# -*- coding: utf-8 -*-
from django.conf.urls import url

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView

from .views import (CriarOcorrenciaView, DescricaoOcorrenciaView,
                    ListaOcorrenciasView,
                    ListaValidacaoView, ValidarOcorrenciaEditView,
                    MinhasOcorrenciasView, OcorrenciaDeleteView,
                    GerarRelatorioView, FiltroMapa)

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

    url(r'^ocorrencias/(?P<pk>\d+)/deletar-ocorrencia$',
        OcorrenciaDeleteView.as_view(), name='deletar_ocorrencia'),

    url(r'^ocorrencias/minhas_ocorrencias/$',
        MinhasOcorrenciasView.as_view(), name='minhas_ocorrencias'),

    url(r'^estatisticas/$', FiltroMapa.as_view(),
        name='estatisticas'),

    url(r'^gerar-relatorio/$', GerarRelatorioView.as_view(),
        name='gerar_relatorio'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
