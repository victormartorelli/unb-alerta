from django.views.generic import FormView
from django.core.urlresolvers import reverse
from django.shortcuts import redirect

from .forms import UsuarioForm


class CriarUsuarioView(FormView):
    template_name = "usuario/cadastro_usuario.html"
    form_class = UsuarioForm

    def get_context_data(self, **kwargs):
        context = super(CriarUsuarioView, self).get_context_data(
            **kwargs)
        return context

    def form_valid(self, form):
        form.save()
        return redirect(reverse('inicio'))

    def get_initial(self):
        return {'status': 1,
                'grupo_usuario': 1}

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
