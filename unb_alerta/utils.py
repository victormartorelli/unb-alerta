# -*- coding: utf-8 -*-
import magic

from django.forms import ValidationError


def from_to(start, end):
    return list(range(start, end + 1))


def make_pagination(index, num_pages):
    '''Make a list of adjacent page ranges interspersed with "None"s
    The list starts with [1, 2] and end with [num_pages-1, num_pages].
    The list includes [index-1, index, index+1]
    "None"s separate those ranges and mean ellipsis (...)
    Example:  [1, 2, None, 10, 11, 12, None, 29, 30]
    '''

    PAGINATION_LENGTH = 10
    if num_pages <= PAGINATION_LENGTH:
        return from_to(1, num_pages)
    else:
        if index - 1 <= 5:
            tail = [num_pages - 1, num_pages]
            head = from_to(1, PAGINATION_LENGTH - 3)
        else:
            if index + 1 >= num_pages - 3:
                tail = from_to(index - 1, num_pages)
            else:
                tail = [index - 1, index, index + 1,
                        None, num_pages - 1, num_pages]
            head = from_to(1, PAGINATION_LENGTH - len(tail) - 1)
        return head + [None] + tail


TIPOS_IMG_PERMITIDOS = (
    'image/jpeg',
    'image/jpg',
    'image/jpe_',
    'image/pjpeg',
    'image/vnd.swiftview-jpeg',
    'application/jpg',
    'application/x-jpg',
    'image/pjpeg',
    'image/pipeg',
    'image/vnd.swiftview-jpeg',
    'image/x-xbitmap',
    'image/bmp',
    'image/x-bmp',
    'image/x-bitmap',
    'image/png',
    'application/png',
    'application/x-png',
)


def fabrica_validador_de_tipos_de_arquivo(lista, nome):

    def restringe_tipos_de_arquivo(value):
        mime = magic.from_buffer(value.read(), mime=True)
        mime = mime.decode()
        if mime not in lista:
            raise ValidationError('Este arquivo não é uma imagem.')
    # o nome é importante para as migrations
    restringe_tipos_de_arquivo.__name__ = nome
    return restringe_tipos_de_arquivo

restringe_tipos_de_arquivo_img = fabrica_validador_de_tipos_de_arquivo(
    TIPOS_IMG_PERMITIDOS, 'restringe_tipos_de_arquivo_img')
