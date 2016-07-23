# -*- coding: utf-8 -*-
from django.views.generic import (FormView, ListView, DetailView,
                                  DeleteView, UpdateView)
from django.contrib import messages
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        PermissionRequiredMixin)
from django.core.urlresolvers import reverse, reverse_lazy
from django.db.models import Count
from django_filters.views import FilterView
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


class GerarRelatorioView(PermissionRequiredMixin, FormView):
    form_class = RelatorioFiltro
    permission_required = {'ocorrencia.change_ocorrencia'}
    template_name = "ocorrencia/gerar_relatorio.html"

    def form_valid(self, form):
        eixo_x = 30
        eixo_y = 780

        locais = Local.objects.values('descricao').annotate(
            numero=Count('ocorrencia')).order_by(
            '-numero')[:5]

        categorias = Categoria.objects.values('tipo').annotate(
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

        # top_locais = lista.values('id').annotate(
        #     jobtitle_count=Count('jobtitle')).order_by('-jobtitle_count')[:5]

        # if lista_parametros['local']:
        #     local = True

        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response[
            'Content-Disposition'] = 'attachment; filename="relatorio.pdf"'

        # Create the PDF object, using the response object as its "file."
        c = canvas.Canvas(response)

        # Draw things on the PDF. Here's where the PDF generation happens.
        # See the ReportLab documentation for the full list of functionality.
        c.drawString(200, eixo_y, "Relatório Unb-Alerta")
        c.drawString(eixo_x, 730, "Intervalo de Datas: " +
                                  form.data.get('data') + " - " +
                                  form.data.get('data_1'))
        c.drawString(eixo_x, 710, "Intervalo de Horarios: " +
                                  form.data.get('hora') + " - " +
                                  form.data.get('hora_1'))
        if form.data.get('localidade'):
            c.drawString(eixo_x, 690, "Local: " + Local.objects.filter(
                id=form.data.get('localidade'))[0].descricao)

        if form.data.get('tipo'):
            c.drawString(eixo_x, 670, "Categoria: " + Categoria.objects.filter(
                id=form.data.get('tipo'))[0].tipo)

        c.drawString(eixo_x + 40, 640, "Com vítima:  " + str(vitima))
        c.drawString(eixo_x + 40, 620, "Emergência:  " + str(emergencia))
        c.drawString(eixo_x + 40, 600, "Validadas:   " + str(validadas))
        c.drawString(eixo_x + 40, 580, "Atendidas:   " + str(atendidas))

        aux = 540

        if not form.data.get('localidade'):
            c.drawString(
                eixo_x + 40, aux, "Top 5 Locais com mais ocorrências: ")
            aux = aux - 30
            for i in range(5):
                c.drawString(eixo_x + 90, aux, str(
                    locais[i].get(
                        'descricao')) + ":  " + str(locais[i].get('numero')))
                aux = aux - 20

        else:
            aux = 540

        if not form.data.get('tipo'):
            aux = aux - 30
            c.drawString(
                eixo_x + 40, aux,
                "Top 5 Categorias com mais ocorrências: ")
            aux = aux - 30
            for i in range(5):
                c.drawString(eixo_x + 90, aux, str(
                    categorias[i].get(
                        'tipo')) + ":  " + str(categorias[i].get('numero')))
                aux = aux - 20

        # for i in range(5):
        #     aux = aux - 20
        #     c.drawString(eixo_x + 90, aux, l[i].get('tipo') + ":" + l[i].get('numero'))


        # Close the PDF object cleanly, and we're done.
        c.showPage()
        c.save()
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
