# -*- coding: utf-8 -*-
from django.conf.urls import url

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic.base import TemplateView

from .views import (CriarOcorrenciaView, DescricaoOcorrenciaView,
                    ListaOcorrenciasView,
                    ListaValidacaoView, ValidarOcorrenciaEditView,
                    MinhasOcorrenciasView, OcorrenciaDeleteView)

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

    url(r'^estatisticas/$', TemplateView.as_view(
        template_name='mapa.html'),
        name='estatisticas'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
