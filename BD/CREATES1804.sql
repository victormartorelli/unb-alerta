INSERT INTO `projeto-lp`.`tb_tipoUsuario` (tipo) VALUES ("Seguranca");
INSERT INTO `projeto-lp`.`tb_tipoUsuario` (tipo) VALUES ("Usuario");
INSERT INTO `projeto-lp`.`tb_tipoUsuario` (tipo) VALUES ("Administrador");
Select * from `projeto-lp`.tb_tipoUsuario;

INSERT INTO `projeto-lp`.`tb_localizacao` (latitude, longitude) VALUES (-15.764941,-47.870677); /*RU da UnB*/
INSERT INTO `projeto-lp`.`tb_localizacao` (latitude, longitude) VALUES (-22.9519875,-43.2109869); /*Cristo Redentor*/
INSERT INTO `projeto-lp`.`tb_localizacao` (latitude, longitude) VALUES (52.3747384,4.7581864); /*Amsterdam*/
Select * from `projeto-lp`.tb_localizacao;

INSERT INTO `projeto-lp`.`tb_categoria` (tipo) VALUES ("Movimentacao estranha");
INSERT INTO `projeto-lp`.`tb_categoria` (tipo) VALUES ("Assalto a mao armada");
INSERT INTO `projeto-lp`.`tb_categoria` (tipo) VALUES ("Agressão fisica");
INSERT INTO `projeto-lp`.`tb_categoria` (tipo) VALUES ("Depredacao de patrimonio publico");
Select * from `projeto-lp`.tb_categoria;


INSERT INTO `projeto-lp`.`tb_usuario` (CPF, nome, RG, matricula, sexo, email, login, senha,
status, data_nasc, tb_tipoUsuario_ID) VALUES (05588890800, "Marcelino Saudavel", 0123756, 100107766, 'M',
"emailexemplo@unb.br", "loginusuario", "senhausuario", 1, "1992-02-16", 1);
INSERT INTO `projeto-lp`.`tb_usuario` (CPF, nome, RG, matricula, sexo, email, login, senha,
status, data_nasc, tb_tipoUsuario_ID) VALUES (95999990800, "Chiquinho Tapioca", 0123756, 100107766, 'M',
"chiquinho@unb.br", "logindochico", "senhadochico", 1, "2000-12-26", 1);
INSERT INTO `projeto-lp`.`tb_usuario` (nome, email, login, senha, status, tb_tipoUsuario_ID, data_nasc) VALUES 
("Olavo Elaborado", "emaildoolavo@unb.br", "pulanamassa", "s3nh4H4rDC0R3", 0, 2, "1900-02-02");
Select * from `projeto-lp`.tb_usuario;

INSERT INTO `projeto-lp`.`tb_ocorrencia` (data, hora, validade, atendida, emergencia, vitimado, resposta,
usuario_ID, vigilante_ID, tb_categoria_ID, tb_localizacao_ID) VALUES 
("2016-04-26", "2016-04-26 14:55:23", 'S', 0, 1, 1, "Mantenha a calma", 1, 2, 2, 1);

INSERT INTO `projeto-lp`.`tb_ocorrencia` (data, hora, validade, atendida, emergencia, vitimado, resposta,
usuario_ID, vigilante_ID, tb_categoria_ID, tb_localizacao_ID, descricao) VALUES 
("2015-12-18", "2015-12-18 12:10:32", 'N', 1, 0, 0, "Estamos acionando uma viatura", 3, 2, 4, 2, 
"Avistei um telefone publico sendo depredado.");
Select * from `projeto-lp`.tb_ocorrencia;