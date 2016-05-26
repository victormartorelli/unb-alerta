from django.views.generic import CreateView, ListView
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


class CriarOcorrenciaView(CreateView):
    template_name = "ocorrencias/nova_ocorrencia.html"
    form_class = OcorrenciaForm
    model = Ocorrencia

    def get_success_url(self):
        return reverse('ocorrencia')

    def get_context_data(self, **kwargs):
        context = super(CriarOcorrenciaView, self).get_context_data(
            **kwargs)
        return context

    def form_valid(self, form):
        form.save()
        return redirect(self.get_success_url())
