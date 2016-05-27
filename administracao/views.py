from django.views.generic import ListView
from ocorrencia.models import Ocorrencia

from unb_alerta.utils import make_pagination


class AdminView(ListView):
    template_name = "administracao/index.html"
    model = Ocorrencia
    queryset = Ocorrencia.objects.all()
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(AdminView, self).get_context_data(**kwargs)

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context

