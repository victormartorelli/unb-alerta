# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-06 17:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import unb_alerta.utils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('tipo', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'verbose_name': 'Categoria',
                'verbose_name_plural': 'Categorias',
            },
        ),
        migrations.CreateModel(
            name='Local',
            fields=[
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('nome_cod', models.CharField(max_length=40, verbose_name='Código')),
                ('descricao', models.CharField(max_length=150, verbose_name='Local')),
                ('pai', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Local',
                'verbose_name_plural': 'Locais',
            },
        ),
        migrations.CreateModel(
            name='Ocorrencia',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('data', models.DateField(verbose_name='Data da Ocorrência')),
                ('hora', models.TimeField()),
                ('descricao', models.TextField(blank=True, null=True, verbose_name='Descrição')),
                ('foto', models.ImageField(blank=True, max_length=45, null=True, upload_to='ocorrencia/%Y/%m/%d', validators=[unb_alerta.utils.restringe_tipos_de_arquivo_img])),
                ('validade', models.BooleanField()),
                ('atendida', models.BooleanField()),
                ('emergencia', models.BooleanField(verbose_name='Emergência')),
                ('vitimado', models.BooleanField()),
                ('repetida', models.BooleanField()),
                ('resposta', models.CharField(blank=True, max_length=500, null=True)),
                ('usuario_ID', models.IntegerField()),
                ('vigilante_ID', models.IntegerField()),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('localidade', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ocorrencia.Local', verbose_name='Local')),
                ('tb_categoria_ID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ocorrencia.Categoria', verbose_name='Categoria')),
            ],
            options={
                'verbose_name': 'Ocorrência',
                'verbose_name_plural': 'Ocorrências',
            },
        ),
    ]
