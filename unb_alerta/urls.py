# -*- coding: utf-8 -*-
"""unb_alerta URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from django.contrib.auth.models import User
from rest_framework_jwt.views import obtain_jwt_token
# import ocorrencia.urls
# import base.urls

urlpatterns = [
    url(r'^$', TemplateView.as_view(
        template_name='inicial.html'),
        name='inicio'),
    url(r'^admin/', admin.site.urls),
    url(r'', include('ocorrencia.urls')),
    url(r'', include('usuario.urls')),
    url(r'^captcha/', include('captcha.urls')),
    # url(r'', include(ocorrencia.urls)),
    url(r'^api/', include('api.urls')),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),


    # # must come at the end
    # #   so that base /sistema/ url doesn't capture its children
    # url(r'', include(base.urls)),
]

admin.site.unregister(User)
