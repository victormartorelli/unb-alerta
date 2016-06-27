# -*- coding: utf-8 -*-
# VIEWS DA API - UNB ALERTA - REST FRAMEWORK

# Importando os serializers de cada classe usada
from api.serializers import (

    CategoriaSerializer,
    GroupSerializer,
    LocalSerializer,
    OcorrenciaCreateSerializer,
    OcorrenciaSerializer,
    UserSerializer,
    UsuarioSerializer
)

# Importando os models preestabelecidos pelo Django e os models do UnB Alerta
from django.contrib.auth.models import Group, User
from django.http import Http404

from ocorrencia.models import Categoria, Local, Ocorrencia

from rest_framework import status

from rest_framework.decorators import permission_classes

# Importando generics da rest framework para a criação da APIView
from rest_framework.generics import (

    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView

)
# Importando arquivo com as permissões de User
from rest_framework.permissions import (

    AllowAny,
    IsAdminUser,
    IsAuthenticated,

)


from rest_framework.response import Response

from rest_framework.views import APIView

from usuario.models import Usuario

# USER
# Listagem de Users internos do Django bem quanto seus detalhes.
# Permissão: Só quem tem acesso é o Admin


class UserDetailAPIView(RetrieveAPIView):
    '''

    Detalhes dos users

    '''
    queryset = User.objects.all()  # Retorna todos os User
    serializer_class = UserSerializer  # Utiliza a classe serializer User
    permission_classes = [IsAdminUser]


class UserListAPIView(ListAPIView):
    '''

    Lista dos users

    '''
    queryset = User.objects.all()  # Retorna todos os User
    serializer_class = UserSerializer  # Utiliza a classe serializer User
    permission_classes = [IsAdminUser]

# GROUP
# Listagem de Groups internos do Django bem quanto seus detalhes.
# Permissão: Só quem tem acesso é o Admin


class GroupDetailAPIView(RetrieveAPIView):
    '''

    Detalhes dos grupos de users

    '''
    queryset = Group.objects.all()  # Retorna todos os Groups
    serializer_class = GroupSerializer  # Utiliza a classe serializer Group
    permission_classes = [IsAdminUser]  # Só quem tem acesso é o Admin


class GroupListAPIView(ListAPIView):
    '''

    Lista dos grupos de users

    '''
    queryset = Group.objects.all()  # Retorna todos os Groups
    serializer_class = GroupSerializer  # Utiliza a classe serializer Group
    permission_classes = [IsAdminUser]  # Só quem tem acesso é o Admin

# USUÁRIO
# Lista de todos os usários
# Permissão: Quem tem acesso é o Admin


class UsuarioList(APIView):
    """

    Lista todos os usuários e permite a criação.

    """
    # Função get: Retorna todos os usuários do banco

    def get(self, request, format=None):
        usuario = Usuario.objects.all()
        serializer = UsuarioSerializer(usuario, many=True)
        return Response(serializer.data)

    permission_classes = [IsAdminUser]  # Só o admin pode ver todos os usuários

# Criação de um novo usuário
# Permissão: liberado pra todos


class UsuarioCreate(APIView):
    """

    Lista todos os usuários e permite a criação.

    """
    # Função post: Cria um novo usuário

    def post(self, request, format=None):
        u = User.objects.create(
            username=request.data['login'],  # Passamos o login
            email=request.data['email']  # Passamos o email
        )

        u.set_password(request.data['senha'])

        request.data['user'] = u.id
        usuario = UsuarioSerializer(data=request.data)

        if usuario.is_valid():

            try:
                usuario.save()
            except utils.IntegrityError:
                u.delete()
                # Falhou
                return Response(usuario.errors,
                                status=status.HTTP_400_BAD_REQUEST)
            u.save()
            # Sucedeu
            return Response(usuario.data, status=status.HTTP_201_CREATED)

        u.delete()
        # Falhou
        return Response(usuario.errors, status=status.HTTP_400_BAD_REQUEST)

    permission_classes = [AllowAny]  # Qualquer um pode criar usuários

# Detalhes de um Usuário
# Permissão: liberado para o próprio usuário


