from django.db import models

EMERGENCIA = [
    (0, 'Não'),
    (1, 'Sim'),
]


class Categoria(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    tipo = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        verbose_name = ('Categoria')
        verbose_name_plural = ('Categorias')
        managed = False
        db_table = 'tb_categoria'

    def __str__(self):
        return ('%(tipo)s') % {
            'tipo': self.tipo}

    def meta(self):
        return self._meta


class Ocorrencia(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    data = models.DateField()
    hora = models.TimeField()
    descricao = models.TextField(blank=True, null=True)
    foto = models.CharField(max_length=45, blank=True, null=True)
    validade = models.CharField(max_length=1)
    atendida = models.IntegerField()
    emergencia = models.IntegerField()
    vitimado = models.IntegerField()
    resposta = models.CharField(max_length=45, blank=True, null=True)
    usuario_ID = models.IntegerField(db_column='usuario_ID')
    vigilante_ID = models.IntegerField(db_column='vigilante_ID')
    tb_categoria_ID = models.ForeignKey(Categoria, db_column='tb_categoria_ID')
    longitude = models.FloatField()
    latitude = models.FloatField()

    class Meta:
        verbose_name = ('Ocorrência')
        verbose_name_plural = ('Ocorrências')
        unique_together = (("data", "id"),)
        managed = False
        db_table = 'tb_ocorrencia'

    def __str__(self):
        return ('%(data)s - %(id)s') % {
            'data': self.data, 'id': self.id}

    def meta(self):
        return self._meta

