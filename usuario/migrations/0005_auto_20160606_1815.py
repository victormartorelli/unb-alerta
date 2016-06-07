# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-06-06 21:15
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0004_auto_20160603_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='cpf',
            field=models.CharField(blank=True, db_column='CPF', max_length=15, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='email',
            field=models.EmailField(max_length=45, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
