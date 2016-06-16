from django.contrib.auth.models import User, Group
from django.db import models


class Usuario(models.Model):
    '''
        Usuário cadastrado via web
    '''
    id = models.AutoField(db_column='ID', primary_key=True)
    user = models.ForeignKey(User, verbose_name='Usuário')
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
        null=True)
    rg = models.IntegerField(
        db_column='RG',
        blank=True,
        null=True,
        unique=True)
    matricula = models.CharField(
        blank=True,
        null=True,
        max_length=10,
        unique=True)

    sexo = models.CharField(
        max_length=1,
        blank=True,
        null=True)
    email = models.EmailField(max_length=45, unique=True)
    senha = models.CharField(max_length=45)
    status = models.BooleanField(default=False, verbose_name='Ativo?')
    data_nasc = models.DateField(
        blank=True,
        null=True,
        verbose_name='Data de Nascimento')
    grupo_usuario = models.ForeignKey(
        Group,
        verbose_name='Tipo de Usuário')

    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

    def __str__(self):
        return self.login
