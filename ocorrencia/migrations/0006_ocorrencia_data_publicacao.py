# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-27 22:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ocorrencia', '0005_auto_20160723_1948'),
    ]

    operations = [
        migrations.AddField(
            model_name='ocorrencia',
            name='data_publicacao',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Data de Criação da Ocorrência'),
        ),
    ]