# -*- coding: utf-8 -*-
import weasyprint

from django.views.generic import (FormView, ListView, DetailView,
                                  DeleteView, UpdateView)
from django.contrib import messages
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        PermissionRequiredMixin)
from django.core.urlresolvers import reverse, reverse_lazy
from django.db.models import Count
from django_filters.views import FilterView
from django.template import RequestContext
from django.template.loader import get_template
from django.shortcuts import redirect

from reportlab.pdfgen import canvas
from django.http import HttpResponse

from unb_alerta.utils import make_pagination

from usuario.models import Usuario

from .models import Ocorrencia, Local, Categoria

from .forms import (OcorrenciaForm, ValidarOcorrenciaEditForm,
                    OcorrenciaFiltro, OcorrenciaFiltroMapa, RelatorioFiltro)


class ListaOcorrenciasView(LoginRequiredMixin, FilterView):
    model = Ocorrencia
    filterset_class = OcorrenciaFiltro
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(ListaOcorrenciasView,
                        self).get_context_data(**kwargs)

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)

        return context

    def get(self, request, *args, **kwargs):
        super(ListaOcorrenciasView, self).get(request)

        # Se a pesquisa estiver quebrando com a paginação
        # Olhe esta função abaixo
        # Provavelmente você criou um novo campo no Form/FilterSet
        # Então a ordem da URL está diferente
        data = self.filterset.data
        if (data and data.get('tb_categoria_ID') is not None):
            url = "&" + str(self.request.environ['QUERY_STRING'])
            if url.startswith("&page"):
                ponto_comeco = url.find('tb_categoria_ID=') - 1
                url = url[ponto_comeco:]
        else:
            url = ''

        self.filterset.form.fields['o'].label = 'Ordenação'

        queryset = self.object_list.filter(
            atendida=True,
            validade=True).distinct()

        context = self.get_context_data(filter=self.filterset,
                                        object_list=queryset,
                                        filter_url=url,
                                        numero_res=len(queryset)
                                        )

        return self.render_to_response(context)


class CriarOcorrenciaView(LoginRequiredMixin, FormView):
    template_name = "ocorrencia/nova_ocorrencia.html"
    form_class = OcorrenciaForm

    def get_context_data(self, **kwargs):

        context = super(CriarOcorrenciaView, self).get_context_data(
            **kwargs)
        return context

    def form_valid(self, form):
        form.save()
        return redirect(reverse('minhas_ocorrencias'))

    def get_initial(self):
        if self.request.user.is_superuser is False:
            usuario = Usuario.objects.get(user_id=self.request.user.id)
            return {'validade': False,
                    'atendida': False,
                    'vigilante_ID': 1,
                    'usuario_ID': usuario.id,
                    'repetida': False}
        else:
            return {'validade': False,
                    'atendida': False,
                    'vigilante_ID': 1,
                    'usuario_ID': 1,
                    'repetida': False}

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)

        if form.is_valid():
            ocorrencia = form.save(commit=False)
            if 'foto' in request.FILES:
                ocorrencia.foto = request.FILES['foto']
            ocorrencia.save()
            return self.form_valid(form)
        else:
            erros = form.non_field_errors().as_text()
            erros = ''.join(c for c in erros if c not in '*')
            mensagem = 'Formulário Inválido.' + erros
            messages.add_message(request, messages.ERROR, mensagem)
            return self.render_to_response(
                {'form': form})


class ListaValidacaoView(PermissionRequiredMixin, ListView):
    template_name = "ocorrencia/validacao_list.html"
    model = Ocorrencia
    queryset = Ocorrencia.objects.filter(
        atendida=False,
        validade=False).order_by('-id')
    paginate_by = 10
    permission_required = {'ocorrencia.change_ocorrencia'}

    def get_context_data(self, **kwargs):
        context = super(ListaValidacaoView, self).get_context_data(**kwargs)

        if not context.get('object_list'):
            context['vazio'] = True

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context


class ValidarOcorrenciaEditView(PermissionRequiredMixin, UpdateView):
    template_name = "ocorrencia/validacao_ocorrencia.html"
    form_class = ValidarOcorrenciaEditForm
    model = Ocorrencia
    success_url = reverse_lazy('lista_validacao')
    permission_required = {'ocorrencia.change_ocorrencia'}

    def get_initial(self):
        o = Ocorrencia.objects.get(id=self.kwargs['pk'])
        if self.request.user.is_superuser is False:
            usuario = Usuario.objects.get(user_id=self.request.user.id)
            return {'vigilante_ID': usuario.id,
                    'foto': o.foto,
                    'descricao': o.descricao,
                    'localidade': o.localidade,
                    'informacoes_segurancas': o.informacoes_segurancas}
        else:
            return {'vigilante_ID': 1,
                    'foto': o.foto,
                    'descricao': o.descricao,
                    'localidade': o.localidade,
                    'informacoes_segurancas': o.informacoes_segurancas}

    def form_valid(self, form):
        ocorrencia = form.instance
        ocorrencia.id = self.kwargs['pk']
        ocorrencia.save()
        if form.data.get('repetida') == '1':
            Ocorrencia.objects.get(id=ocorrencia.id).delete()

        return redirect(reverse('lista_validacao'))

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)

        if form.is_valid():
            return self.form_valid(form)
        else:
            erros = form.non_field_errors().as_text()
            erros = ''.join(c for c in erros if c not in '*')
            mensagem = 'Formulário Inválido.' + erros
            messages.add_message(request, messages.ERROR, mensagem)
            return self.render_to_response(
                {'form': form})


