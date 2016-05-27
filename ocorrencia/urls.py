from django.conf.urls import url
from django.views.generic.base import TemplateView

from .views import CriarOcorrenciaView, ListaOcorrenciasView

urlpatterns = [
    url(r'^ocorrencias/$',
        ListaOcorrenciasView.as_view(), name='lista_ocorrencias'),

    url(r'^ocorrencias/criar-ocorrencia/(?P<pk>\d+)$',
        CriarOcorrenciaView.as_view(), name='criar_ocorrencia'),

    url(r'^ocorrencias/(?P<pk>\d+)$',
        TemplateView.as_view(template_name='ocorrencias/descricao_ocorrencia.html'), name='ver_ocorrencia')
]