class UsuarioDetail(APIView):
    """

    Acessa um usuário específico com sua id, pode editar e deletar.

    """
    # Função que retorna um objeto Usuário

    def get_object(self, pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            raise Http404
    # PERMISSÕES

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated()

    def check_object_permission(self, user, obj):
        return (user and user.is_authenticated() and
                (user.is_staff or obj.user_id == user.id))

    def has_object_permission(self, request, view, obj):
        return True
    # FIM DAS PERMISSÕES

    # Função que retorna os detalhes sobre um usuário específico
    def get(self, request, pk, format=None):

        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario)

        x = self.has_permission(request, UsuarioDetail)
        y = self.check_object_permission(request.user, usuario)
        z = self.has_object_permission(request, UsuarioDetail, usuario)

        if (x and y and z):
            return Response(serializer.data)
        return Response(status=status.HTTP_204_NO_CONTENT)

# Edição de um usuário
# Permissão: liberado para o próprio usuário e admin


class UsuarioEdit(APIView):
    """

    Edita um usuário específico

    """

    # PERMISSÕES

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated()

    def check_object_permission(self, user, obj):
        return (user and user.is_authenticated() and
                (user.is_staff or obj.user_id == user.id))

    def has_object_permission(self, request, view, obj):
        return True
    # FIM DAS PERMISSÕES

    # Função que retorna os detalhes sobre um usuário específico
    def get(self, request, pk, format=None):

        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario)

        x = self.has_permission(request, UsuarioEdit)
        y = self.check_object_permission(request.user, usuario)
        z = self.has_object_permission(request, UsuarioEdit, usuario)

        if (x and y and z):
            return Response(serializer.data)
        return Response(status=status.HTTP_204_NO_CONTENT)

    # Função que retorna um objeto Usuário
    def get_object(self, pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            raise Http404

    # Função que edita os valores de um usuário específico
    def put(self, request, pk, format=None):
        # Cria uma referência ao usuário escolhido
        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario, data=request.data)

        x = self.has_permission(request, UsuarioEdit)
        y = self.check_object_permission(request.user, usuario)
        z = self.has_object_permission(request, UsuarioEdit, usuario)

        if (x and y and z):
            # Se o serailizer for valido poderá editar os campos
            if serializer.is_valid():
                if (request.data['login'] != usuario.login or
                    request.data['email'] != usuario.email or
                        request.data['senha'] != usuario.senha):
                    user = User.objects.get(pk=usuario.user.pk)
                    user.username = request.data['login']
                    user.email = request.data['email']
                    user.set_password(request.data['senha'])
                    user.save()
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)

# Deletar um usuário
# Permissão liberada para o admin


class UsuarioDelete(APIView):

    # Função que retorna os detalhes sobre um usuário específico
    def get(self, request, pk, format=None):
        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)

    # Função que retorna um objeto Usuário
    def get_object(self, pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            raise Http404

    # Deleta um usuário e seu user associado
    def delete(self, request, pk, format=None):
        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario)
        u = User.objects.get(id=serializer.data['user'])
        u.delete()
        usuario.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

    permission_classes(IsAdminUser)

# OCORRÊNCIA
# Criar uma nova ocorrência
# Permissão: qualquer usuário cadastrado


class OcorrenciaCreateAPIView(CreateAPIView):
    '''

    Crie uma nova ocorrência

    '''
    queryset = Ocorrencia.objects.all()
    serializer_class = OcorrenciaCreateSerializer
    permission_classes = [IsAuthenticated]

# Detalhes de uma ocorrência
# Permissão: dono da ocorrência, admin, vigilante


class OcorrenciaDetail(APIView):
    '''

    Informações das ocorrências

    '''

    def is_vigilante(self, obj):

        grupo = obj.grupo_usuario

        if (grupo.id == 2):
            return True
        return False

    def get_usuario(self, pk):
        try:

            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            raise Http404

    def get_usuario_vigilante(self, user_id):
        try:
            return Usuario.objects.get(user_id=user_id)
        except Usuario.DoesNotExist:
            raise Http404

    # Função que retorna um objeto Ocorrencia
    def get_object(self, pk):
        try:
            return Ocorrencia.objects.get(pk=pk)
        except Ocorrencia.DoesNotExist:
            raise Http404
    # PERMISSÕES

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated()

    def check_object_permission(self, user, obj):

        usuario_id = obj.usuario_ID
        usuario = self.get_usuario(usuario_id)

        vigilante_id = user.id
        vigilante = self.get_usuario_vigilante(vigilante_id)

        return (user and user.is_authenticated() and
                (user.is_staff or self.is_vigilante(vigilante) or
                    usuario.user_id == user.id))

    def has_object_permission(self, request, view, obj):
        return True
    # FIM DAS PERMISSÕES

    # Função que retorna os detalhes sobre uma ocorrência específica
    def get(self, request, pk, format=None):

        ocorrencia = self.get_object(pk)
        serializer = OcorrenciaSerializer(ocorrencia)

        x = self.has_permission(request, OcorrenciaDetail)
        y = self.check_object_permission(request.user, ocorrencia)
        z = self.has_object_permission(request, OcorrenciaDetail, ocorrencia)

        if (x and y and z):
            return Response(serializer.data)
        return Response(status=status.HTTP_204_NO_CONTENT)