class DescricaoOcorrenciaView(PermissionRequiredMixin,
                              LoginRequiredMixin,
                              DetailView):
    template_name = "ocorrencia/descricao_ocorrencia.html"

    def has_permission(self):
        user = self.request.user

        if (user.is_superuser or
           Usuario.objects.filter(user_id=user.id,
                                  grupo_usuario__name="Vigilante")):
            return True
        else:
            pk = self.kwargs['pk']
            usuario = Usuario.objects.get(user_id=user.id)
            visivel = Ocorrencia.objects.filter(
                id=pk,
                atendida=True,
                validade=True)
            pertence = Ocorrencia.objects.filter(id=pk, usuario_ID=usuario.id)
            if visivel or pertence:
                return True
            else:
                return False

    def get_queryset(self):
        pk = self.kwargs['pk']
        ocorrencia = Ocorrencia.objects.filter(id=pk)

        return ocorrencia


class MinhasOcorrenciasView(LoginRequiredMixin, ListView):
    template_name = "ocorrencia/minhas_ocorrencias.html"
    model = Ocorrencia
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(MinhasOcorrenciasView, self).get_context_data(**kwargs)

        if not context.get('object_list'):
            context['vazio'] = True

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context

    def get_queryset(self):
        if not self.request.user.is_superuser:
            id_usuario = Usuario.objects.get(
                user__id=self.request.user.id).id
            ocorrencia = Ocorrencia.objects.filter(
                usuario_ID=id_usuario).order_by('-id')
        else:
            ocorrencia = Ocorrencia.objects.filter(usuario_ID=1)

        return ocorrencia


class OcorrenciaDeleteView(PermissionRequiredMixin, DeleteView):
    success_url = 'minhas_ocorrencias'
    template_name = 'ocorrencia/deletar.html'
    model = Ocorrencia

    def has_permission(self):
        user = self.request.user

        if (user.is_superuser or
           Usuario.objects.filter(user_id=user.id,
                                  grupo_usuario__name="Vigilante")):
            return True
        else:
            pk = self.kwargs['pk']
            usuario = Usuario.objects.get(user_id=user.id)
            visivel = Ocorrencia.objects.filter(
                id=pk,
                atendida=True,
                validade=True)
            pertence = Ocorrencia.objects.filter(id=pk, usuario_ID=usuario.id)
            if visivel or pertence:
                return True
            else:
                return False

    def post(self, *args, **kwargs):
        return self.delete(*args, **kwargs)

    def delete(self, form, *args, **kwargs):
        self.object = self.get_object()

        if self.object.atendida is False:
            self.object.delete()
        else:
            mensagem = 'Você não pode apagar uma ocorrência que já foi atendida.'
            messages.add_message(self.request, messages.ERROR, mensagem)
        return redirect(reverse(self.get_success_url()))


# def pdf_view(self, form):
#     locais_list = Local.objects.values('descricao').annotate(
#         numero=Count('ocorrencia')).order_by(
#         '-numero')[:5]

#     categorias_list = Categoria.objects.values('tipo').annotate(
#         numero=Count('ocorrencia')).order_by(
#         '-numero')[:5]

#     kwargs = {}

#     kwargs['data__gte'] = form.cleaned_data['data']
#     kwargs['data__lte'] = form.cleaned_data['data_1']
#     kwargs['hora__gte'] = form.cleaned_data['hora']
#     kwargs['hora__lte'] = form.cleaned_data['hora_1']

#     if form.data.get('tipo'):
#         kwargs['tb_categoria_ID'] = form.cleaned_data['tipo']

#     if form.data.get('localidade'):
#         kwargs['localidade'] = form.cleaned_data['localidade']

#     ocorrencia = Ocorrencia.objects.filter(**kwargs)

#     vitima = ocorrencia.filter(vitimado=True).count()
#     emergencia = ocorrencia.filter(emergencia=True).count()
#     validadas = ocorrencia.filter(validade=True).count()
#     atendidas = ocorrencia.filter(atendida=True).count()

#     if form.data.get('localidade'):
#         localidade = Local.objects.filter(
#             id=form.data.get('localidade'))[0].descricao
#     else:
#         localidade = None
#         for i in range(5):
#             array_locais_nome = locais_list[i].get('descricao')
#             array_locais_numero = locais_list[i].get('numero')

#     if form.data.get('tipo'):
#         categoria = Categoria.objects.filter(
#             id=form.data.get('tipo'))[0].tipo

