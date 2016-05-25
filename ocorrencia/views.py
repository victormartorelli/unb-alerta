from django.views.generic import CreateView
from django.core.urlresolvers import reverse
from django.shortcuts import redirect

from .models import Ocorrencia

from .forms import OcorrenciaForm


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
