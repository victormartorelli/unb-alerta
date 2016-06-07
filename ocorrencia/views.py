from django.views.generic import FormView, ListView, UpdateView
from django.contrib import messages
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        PermissionRequiredMixin)
from django.core.urlresolvers import reverse, reverse_lazy
from django.shortcuts import redirect

from unb_alerta.utils import make_pagination

from usuario.models import Usuario

from .models import Ocorrencia

from .forms import OcorrenciaForm, ValidarOcorrenciaEditForm


class ListaOcorrenciasView(LoginRequiredMixin, ListView):
    template_name = "ocorrencias/ver_ocorrencia.html"
    model = Ocorrencia
    queryset = Ocorrencia.objects.filter(validade=True)
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(ListaOcorrenciasView, self).get_context_data(**kwargs)
        # import ipdb; ipdb.set_trace()

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context


class ListaValidacaoView(LoginRequiredMixin, ListView):
    template_name = "ocorrencias/validacao_list.html"
    model = Ocorrencia
    queryset = Ocorrencia.objects.filter(validade=False)
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(ListaValidacaoView, self).get_context_data(**kwargs)
        # import ipdb; ipdb.set_trace()

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context


class CriarOcorrenciaView(LoginRequiredMixin, FormView):
    template_name = "ocorrencias/nova_ocorrencia.html"
    form_class = OcorrenciaForm

    def get_context_data(self, **kwargs):

        context = super(CriarOcorrenciaView, self).get_context_data(
            **kwargs)
        return context

    def form_valid(self, form):
        form.save()
        return redirect(reverse('lista_ocorrencias'))

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
                    'usuario_ID': self.request.user.id,
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
            mensagem = "Formulário Inválido"
            messages.add_message(request, messages.ERROR, mensagem)
            return self.render_to_response(
                {'form': form})


class ValidarOcorrenciaEditView(UpdateView):
    template_name = "ocorrencias/validacao_ocorrencia.html"
    form_class = ValidarOcorrenciaEditForm
    model = Ocorrencia
    success_url = reverse_lazy('lista_ocorrencias')

    def get_context_data(self, **kwargs):

        context = super(ValidarOcorrenciaEditView, self).get_context_data(
            **kwargs)
        return context

    def get_initial(self):
        if self.request.user.is_superuser is False:
            usuario = Usuario.objects.get(user_id=self.request.user.id)
            return {'vigilante_ID': usuario.id}
        else:
            return {'vigilante_ID': 1}

    def form_valid(self, form):
        ocorrencia = form.instance
        ocorrencia.save()

        if form.data.get('repetida') is True:
            Ocorrencia.objects.get(id=ocorrencia.id).delete()

        return redirect(reverse('lista_ocorrencias'))

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        # import ipdb; ipdb.set_trace()
        if form.is_valid():
            return self.form_valid(form)
        else:
            mensagem = "Formulário Inválido"
            messages.add_message(request, messages.ERROR, mensagem)
            return self.render_to_response(
                {'form': form})
