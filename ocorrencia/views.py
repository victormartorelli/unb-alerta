from django.views.generic import FormView, ListView
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.shortcuts import redirect

from unb_alerta.utils import make_pagination

from .models import Ocorrencia

from .forms import OcorrenciaForm


class ListaOcorrenciasView(ListView):
    template_name = "ocorrencias/ver_ocorrencia.html"
    model = Ocorrencia
    queryset = Ocorrencia.objects.all()
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(ListaOcorrenciasView, self).get_context_data(**kwargs)
        # import ipdb; ipdb.set_trace()

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context


class CriarOcorrenciaView(FormView):
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
