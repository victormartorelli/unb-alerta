from django.contrib.auth.models import User, Group
from django.db import models


class Usuario(models.Model):
    '''
        Usuário cadastrado via web
    '''
    id = models.AutoField(db_column='ID', primary_key=True)
    user = models.ForeignKey(User)
    nome = models.CharField(max_length=45)
    login = models.CharField(
        verbose_name='Nome de Usuário',
        unique=True,
        max_length=50)
    cpf = models.BigIntegerField(
        db_column='CPF',
        unique=True,
        blank=True,
        null=True)
    rg = models.IntegerField(
        db_column='RG',
        blank=True,
        null=True)
    matricula = models.CharField(
        blank=True,
        null=True,
        max_length=10)

    sexo = models.CharField(
        max_length=1,
        blank=True,
        null=True)
    email = models.EmailField(max_length=45)
    senha = models.CharField(max_length=45)
    status = models.IntegerField()
    data_nasc = models.DateField(blank=True, null=True)
    grupo_usuario = models.ForeignKey(Group)

    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

    def __str__(self):
        return self.login
