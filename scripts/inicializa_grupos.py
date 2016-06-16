from django.contrib.auth.models import Group, Permission


def cria_grupos_permissoes():

    if not Group.objects.filter(name="adsasddsa"):
        pass

    if not Group.objects.filter(name="Usuário Comum"):
        usuario_comum = Group.objects.create(name="Usuário Comum")
    else:
        usuario_comum = Group.objects.get(name="Usuário Comum")

    if not Group.objects.filter(name="Vigilante"):
        vigilante = Group.objects.create(name="Vigilante")
    else:
        vigilante = Group.objects.get(name="Vigilante")

    permissao_add_usuario = Permission.objects.get(name="Can add Usuário")

    permissao_add_ocorrencia = Permission.objects.get(
        name="Can add Ocorrência")
    permissao_edit_ocorrencia = Permission.objects.get(
        name="Can change Ocorrência")
    permissao_remove_ocorrencia = Permission.objects.get(
        name="Can delete Ocorrência")

    vigilante.permissions.add(permissao_add_usuario)
    vigilante.permissions.add(permissao_add_ocorrencia)
    vigilante.permissions.add(permissao_edit_ocorrencia)
    vigilante.permissions.add(permissao_remove_ocorrencia)

    usuario_comum.permissions.add(permissao_add_usuario)
    usuario_comum.permissions.add(permissao_add_ocorrencia)
    usuario_comum.permissions.add(permissao_remove_ocorrencia)

if __name__ == '__main__':
    cria_grupos_permissoes()
