from django.db import models


class Categoria(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    tipo = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tb_categoria'

    def __str__(self):
        return ('%(tipo)s') % {
            'tipo': self.tipo}


class Ocorrencia(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    data = models.DateField()
    hora = models.TimeField()
    descricao = models.TextField(blank=True, null=True)
    foto = models.ImageField(
        max_length=45,
        blank=True,
        null=True,
        upload_to='ocorrencia/%Y/%m/%d')
    validade = models.BooleanField()
    atendida = models.BooleanField()
    emergencia = models.BooleanField()
    vitimado = models.BooleanField()
    repetida = models.BooleanField()
    resposta = models.TextField(max_length=45, blank=True, null=True)
    usuario_ID = models.IntegerField(db_column='usuario_ID')
    vigilante_ID = models.IntegerField(db_column='vigilante_ID')
    tb_categoria_ID = models.ForeignKey(
        Categoria,
        verbose_name='Categoria',
        db_column='tb_categoria_ID')
    longitude = models.FloatField()
    latitude = models.FloatField()

    class Meta:
        verbose_name = ('Ocorrência')
        verbose_name_plural = ('Ocorrências')
        unique_together = (("id", "tb_categoria_ID", "data"),)
        managed = False
        db_table = 'tb_ocorrencia'

    def __str__(self):
        return ('%(id)s - %(tipo)s - %(data)s') % {
            'data': self.data,
            'tipo': self.tb_categoria_ID.tipo,
            'id': self.id}
