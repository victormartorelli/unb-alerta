from django.conf.urls import url

from .views import CriarOcorrenciaView, ListaOcorrenciasView

urlpatterns = [
    url(r'^ocorrencias/$',
        ListaOcorrenciasView.as_view(), name='lista_ocorrencias'),

    url(r'^ocorrencias/(?P<pk>\d+)/criar-ocorrencia$',
        CriarOcorrenciaView.as_view(), name='criar_ocorrencia')
]
