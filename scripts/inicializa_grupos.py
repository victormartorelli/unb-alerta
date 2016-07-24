# -*- coding: utf-8 -*-
from django.contrib.auth.models import Group, Permission
from ocorrencia.models import StatusOcorrencia


def cria_grupos_permissoes():

    if not Group.objects.filter(name="teste"):
        pass

    if not Group.objects.filter(name="Usuário Comum"):
        usuario_comum = Group.objects.create(name="Usuário Comum")
    else:
        usuario_comum = Group.objects.get(name="Usuário Comum")

    if not Group.objects.filter(name="Vigilante"):
        vigilante = Group.objects.create(name="Vigilante")
    else:
        vigilante = Group.objects.get(name="Vigilante")

    permissao_add_usuario = Permission.objects.filter(name="Can add Usuário")

    permissao_add_ocorrencia = Permission.objects.filter(
        name="Can add Ocorrência")
    permissao_edit_ocorrencia = Permission.objects.filter(
        name="Can change Ocorrência")
    permissao_remove_ocorrencia = Permission.objects.filter(
        name="Can delete Ocorrência")

    for p in permissao_add_usuario:
        vigilante.permissions.add(p)
    for p in permissao_add_ocorrencia:
        vigilante.permissions.add(p)
    for p in permissao_edit_ocorrencia:
        vigilante.permissions.add(p)
    for p in permissao_remove_ocorrencia:
        vigilante.permissions.add(p)

    for p in permissao_add_usuario:
        usuario_comum.permissions.add(p)
    for p in permissao_add_ocorrencia:
        usuario_comum.permissions.add(p)
    for p in permissao_remove_ocorrencia:
        usuario_comum.permissions.add(p)

    s1 = StatusOcorrencia()
    s1.status = 'Em Andamento'

    s2 = StatusOcorrencia()
    s2.status = 'Finalizada'

    s3 = StatusOcorrencia()
    s3.status = 'Homologada'

    s1.save()
    s2.save()
    s3.save()

if __name__ == '__main__':
    cria_grupos_permissoes()
