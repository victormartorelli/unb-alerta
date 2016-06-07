# import string
# import smtplib
from django.core.mail import send_mail
from django.views.generic import FormView
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.shortcuts import redirect
# from unb_alerta.settings import EMAIL_HOST, EMAIL_PORT, EMAIL_HOST_USER, EMAIL_HOST_PASSWORD

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
            # body = string.join((
            #     "From: %s" % EMAIL_HOST_USER,
            #     "To: %s" % [form.data.email],
            #     "Subject: Confirmacao email",
            #     "",
            #     "Obrigado por se cadastrar no UnBAlerta."
            # ), "\r\n")
            # server = smtplib.SMTP(EMAIL_HOST + ':' + EMAIL_PORT)
            # server.ehlo()
            # server.starttls()
            # server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            # server.send(EMAIL_HOST, [form.data.email], body)
            send_mail(
                'Confirmacao email',
                'Obrigado por se cadastrar no UnBAlerta.',
                'unbalerta@gmail.com',
                [form.data.email],
                fail_silently=False,
            )
            return self.form_valid(form)
        else:
            mensagem = "Formulário Inválido"
            messages.add_message(request, messages.ERROR, mensagem)
            return self.render_to_response(
                {'form': form})
