# -*- coding: utf-8 -*-
from django.db import models
from unb_alerta.utils import restringe_tipos_de_arquivo_img
from usuario.models import Usuario


class Categoria(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    tipo = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return ('%(tipo)s') % {
            'tipo': self.tipo}


class StatusOcorrencia(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    status = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        verbose_name = 'Status'
        verbose_name_plural = 'Status'

    def __str__(self):
        return ('%(status)s') % {
            'status': self.status}


class Local(models.Model):
    id = models.AutoField(db_column='id', primary_key=True)
    nome_cod = models.CharField(
        max_length=40,
        verbose_name='Código')
    descricao = models.CharField(
        max_length=150,
        verbose_name='Local')
    pai = models.IntegerField(
        blank=True,
        null=True)

    class Meta:
        verbose_name = ('Local')
        verbose_name_plural = ('Locais')

    def __str__(self):
        return ('%(descricao)s') % {
            'descricao': self.descricao}


class Ocorrencia(models.Model):
    id = models.AutoField(primary_key=True)
    data = models.DateField(verbose_name='Data da Ocorrência')
    hora = models.TimeField(verbose_name='Hora da Ocorrência')
    descricao = models.TextField(
        blank=True,
        null=True,
        verbose_name='Descrição')
    descricao = models.TextField(
        blank=True,
        null=True,
        verbose_name='Descrição')
    informacoes_segurancas = models.TextField(
        blank=True,
        null=True,
        max_length=1000,
        verbose_name='Informações dos Seguranças')
    foto = models.ImageField(
        max_length=45,
        validators=[restringe_tipos_de_arquivo_img],
        blank=True,
        null=True,
        upload_to='ocorrencia/%Y/%m/%d')
    validade = models.BooleanField(verbose_name='É válida?')
    atendida = models.BooleanField(verbose_name='Foi atendida?')
    emergencia = models.BooleanField(verbose_name='Emergência?')
    vitimado = models.BooleanField(verbose_name='Possui vítimas?')
    repetida = models.BooleanField(verbose_name='É repetida?')
    resposta = models.TextField(max_length=1000, blank=True, null=True)
    usuario_ID = models.ForeignKey(Usuario,
                                   related_name='usuario_usuario',
                                   verbose_name='Usuário')
    vigilante_ID = models.ForeignKey(Usuario,
                                     related_name='usuario_vigilante',
                                     verbose_name='Vigilante')
    tb_categoria_ID = models.ForeignKey(
        Categoria,
        verbose_name='Categoria')
    longitude = models.FloatField()
    latitude = models.FloatField()
    localidade = models.ForeignKey(
        Local,
        verbose_name='Local')
    status = models.ForeignKey(
        StatusOcorrencia,
        verbose_name='Status da Ocorrência',
        blank=True,
        null=True)

    class Meta:
        verbose_name = ('Ocorrência')
        verbose_name_plural = ('Ocorrências')

    def __str__(self):
        return ('%(data)s - %(id)s') % {
            'data': self.data, 'id': self.id}
