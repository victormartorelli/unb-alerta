***********************************************
# UNB-ALERTA
***********************************************
Projeto de um site que visa aumentar a segurança da UnB. Feito por alunos do 1/2016 de Linguagens de Programação. 

Para contribuir, siga rigorosamente os passos abaixo:

* Instale as seguintes dependências do Sistema (comandos para Ubuntu)::

    sudo apt-get install git nginx python3-dev libpq-dev graphviz-dev graphviz pkg-config python-psycopg2 nodejs npm \

    sudo ln -s /usr/bin/nodejs /usr/bin/node

    sudo npm install -g bower

* Configure seu GIT, seguindo essas instruções https://help.github.com/articles/set-up-git.

* Fork e Clone esse repositório, seguindo as instruções em https://help.github.com/articles/fork-a-repo.

* Se você ainda não tem o PIP instalado:

    sudo apt-get install python-pip python-dev build-essential
    sudo pip install --upgrade pip
    sudo pip install --upgrade virtualenv

* Crie um virtualenv usando python 3 e ative-o.

    mkvirtualenv -p /usr/bin/python3 unb-alerta

* Instale as dependências Python do sistema (Faça isso na raiz do projeto)::

    pip install -r requirements/dev-requirements.txt

* Instale as dependências do Bower (Faça isso na raiz do projeto)::


* Coloque o dump do Banco do MySQL na pasta raiz

* Execute ``./manage.py migrate`` 