#     else:
#         categoria = None
#         for i in range(5):
#             array_categorias_nome = categorias_list[i].get('tipo')
#             array_categorias_numero = categorias_list[i].get('numero')

#     context = {
#         'vitima': vitima,
#         'emergencia': emergencia,
#         'validadas': validadas,
#         'atendidas': atendidas,
#         'localidade': localidade,
#         'categoria': categoria,
#         'array_locais_nome': array_locais_nome,
#         'array_locais_numero': array_locais_numero,
#         'array_categorias_nome': array_categorias_nome,
#         'array_categorias_numero': array_categorias_numero,
#     }
#     html_template = get_template('relatorio.html')
#     rendered_html = html_template.render(RequestContext(context))
#     pdf_file = weasyprint.HTML(
#         string=rendered_html).write_pdf()
#     http_response = HttpResponse(pdf_file,
#                                  content_type='application/pdf')
#     http_response['Content-Disposition'] = 'filename="report.pdf"'

#     c = canvas.Canvas(http_response)

#     c.showPage()
#     c.save()

#     return http_response


class GerarRelatorioView(PermissionRequiredMixin, FormView):
    form_class = RelatorioFiltro
    permission_required = {'ocorrencia.change_ocorrencia'}
    template_name = "ocorrencia/gerar_relatorio.html"

    def form_valid(self, form):
        locais_list = Local.objects.values('descricao').annotate(
            numero=Count('ocorrencia')).order_by(
            '-numero')[:5]

        categorias_list = Categoria.objects.values('tipo').annotate(
            numero=Count('ocorrencia')).order_by(
            '-numero')[:5]

        kwargs = {}

        kwargs['data__gte'] = form.cleaned_data['data']
        kwargs['data__lte'] = form.cleaned_data['data_1']
        kwargs['hora__gte'] = form.cleaned_data['hora']
        kwargs['hora__lte'] = form.cleaned_data['hora_1']

        if form.data.get('tipo'):
            kwargs['tb_categoria_ID'] = form.cleaned_data['tipo']

        if form.data.get('localidade'):
            kwargs['localidade'] = form.cleaned_data['localidade']

        ocorrencia = Ocorrencia.objects.filter(**kwargs)

        vitima = ocorrencia.filter(vitimado=True).count()
        emergencia = ocorrencia.filter(emergencia=True).count()
        validadas = ocorrencia.filter(validade=True).count()
        atendidas = ocorrencia.filter(atendida=True).count()

        if form.data.get('localidade'):
            localidade = Local.objects.filter(
                id=form.data.get('localidade'))[0].descricao
        else:
            localidade = None

        if form.data.get('tipo'):
            categoria = Categoria.objects.filter(
                id=form.data.get('tipo'))[0].tipo

        else:
            categoria = None

        context = {
            'data__gte': form.cleaned_data['data'],
            'data__lte': form.cleaned_data['data_1'],
            'hora__gte': form.cleaned_data['hora'],
            'hora__lte': form.cleaned_data['hora_1'],
            'vitima': vitima,
            'emergencia': emergencia,
            'validadas': validadas,
            'atendidas': atendidas,
            'localidade': localidade,
            'categoria': categoria,
            'array_locais': locais_list,
            'array_categorias': categorias_list,
        }

        template = get_template("relatorio.html")
        html = template.render(RequestContext(self.request, context))
        response = HttpResponse(content_type="application/pdf")
        weasyprint.HTML(string=html,
                        url_fetcher=self.request).write_pdf(response)

        return response


class FiltroMapa(LoginRequiredMixin, FilterView):
    model = Ocorrencia
    filterset_class = OcorrenciaFiltroMapa
    paginate_by = 10
    template_name = "mapa.html"

    def get_context_data(self, **kwargs):
        context = super(FiltroMapa,
                        self).get_context_data(**kwargs)

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)

        return context

    def get(self, request, *args, **kwargs):
        super(FiltroMapa, self).get(request)

        # Se a pesquisa estiver quebrando com a paginação
        # Olhe esta função abaixo
        # Provavelmente você criou um novo campo no Form/FilterSet
        # Então a ordem da URL está diferente
        data = self.filterset.data
        if (data and data.get('tb_categoria_ID') is not None):
            url = "&" + str(self.request.environ['QUERY_STRING'])
            if url.startswith("&page"):
                ponto_comeco = url.find('tb_categoria_ID=') - 1
                url = url[ponto_comeco:]
        else:
            url = ''

        self.filterset.form.fields['o'].label = 'Ordenação'

        queryset = self.object_list.filter(
            atendida=True,
            validade=True).distinct()

        array_lat = []
        array_long = []

        for o in queryset:
            array_lat.append(o.latitude)
            array_long.append(o.longitude)

        context = self.get_context_data(filter=self.filterset,
                                        object_list=queryset,
                                        filter_url=url,
                                        numero_res=len(queryset),
                                        array_lat=array_lat,
                                        array_long=array_long
                                        )

        return self.render_to_response(context)
