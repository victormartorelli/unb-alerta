# -*- coding: utf-8 -*- 
from rest_framework import permissions
from django.contrib.auth.models import User, Group
from usuario.models import Usuario

class IsSuperuser(permissions.BasePermission):
    """
    
    Permissão dos superusers

    """

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated() and request.user.is_superuser

    def check_object_permission(self, user, obj):
            return (user.is_superuser)

    def has_object_permission(self, request, view, obj):
        if (self.check_object_permission(request.user, obj)):
            return True

