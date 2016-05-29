from django.views.generic import ListView
from unb_alerta.utils import make_pagination
from django.conf import settings
from django.apps import apps


class AdminView(ListView):
    template_name = "administracao/index.html"
    queryset = [apps.get_app_config(appname) for appname in settings.ALERTA_APPS if not appname == "administracao"]
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(AdminView, self).get_context_data(**kwargs)

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)
        return context

