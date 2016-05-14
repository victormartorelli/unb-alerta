***********************************************
# UNB-ALERTA
***********************************************
Projeto de um site que visa aumentar a segurança da UnB. Feito por alunos do 1/2016 de Linguagens de Programação. 

Para contribuir, siga rigorosamente os passos abaixo:

* Instale as seguintes dependências do Sistema (comandos para Ubuntu)::

    sudo apt-get install git nginx python3-dev libpq-dev graphviz-dev graphviz pkg-config nodejs npm \

    sudo ln -s /usr/bin/nodejs /usr/bin/node

    sudo npm install -g bower

* Configure seu GIT, seguindo essas instruções https://help.github.com/articles/set-up-git.

* Fork e Clone esse repositório, seguindo as instruções em https://help.github.com/articles/fork-a-repo.

* Se você ainda não tem o PIP instalado, instale-o para Python 3

* Crie um virtualenv wrapper usando python 3 e ative-o seguindo o link abaixo.

    http://docs.python-guide.org/en/latest/dev/virtualenvs/

* Instale as dependências Python do sistema (Faça isso na raiz do projeto)::

    pip install -r requirements/dev-requirements.txt

* Instale as dependências do Bower (Faça isso na raiz do projeto)::


* Coloque o dump do Banco do MySQL na pasta raiz

* Execute ``./manage.py migrate`` 
