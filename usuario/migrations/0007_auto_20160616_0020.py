# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-06-16 03:20
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0006_merge'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='data_nasc',
            field=models.DateField(blank=True, null=True, verbose_name='Data de Nascimento'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='grupo_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.Group', verbose_name='Tipo de Usuário'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='matricula',
            field=models.CharField(blank=True, max_length=10, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='rg',
            field=models.IntegerField(blank=True, db_column='RG', null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='status',
            field=models.BooleanField(default=False, verbose_name='Ativo?'),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Usuário'),
        ),
    ]