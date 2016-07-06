# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

SEXO_CHOICES = (

	('m', 'masculino'),
	('f', 'feminino'),

	)

YESORNO_CHOICES = (

	(0, 'nao'),
	(1, 'sim'),

	)

class TbTipousuario(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    tipo = models.CharField(max_length=45)

    class Meta:
        db_table = 'tb_tipoUsuario'

    def __str__(self):
        return self.tipo


class Usuario(models.Model):
    '''
        Usuario cadastrado via app

    '''
    id = models.AutoField(
        db_column='ID', 
        primary_key = True) 
    cpf = models.CharField(
        max_length=45, 
        db_column='CPF',
        unique = True)  
    nome = models.CharField(max_length=45)
    rg = models.BigIntegerField(
        db_column='RG', 
        blank = True, 
        null=True, 
        unique = True)  
    matricula = models.BigIntegerField(
        blank=True, 
        null = True, 
        unique = True)
    sexo = models.CharField(
        max_length=1, 
        blank=True, 
        null = True, 
        choices = SEXO_CHOICES)
    email = models.EmailField(
        max_length=45, 
        unique=True)
    login = models.CharField(
        max_length=45, 
        unique=True)
    senha = models.CharField(max_length=45)
    status = models.IntegerField(null=True)
    data_nasc = models.DateField(
        blank=True, 
        null=True, 
        verbose_name='Data de nascimento')
    tb_tipousuario = models.ForeignKey(
         TbTipousuario,
         models.DO_NOTHING, 
         db_column='tb_tipoUsuario_ID', 
         verbose_name='Tipo de usuario')  

    class Meta:
        db_table = 'tb_usuario'

    def __str__(self):
        return self.nome


class Categoria(models.Model):
    id = models.AutoField(
        db_column='ID', 
        primary_key = True) 
    tipo = models.CharField(
        max_length=45,
        unique = True)

    class Meta:
        db_table = 'tb_categoria'

    def __str__(self):
        return self.tipo


class Ocorrencia(models.Model):
    '''
        Ocorrencia feita pelo app

    '''
    id = models.AutoField(
        db_column='ID', 
        primary_key=True)  
    data = models.DateField(
        blank=True, 
        null=True)
    hora = models.TimeField(
        blank=True, 
        null=True)
    descricao = models.TextField(
        blank=True, 
        null=True)
    foto = models.CharField(
        max_length=45, 
        blank=True, 
        null=True)
    validade = models.IntegerField(
        blank=False,
        default=0,
        choices=YESORNO_CHOICES)
    atendida = models.IntegerField(
        blank=False,
        default=0,
        choices=YESORNO_CHOICES)
    emergencia = models.IntegerField(
        blank=False,
        default=0,
        choices=YESORNO_CHOICES)
    vitimado = models.IntegerField(
        blank=False,
        default=0,
        choices=YESORNO_CHOICES)
    repetida = models.IntegerField(
        blank=False,
        default=0,
        choices=YESORNO_CHOICES)
    resposta = models.CharField(
        max_length=45, 
        blank=True, 
        null=True)
    
    longitude = models.FloatField(
        blank=True, 
        null=True)
    latitude = models.FloatField(
        blank=True, 
        null=True)
    
    usuario_id = models.ForeignKey(
		Usuario, 
		models.DO_NOTHING, 
		db_column='usuario_ID',
		related_name='usuario_solicitante',
		limit_choices_to={'tb_tipousuario':1},
		verbose_name='usuario')

    vigilante_id = models.ForeignKey(
		Usuario, 
		models.DO_NOTHING, 
		db_column='vigilante_ID',
		related_name='vigilante_atendente',
		limit_choices_to={'tb_tipousuario':2},
		blank=True, 
		null=True,
		verbose_name='vigilante',)  

    tb_categoria_id = models.ForeignKey(
        Categoria, 
        models.DO_NOTHING, 
        db_column='tb_categoria_ID',
        verbose_name='Categoria')  # Field name made lowercase.
    


    def save(self, *args, **kwargs):
        """
        Use the `pygments` library to create a highlighted HTML
        representation of the code snippet.
        """
        lexer = get_lexer_by_name(self.language)
        linenos = self.linenos and 'table' or False
        options = self.title and {'title': self.title} or {}
        formatter = HtmlFormatter(style=self.style, linenos=linenos,
                                  full=True, **options)
        self.highlighted = highlight(self.code, lexer, formatter)
        super(Ocorrencia, self).save(*args, **kwargs)

    class Meta:
        db_table = 'tb_ocorrencia'

    def __str__(self):
        return str(self.hora)
