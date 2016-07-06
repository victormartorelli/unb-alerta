# -*- coding: utf-8 -*-
from django.db import models
from unb_alerta.utils import restringe_tipos_de_arquivo_img


class Categoria(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    tipo = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return ('%(tipo)s') % {
            'tipo': self.tipo}


class Local(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
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
    hora = models.TimeField()
    descricao = models.TextField(
        blank=True,
        null=True,
        verbose_name='Descrição')
    foto = models.ImageField(
        max_length=45,
        validators=[restringe_tipos_de_arquivo_img],
        blank=True,
        null=True,
        upload_to='ocorrencia/%Y/%m/%d')
    validade = models.BooleanField()
    atendida = models.BooleanField()
    emergencia = models.BooleanField(verbose_name='Emergência')
    vitimado = models.BooleanField()
    repetida = models.BooleanField()
    resposta = models.CharField(max_length=500, blank=True, null=True)
    usuario_ID = models.IntegerField()
    vigilante_ID = models.IntegerField()
    tb_categoria_ID = models.ForeignKey(
        Categoria,
        verbose_name='Categoria')
    longitude = models.FloatField()
    latitude = models.FloatField()
    localidade = models.ForeignKey(
        Local,
        verbose_name='Local')

    class Meta:
        verbose_name = ('Ocorrência')
        verbose_name_plural = ('Ocorrências')

    def __str__(self):
        return ('%(data)s - %(id)s') % {
            'data': self.data, 'id': self.id}