# Lista de ocorrências
# Permissão: usuario dono da ocorrencia, ocorrências validadas


class OcorrenciaList(APIView):
    '''

    Liste as ocorrências

    '''

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated()

    def is_vigilante(self, obj):

        grupo = obj.grupo_usuario

        if (grupo.id == 2):
            return True
        return False

    def get_usuario(self, user):
        try:
            return Usuario.objects.get(user=user)
        except Usuario.DoesNotExist:
            raise Http404

    # Função get: Retorna todos as ocorrencias se for admin e as validadas e
    # as do owner
    def get(self, request, format=None):
        # pega user id
        # acha usuario
        # filtra ocorrencias com aquele id e ocorrencias validadas
        # retorna elas
        x = self.has_permission(request, OcorrenciaList)
        if (x): 
            usuario = self.get_usuario(request.user)
            # user eh admin
            if (request.user.is_staff or self.is_vigilante(usuario)):
                ocorrencia = Ocorrencia.objects.all()
                serializer = OcorrenciaSerializer(ocorrencia, many = True)
                print(ocorrencia)
                return Response(serializer.data)

            # user nao eh admin
            elif(self.has_permission(request, OcorrenciaList)):
                ocorrencia = Ocorrencia.objects.filter(usuario_ID = usuario.id) | Ocorrencia.objects.filter(validade = True)
                serializer = OcorrenciaSerializer(ocorrencia, many = True)
                return Response(serializer.data)
            return Response(status = status.HTTP_204_NO_CONTENT)


# Editar ocorrências
# Permissão: usuário dono da ocorrência se ela nao tiver sido validada,
# vigilante,admin*
class OcorrenciaEdit(APIView):
    '''

    Edite ocorrência

    '''

    def is_vigilante(self, obj):

        grupo = obj.grupo_usuario

        if (grupo.id == 2):
            return True
        return False

    def get_usuario(self, user_id):
        try:
            return Usuario.objects.get(user_id=user_id)
        except Usuario.DoesNotExist:
            raise Http404

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated()

        # Função que retorna um objeto Usuário
    def get_object(self, pk):
        try:
            return Ocorrencia.objects.get(pk=pk)
        except Ocorrencia.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        # pega user id
        # acha usuario
        # filtra ocorrencias com aquele id e ocorrencias validadas
        # retorna elas
        user_id = request.user.id
        usuario = self.get_usuario(user_id)

        # user eh admin
        if (request.user.is_staff or self.is_vigilante(usuario)):
            ocorrencia = self.get_object(pk)
            serializer = OcorrenciaSerializer(ocorrencia)
            return Response(serializer.data)

        # user nao eh admin
        elif(self.has_permission(request, OcorrenciaEdit)):

            ocorrencia = self.get_object(pk)

            if (ocorrencia.usuario_ID == usuario.id and
                    not ocorrencia.validade):
                serializer = OcorrenciaSerializer(ocorrencia)
                return Response(serializer.data)
            return Response(status=status.HTTP_204_NO_CONTENT)

    # Função que edita os valores de um usuário específico
    def put(self, request, pk, format=None):
        user_id = request.user.id
        usuario = self.get_usuario(user_id)

        if (request.user.is_staff or self.is_vigilante(usuario)):
            ocorrencia = self.get_object(pk)
            serializer = OcorrenciaSerializer(ocorrencia)
            return Response(serializer.data)

        # user nao eh admin
        elif(self.has_permission(request, OcorrenciaEdit)):

            ocorrencia = self.get_object(pk)

            if (ocorrencia.usuario_ID == usuario.id and
                    not ocorrencia.validade):
                ocorrencia = self.get_object(pk)
                serializer = OcorrenciaSerializer(
                    ocorrencia, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors,
                                status=status.HTTP_400_BAD_REQUEST)
            return Response(status=status.HTTP_204_NO_CONTENT)

