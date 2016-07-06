# -*- coding: utf-8 -*-

# SERIALIZERS DA API - UNB ALERTA - REST FRAMEWORK
# SERIALIZERS: Converter objetos Python para JSON e de JSON para objetos Python

from django.contrib.auth.models import Group, User

from ocorrencia.models import Categoria, Local, Ocorrencia

from rest_framework import serializers

from usuario.models import Usuario

# USER


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

# GROUP


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ('id', 'name')

# USUÁRIO


class UsuarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Usuario
        fields = ('id',
                  'cpf',
                  'nome',
                  'rg',
                  'matricula',
                  'sexo',
                  'email',
                  'login',
                  'senha',
                  'status',
                  'data_nasc',
                  'user',
                  'grupo_usuario',
                  )

# OCORRÊNCIA


class OcorrenciaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ocorrencia
        fields = ('id',
                  'data',
                  'hora',
                  'latitude',
                  'longitude',
                  'descricao',
                  'foto',
                  'validade',
                  'atendida',
                  'emergencia',
                  'vitimado',
                  'repetida',
                  'resposta',
                  'usuario_ID',
                  'vigilante_ID',
                  'tb_categoria_ID',
                  'localidade'
                  )

# OCORRÊNCIA CREATE


class OcorrenciaCreateSerializer(serializers.ModelSerializer):

    data = serializers.DateField(
        format='iso-8601',
        input_formats=None,
        label='Data da Ocorrência',
    )

    hora = serializers.TimeField(
        format='iso-8601',
        input_formats=None,
        label='Hora da Ocorrência',
    )

    descricao = serializers.CharField(
        allow_blank=True,
        max_length=None,
        min_length=None,
        label='Descrição',
    )

    resposta = serializers.CharField(
        allow_blank=True,
        min_length=None,
        max_length=20,
        label='Resposta',
    )

    class Meta:
        model = Ocorrencia
        fields = ('data',
                  'hora',
                  'latitude',
                  'longitude',
                  'descricao',
                  'foto',
                  'validade',
                  'atendida',
                  'emergencia',
                  'vitimado',
                  'repetida',
                  'resposta',
                  'usuario_ID',
                  'vigilante_ID',
                  'tb_categoria_ID',
                  'localidade'
                  )

# CATEGORIA


class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        fields = ('id', 'tipo')

# LOCAL


class LocalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Local
        fields = ('nome_cod', 'pai', 'descricao')
