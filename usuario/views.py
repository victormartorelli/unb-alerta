from django.views.generic import FormView, DetailView, TemplateView
from django.contrib import messages
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.mixins import (LoginRequiredMixin,
                                        PermissionRequiredMixin)
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.core.urlresolvers import reverse
from django_filters.views import FilterView
from django.shortcuts import redirect
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes

from usuario.models import Usuario, PlacaCarro

from unb_alerta.utils import make_pagination

from .forms import UsuarioForm, PlacaFiltro


class CriarUsuarioView(FormView):
    template_name = "usuario/cadastro_usuario.html"
    form_class = UsuarioForm

    def get_context_data(self, **kwargs):
        context = super(CriarUsuarioView, self).get_context_data(
            **kwargs)
        return context

    def form_valid(self, form):
        kwargs = {}
        form.save()
        user = User.objects.get(email=self.request.POST.get('email'))

        kwargs['token'] = default_token_generator.make_token(user)
        kwargs['uidb64'] = urlsafe_base64_encode(force_bytes(user.pk))
        assunto = "UnB Alerta - Confirmação de Conta"
        full_url = self.request.get_raw_uri(),
        url_base = full_url[0][:full_url[0].find('usuario') - 1],
        mensagem = ("Este e-mail foi utilizado para fazer cadastro no " +
                    "UnB Alerta.\n" +
                    "Caso você não tenha feito este cadastro, por favor " +
                    "ignore esta mensagem. Caso tenha, clique " +
                    "no link abaixo\n" + url_base[0] +
                    reverse('confirmar_email', kwargs=kwargs))
        remetente = settings.EMAIL_HOST_USER
        destinatario = [self.request.POST.get('email'),
                        settings.EMAIL_HOST_USER]
        send_mail(assunto, mensagem, remetente, destinatario,
                  fail_silently=False)

        usuario = Usuario.objects.get(user_id=user.id)
        if form.data['placa1']:
            placa = PlacaCarro(numero=form.data['placa1'],
                               usuario=usuario)
            placa.save()

        if form.data['placa2']:
            placa = PlacaCarro(numero=form.data['placa2'],
                               usuario=usuario)
            placa.save()

        if form.data['placa3']:
            placa = PlacaCarro(numero=form.data['placa3'],
                               usuario=usuario)
            placa.save()

        return redirect(reverse('solicita_confirmacao'))

    def get_initial(self):
        return {'grupo_usuario': 1}

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        if form.is_valid():
            return self.form_valid(form)
        else:
            erros = form.non_field_errors().as_text()
            erros = ''.join(c for c in erros if c not in '*')
            mensagem = 'Formulário Inválido.' + erros
            messages.add_message(request, messages.ERROR, mensagem)
            return self.render_to_response(
                {'form': form})


class PerfilView(DetailView):
    template_name = "usuario/perfil.html"

    def get_object(self):
        if not self.request.user.is_superuser:
            return Usuario.objects.get(user_id=self.request.user.id)
        else:
            return User.objects.get(id=self.request.user.id)


class ConfirmarEmailView(TemplateView):
    template_name = "usuario/confirma_email.html"

    def get(self, request, *args, **kwargs):
        uid = urlsafe_base64_decode(self.kwargs['uidb64'])
        user = User.objects.get(id=uid)
        user.is_active = True
        usuario = Usuario.objects.get(user_id=uid)
        usuario.status = True
        usuario.save()
        user.save()
        context = self.get_context_data(**kwargs)
        return self.render_to_response(context)


class PlacaFiltroView(PermissionRequiredMixin, FilterView):
    model = PlacaCarro
    filterset_class = PlacaFiltro
    paginate_by = 10
    permission_required = {'ocorrencia.change_ocorrencia'}

    def get_context_data(self, **kwargs):
        context = super(PlacaFiltroView,
                        self).get_context_data(**kwargs)

        paginator = context['paginator']
        page_obj = context['page_obj']

        context['page_range'] = make_pagination(
            page_obj.number, paginator.num_pages)

        return context

    def get(self, request, *args, **kwargs):
        super(PlacaFiltroView, self).get(request)

        # Se a pesquisa estiver quebrando com a paginação
        # Olhe esta função abaixo
        # Provavelmente você criou um novo campo no Form/FilterSet
        # Então a ordem da URL está diferente
        data = self.filterset.data
        if (data and data.get('numero') is not None):
            url = "&" + str(self.request.environ['QUERY_STRING'])
            if url.startswith("&page"):
                ponto_comeco = url.find('numero=') - 1
                url = url[ponto_comeco:]
        else:
            url = ''

        queryset = self.object_list.distinct()

        context = self.get_context_data(filter=self.filterset,
                                        object_list=queryset,
                                        filter_url=url,
                                        numero_res=len(queryset)
                                        )

        return self.render_to_response(context)
