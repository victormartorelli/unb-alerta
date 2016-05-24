***********************************************
# UNB-ALERTA
***********************************************
Projeto de um site que visa aumentar a segurança da UnB. Feito por alunos do 1/2016 de Linguagens de Programação. 

Para contribuir, siga rigorosamente os passos abaixo:

* É extremamente recomendado que seja utilizado uma máquina virtual Ubuntu 14.04.

* Certifique-se de que o sistema utiliza como padrão a versão 2.7 do Python:
    
    sudo rm /usr/bin/python
    
    sudo ln -s /usr/bin/python2.7 /usr/bin/python
    
    python -V 

* Instale as seguintes dependências do Sistema (comandos para Ubuntu):
    
    sudo apt-get update
    
    sudo apt-get upgrade
    
    sudo apt-get install mysql-server phpmyadmin
    
* Pelo navegador, acesse http://127.0.0.1/phpmyadmin e crie o banco "projeto-lp"

* Continuando as instalações de dependências:

    sudo apt-get install build-essential python3-dev python3-mysqldb libmysqlclient-dev python3-virtualenv 
    
    sudo apt-get install git nginx libpq-dev graphviz-dev graphviz pkg-config nodejs npm
    
    sudo apt-get install libtiff5-dev libjpeg8-dev zlib1g-dev libfreetype6-dev
    
    sudo apt-get install libcms2-dev libwebp-dev tcl8.6-dev tk8.6-dev python3-tk
    
    sudo ln -s /usr/bin/nodejs /usr/bin/node

    sudo npm install -g bower

* Configure seu GIT, seguindo essas instruções https://help.github.com/articles/set-up-git.

* Clone esse repositório.
 
* Os comandos abaixo deverão ser executados dentro da raiz do projeto que foi clonado para sua máquina.

* Crie um virtualenv wrapper usando python 3 e ative-o seguindo os passos abaixo:
    
    virtualenv -p /usr/bin/python3 --system-site-packages venv
    
    source venv/bin/activate
    
* Certifique-se que a partir deste passo, é apresentado no início da linha do prompt a expressão (venv).

    sudo pip install --upgrade pip

    sudo pip install --upgrade virtualenv

    pip install mysqlclient
    
    pip install image

* De acordo com a sua Fé, faça uma oração/reza/simpatia/mandinga/despacho/cruze todos os seus dedos...

* Instale as dependências Python do sistema (Faça isso na raiz do projeto)::

    pip install -r requirements/dev-requirements.txt
    

* Instale as dependências do Bower (Faça isso na raiz do projeto)::
    (se alguém sabe o que isso quer dizer, por favor, poste aqui)


* Com o dump do Banco do MySQL na pasta DB, execute:

    ./manage.py migrate

* Confira o funcionamento através do comando:

    ./manage.py runserver

* Em um navegador, acesse http://127.0.0.1:8000 e verifique o carregamento da página do projeto.

* Amém. 