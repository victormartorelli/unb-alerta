from django.views.generic import CreateView
from django.core.urlresolvers import reverse
from django.shortcuts import redirect

from .forms import UsuarioForm


class CriarUsuarioView(CreateView):
    template_name = "usuario/cadastro_usuario.html"
    form_class = UsuarioForm

    def get_context_data(self, **kwargs):
        context = super(CriarUsuarioView, self).get_context_data(
            **kwargs)
        return context

    def form_valid(self, form):
        form.save()
        return redirect('')

    # def get_initial(self):
    #     return {'validade': False,
    #             'atendida': False,
    #             'vigilante_ID': 1,
    #             'usuario_ID': 1,
    #             'repetida': False}

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        import ipdb;ipdb.set_trace()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