# Deletar ocorrência
# Permissão: usuário dono da ocorrência se ela não tiver sido validada,
# vigilante, admin*


class OcorrenciaDelete(APIView):
    '''
    Delete uma ocorrência
    '''

    def is_vigilante(self, obj):

        grupo = obj.grupo_usuario

        if (grupo.id == 2):
            return True
        return False

    def get_usuario(self, user_id):
        try:
            return Usuario.objects.get(user_id=user_id)
        except Usuario.DoesNotExist:
            raise Http404

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated()

        # Função que retorna um objeto Usuário
    def get_object(self, pk):
        try:
            return Ocorrencia.objects.get(pk=pk)
        except Ocorrencia.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        # pega user id
        # acha usuario
        # filtra ocorrencias com aquele id e ocorrencias validadas
        # retorna elas
        user_id = request.user.id
        usuario = self.get_usuario(user_id)

        # user eh admin
        if (request.user.is_staff or self.is_vigilante(usuario)):
            ocorrencia = self.get_object(pk)
            serializer = OcorrenciaSerializer(ocorrencia)
            return Response(serializer.data)

        # user nao eh admin
        elif(self.has_permission(request, OcorrenciaEdit)):

            ocorrencia = self.get_object(pk)

            if (ocorrencia.usuario_ID == usuario.id and
                    not ocorrencia.validade):
                serializer = OcorrenciaSerializer(ocorrencia)
                return Response(serializer.data)
            return Response(status=status.HTTP_204_NO_CONTENT)

    # Deleta um usuário e seu user associado
    def delete(self, request, pk, format=None):
        user_id = request.user.id
        usuario = self.get_usuario(user_id)

        if (request.user.is_staff or self.is_vigilante(usuario)):
            ocorrencia = self.get_object(pk)
            ocorrencia.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        # user nao eh admin
        elif(self.has_permission(request, OcorrenciaDelete)):

            ocorrencia = self.get_object(pk)

            if (ocorrencia.usuario_ID == usuario.id and
                    not ocorrencia.validade):
                ocorrencia.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            return Response(status=status.HTTP_204_NO_CONTENT)

# CATEGORIA
# Só tem acesso se o usuário for Admin
# Criar Admin, mudar no BD is_staff de um User para TRUE
# Permissão: Só quem tem acesso é o Admin


class CategoriaCreateAPIView(CreateAPIView):
    '''

    Crie uma nova categoria

    '''
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = (IsAdminUser,)


class CategoriaDetailAPIView(RetrieveAPIView):
    '''

    Informações das categorias

    '''
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = (IsAdminUser,)


class CategoriaListAPIView(ListAPIView):
    '''

    Liste as categorias

    '''
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = (IsAdminUser,)


class CategoriaUpdateAPIView(RetrieveUpdateAPIView):
    '''

    Edite uma categoria

    '''
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = (IsAdminUser,)


class CategoriaDeleteAPIView(DestroyAPIView):
    '''

    Delete uma categoria

    '''
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = (IsAdminUser,)

# LOCAL
# Só tem acesso se o usuário for Admin
# Criar Admin, mudar no BD is_staff de um User para TRUE
# Permissão: Só quem tem acesso é o Admin


class LocalCreateAPIView(CreateAPIView):
    '''

    Crie uma novo local

    '''
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = (IsAdminUser,)


class LocalDetailAPIView(RetrieveAPIView):
    '''

    Informações dos locais

    '''
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = (IsAdminUser,)


class LocalListAPIView(ListAPIView):
    '''

    Liste os locais

    '''
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = (IsAdminUser,)


class LocalUpdateAPIView(RetrieveUpdateAPIView):
    '''

    Edite um local

    '''
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = (IsAdminUser,)


class LocalDeleteAPIView(DestroyAPIView):
    '''

    Delete uma local

    '''
    queryset = Local.objects.all()
    serializer_class = LocalSerializer
    permission_classes = (IsAdminUser,)
