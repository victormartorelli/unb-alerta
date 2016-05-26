from django.db import models

EMERGENCIA = [
    (0, 'Não'),
    (1, 'Sim'),
]


class Categoria(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    tipo = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tb_categoria'

    def __str__(self):
        return ('%(tipo)s') % {
            'tipo': self.tipo}


class Localizacao(models.Model):
    longitude = models.FloatField()
    latitude = models.FloatField()
    id = models.AutoField(db_column='ID', primary_key=True)

    class Meta:
        verbose_name = ('Localização')
        verbose_name_plural = ('Localizações')
        unique_together = (("longitude", "latitude"),)
        managed = False
        db_table = 'tb_localizacao'

    def __str__(self):
        return ('%(longitude)s '' %(latitude)s') % {
            'longitude': self.longitude, 'latitude': self.latitude}


class Ocorrencia(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    data = models.DateField()
    hora = models.DateTimeField()
    descricao = models.TextField(blank=True, null=True)
    foto = models.CharField(max_length=45, blank=True, null=True)
    validade = models.CharField(max_length=1)
    atendida = models.IntegerField()
    emergencia = models.IntegerField(choices=EMERGENCIA)
    vitimado = models.IntegerField()
    resposta = models.CharField(max_length=45, blank=True, null=True)
    usuario_id = models.IntegerField(db_column='usuario_ID')
    vigilante_id = models.IntegerField(db_column='vigilante_ID')
    tb_categoria_id = models.IntegerField(db_column='tb_categoria_ID')
    tb_localizacao_id = models.ForeignKey(Localizacao,
                                          db_column='tb_localizacao_ID')

    class Meta:
        verbose_name = ('Ocorrência')
        verbose_name_plural = ('Ocorrências')
        unique_together = (("data", "id"),)
        managed = False
        db_table = 'tb_ocorrencia'

    def __str__(self):
        return ('%(data)s - %(id)s') % {
            'data': self.data, 'id': self.id}
