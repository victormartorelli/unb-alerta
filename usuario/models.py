# -*- coding: utf-8 -*-
from django.contrib.auth.models import User, Group
from django.db import models


class Usuario(models.Model):
    '''
        Usuário cadastrado via web
    '''
    id = models.AutoField(db_column='ID', primary_key=True)
    user = models.OneToOneField(User, verbose_name='Usuário')
    nome = models.CharField(max_length=45)
    login = models.CharField(
        verbose_name='Nome de Usuário',
        unique=True,
        max_length=50)
    cpf = models.CharField(
        db_column='CPF',
        unique=True,
        max_length=15,
        blank=True,
        null=True,
        verbose_name='CPF')
    rg = models.CharField(
        db_column='RG',
        max_length=15,
        blank=True,
        null=True,
        unique=True,
        verbose_name='RG')
    matricula = models.CharField(
        blank=True,
        null=True,
        max_length=10,
        unique=True,
        verbose_name='Matrícula')

    sexo = models.CharField(
        max_length=1,
        blank=True,
        null=True,
        verbose_name='Gênero')
    email = models.EmailField(
        max_length=45,
        unique=True,
        verbose_name='E-mail')
    senha = models.CharField(max_length=128)
    status = models.BooleanField(default=False, verbose_name='Ativo?')
    data_nasc = models.DateField(
        blank=True,
        null=True,
        verbose_name='Data de Nascimento')
    grupo_usuario = models.ForeignKey(
        Group,
        verbose_name='Tipo de Usuário',
        default=1)

    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

    def __str__(self):
        return self.login


class PlacaCarro(models.Model):
    numero = models.CharField(max_length=8, verbose_name='Ńúmero da Placa')
    usuario = models.ForeignKey(Usuario)

    class Meta:
        verbose_name = 'Placa'
        verbose_name_plural = 'Placas'

    def __str__(self):
        return self.numero
