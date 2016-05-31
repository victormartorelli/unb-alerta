from django.views.generic import FormView, ListView
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
                'usuario_ID': 1,
                'repetida': False}

    def post(self, request, *args, **kwargs):
        # import ipdb; ipdb.set_trace()
        form_class = self.get_form_class()
        form = self.get_form(form_class)

        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
