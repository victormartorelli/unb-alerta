from administracao import views
from django.conf.urls import url
from .views import AdminView

urlpatterns = [
    url(r'^admin/$',
        AdminView.as_view(), name='admin_list_apps'),
]
