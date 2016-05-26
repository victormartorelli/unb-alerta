from django.conf.urls import url

from .views import CriarOcorrenciaView

urlpatterns = [
    url(r'^ocorrencias/(?P<pk>\d+)/criar-ocorrencia$',
        CriarOcorrenciaView.as_view(), name='criar_ocorrencia')
]
