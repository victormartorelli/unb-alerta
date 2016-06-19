var nomeLocal;
var map;
function initMap() {
  var ICCCoords = [
    new google.maps.LatLng(-15.760398,-47.870296),
    new google.maps.LatLng(-15.760567,-47.870956),
    new google.maps.LatLng(-15.763245,-47.870163),
    new google.maps.LatLng(-15.764228,-47.869485),
    new google.maps.LatLng(-15.765899,-47.867105),
    new google.maps.LatLng(-15.765350,-47.866690),
    new google.maps.LatLng(-15.763843,-47.868781),
    new google.maps.LatLng(-15.762765,-47.869574)
  ];

  var UNB_Coords = [
    new google.maps.LatLng(-15.735485, -47.885615),
    new google.maps.LatLng(-15.762695, -47.876887),
    new google.maps.LatLng(-15.769964, -47.875081),
    new google.maps.LatLng(-15.783380, -47.873746),
    new google.maps.LatLng(-15.774848, -47.863679),
    new google.maps.LatLng(-15.763613, -47.862432),
    new google.maps.LatLng(-15.763530, -47.861102),
    new google.maps.LatLng(-15.763530, -47.861102),
    new google.maps.LatLng(-15.768959, -47.855091),
    new google.maps.LatLng(-15.765684, -47.851076),
    new google.maps.LatLng(-15.760552, -47.854213),
    new google.maps.LatLng(-15.759241, -47.854846),
    new google.maps.LatLng(-15.758828, -47.855629),
    new google.maps.LatLng(-15.759055, -47.857335),
    new google.maps.LatLng(-15.762865, -47.861444),
    new google.maps.LatLng(-15.752488, -47.871733),
    new google.maps.LatLng(-15.744409, -47.879620),
    new google.maps.LatLng(-15.735962, -47.884545),
    new google.maps.LatLng(-15.735291, -47.885317)
  ];
//------------------AREA DOS SG E ARTES------------------------------//
//  Área dos SGs e Prédios das Artes
  var SGs_e_Artes_e_FT = [
      new google.maps.LatLng(-15.760673,-47.8729195),
            new google.maps.LatLng(-15.7611557,-47.8746521),
            new google.maps.LatLng(-15.7679394,-47.8728349),
            new google.maps.LatLng(-15.7659415,-47.8698898),
            new google.maps.LatLng(-15.7635428,-47.8715809),
            new google.maps.LatLng(-15.7629258,-47.8720165),
            new google.maps.LatLng(-15.7622469,-47.8723984),
            new google.maps.LatLng(-15.7618578,-47.8725493),
            new google.maps.LatLng(-15.76146997,-47.8726703),
      new google.maps.LatLng(-15.760673,-47.8729195)];

//  Sub Área de SGs_e_Artes_e_Ft, que contempla toda a área da Faculdade de Tecnologia
  var SGs_e_Artes_Sub_Area_Faculdade_de_Tecnologia = [
            new google.maps.LatLng(-15.7611525,-47.8746548),
            new google.maps.LatLng(-15.7651897,-47.8734747),
            new google.maps.LatLng(-15.763788,-47.871404),
            new google.maps.LatLng(-15.7630059,-47.8719619),
            new google.maps.LatLng(-15.7624122,-47.872316),
            new google.maps.LatLng(-15.7618546,-47.872552),
            new google.maps.LatLng(-15.7606678,-47.8729222),
            new google.maps.LatLng(-15.7611525,-47.8746548)];

//  Sub Área de SGs_e_Artes, mas representando apenas os SGs da músic
  var SGs_e_Artes_Sub_Musica = [
            new google.maps.LatLng(-15.7645476,-47.8708917),
            new google.maps.LatLng(-15.763788,-47.871404),
            new google.maps.LatLng(-15.7645837,-47.8725815),
            new google.maps.LatLng(-15.7656885,-47.8718305),
            new google.maps.LatLng(-15.7648651,-47.8706691),
            new google.maps.LatLng(-15.7645476,-47.8708917)];

//  Sub Área dos SGs_e_Artes, mas apenas com os prédios da Artes
  var ASGs_e_Artes_Sub_Artes = [
            new google.maps.LatLng(-15.7648651,-47.8706691),
            new google.maps.LatLng(-15.7648651,-47.8718305),
            new google.maps.LatLng(-15.7667365,-47.8710634),
            new google.maps.LatLng(-15.7659415,-47.8698898),
            new google.maps.LatLng(-15.7648651,-47.8706691)];

//----------------------------------2-------------------------------------------//

  var SGs_e_Artes_Sub_Engenharias = [
            new google.maps.LatLng(-15.7645837,-47.8725815),
            new google.maps.LatLng(-15.7649283,-47.8731018),
            new google.maps.LatLng(-15.76637,-47.8720987),
            new google.maps.LatLng(-15.7666333,-47.8725681),
            new google.maps.LatLng(-15.7674051,-47.8720558),
            new google.maps.LatLng(-15.7667365,-47.8710634),
            new google.maps.LatLng(-15.7645837,-47.8725815)];

//  Prédios complementares, como Observatório Sismológico, APOSFUB, Associação dos Ex-Alunos da UnB e Retaurante
  var SGs_e_Artes_Sub_Complementares = [
            new google.maps.LatLng(-15.7651897,-47.8734747),
            new google.maps.LatLng(-15.7679394,-47.8728349),
            new google.maps.LatLng(-15.7674051,-47.8720558),
            new google.maps.LatLng(-15.7666333,-47.8725681),
            new google.maps.LatLng(-15.76637,-47.8720987),
            new google.maps.LatLng(-15.7649283,-47.8731018),
            new google.maps.LatLng(-15.7651897,-47.8734747)];

//  Estacionamento Secundário da FT
  var  Estacionamento_menor_FT = [
            new google.maps.LatLng(-15.7628517,-47.8727719),
            new google.maps.LatLng(-15.7626038,-47.8722087),
            new google.maps.LatLng(-15.7624154,-47.8723133),
            new google.maps.LatLng(-15.762076,-47.8724581),
            new google.maps.LatLng(-15.7618301,-47.8725734),
            new google.maps.LatLng(-15.7615636,-47.8726458),
            new google.maps.LatLng(-15.7613105,-47.8727558),
            new google.maps.LatLng(-15.7614241,-47.8729838),
            new google.maps.LatLng(-15.7616203,-47.8733969),
      new google.maps.LatLng(-15.7622682,-47.8730535),
            new google.maps.LatLng(-15.7628517,-47.8727719)];

//  Laboratório de Energia
  var UnB_Lab_de_Energia = [
            new google.maps.LatLng(-15.7620217,-47.8739749),
            new google.maps.LatLng(-15.7624296,-47.8738139),
            new google.maps.LatLng(-15.7622941,-47.8733969),
            new google.maps.LatLng(-15.7618694,-47.8735833),
            new google.maps.LatLng(-15.7620217,-47.8739749) ];

//----------------------------------3-----------------------------------//
//  Estacionamento Principal da FT
  var Estacionamento_Principal_FT = [
            new google.maps.LatLng(-15.7635383,-47.8733486),
            new google.maps.LatLng(-15.7628981,-47.8736061),
            new google.maps.LatLng(-15.7627303,-47.8731502),
            new google.maps.LatLng(-15.7625018,-47.8732199),
            new google.maps.LatLng(-15.7622605,-47.8732923),
            new google.maps.LatLng(-15.7624296,-47.8738139),
            new google.maps.LatLng(-15.7625754,-47.8742391),
            new google.maps.LatLng(-15.7651897,-47.8734747),
            new google.maps.LatLng(-15.7649283,-47.8731018),
      new google.maps.LatLng(-15.7647231,-47.872796),
      new google.maps.LatLng(-15.7635383,-47.8733486)];

//  Laboratório de Hidráulica e Estruturas
  var Lab_de_Hidraulica_e_Estrut = [
            new google.maps.LatLng(-15.7628981,-47.8736061),
            new google.maps.LatLng(-15.7634118,-47.8733996),
            new google.maps.LatLng(-15.7632956,-47.8731421),
            new google.maps.LatLng(-15.7630555,-47.8732467),
            new google.maps.LatLng(-15.7627974,-47.8733566),
            new google.maps.LatLng(-15.7628981,-47.8736061)];

//  FT - Faculdade de Tecnologia
  var Faculdade_de_Tecnologia = [
            new google.maps.LatLng(-15.7627225,-47.8722435),
            new google.maps.LatLng(-15.7631175,-47.8732145),
            new google.maps.LatLng(-15.7632956,-47.8731421),
            new google.maps.LatLng(-15.7634118,-47.8733996),
            new google.maps.LatLng(-15.7639694,-47.8731488),
            new google.maps.LatLng(-15.7647024,-47.8728094),
            new google.maps.LatLng(-15.7638093,-47.8714925),
            new google.maps.LatLng(-15.7627225,-47.8722435)];

//  Passagem dos Pedestres da FT
  var Passagem_Pedestres_FT = [
            new google.maps.LatLng(-15.7611557,-47.8746521),
            new google.maps.LatLng(-15.7621005,-47.8743759),
            new google.maps.LatLng(-15.7613105,-47.8727558),
            new google.maps.LatLng(-15.760673,-47.8729195),
            new google.maps.LatLng(-15.7611557,-47.8746521)];

//  SG 11
  var SG_11 = [
            new google.maps.LatLng(-15.765624,-47.8726083),
            new google.maps.LatLng(-15.7660105,-47.8723425),
            new google.maps.LatLng(-15.76637,-47.8720987),
            new google.maps.LatLng(-15.7661687,-47.8717433),
            new google.maps.LatLng(-15.7657763,-47.8720263),
            new google.maps.LatLng(-15.7654291,-47.8722771),
            new google.maps.LatLng(-15.765624,-47.8726083)];

//----------------------------------4--------------------------------------//

//  Estacionamento do SG 11
  var Estacionamento_SG11 = [
            new google.maps.LatLng(-15.7661687,-47.8717433),
            new google.maps.LatLng(-15.7660628,-47.8715663),
            new google.maps.LatLng(-15.765322,-47.872088),
            new google.maps.LatLng(-15.7654291,-47.8722771),
            new google.maps.LatLng(-15.7661687,-47.8717433)];

//  SG 12
  var SG_12 = [
            new google.maps.LatLng(-15.764803,-47.8729033),
            new google.maps.LatLng(-15.7655104,-47.8724125),
            new google.maps.LatLng(-15.765322,-47.872088),
            new google.maps.LatLng(-15.7645837,-47.8725815),
            new google.maps.LatLng(-15.7648031,-47.8729033)];

//  Estacionamento do SG 12
  var Estacionamento_SG12 = [
            new google.maps.LatLng(-15.765624,-47.8726083),
            new google.maps.LatLng(-15.7655104,-47.8724125),
            new google.maps.LatLng(-15.7648031,-47.8729033),
            new google.maps.LatLng(-15.7649283,-47.8731018),
            new google.maps.LatLng(-15.765624,-47.8726083)];

//  SG 2
  var SG_2 = [
            new google.maps.LatLng(-15.7641242,-47.8719002),
            new google.maps.LatLng(-15.7648625,-47.8713584),
            new google.maps.LatLng(-15.7645476,-47.8708917),
            new google.maps.LatLng(-15.763788,-47.871404),
            new google.maps.LatLng(-15.7641242,-47.8719002)];

//  Auditório de Música
  var Auditorio_de_Musica = [
            new google.maps.LatLng(-15.7641242,-47.8719002),
            new google.maps.LatLng(-15.7642998,-47.8721684),
            new google.maps.LatLng(-15.7647179,-47.8718626),
            new google.maps.LatLng(-15.7645321,-47.8716052),
            new google.maps.LatLng(-15.7641242,-47.8719002)];

//  Estacionamento do SG 2 e SG 8
  var Estacionamento_SG2 = [
            new google.maps.LatLng(-15.7652341,-47.8712055),
            new google.maps.LatLng(-15.7648651,-47.8706691),
            new google.maps.LatLng(-15.7645476,-47.8708917),
            new google.maps.LatLng(-15.7649115,-47.8714228),
            new google.maps.LatLng(-15.7652341,-47.8712055)];

//-----------------------------------5----------------------------------//
//  SG 8
  var SG_8 = [
            new google.maps.LatLng(-15.7647179,-47.8718626),
            new google.maps.LatLng(-15.7653646,-47.8713986),
            new google.maps.LatLng(-15.7652341,-47.8712055),
            new google.maps.LatLng(-15.7649115,-47.8714228),
            new google.maps.LatLng(-15.7648625,-47.8713584),
            new google.maps.LatLng(-15.7645321,-47.8716052),
            new google.maps.LatLng(-15.7647179,-47.8718626)];

//  SG 10
  var SG_10 = [
            new google.maps.LatLng(-15.7642998,-47.8721684),
            new google.maps.LatLng(-15.7645837,-47.8725815),
            new google.maps.LatLng(-15.7655233,-47.8719538),
            new google.maps.LatLng(-15.7652239,-47.8715032),
            new google.maps.LatLng(-15.7642998,-47.8721684)];

//  Estacionamento do SG 10
  var Estacionamento_SG10 = [
            new google.maps.LatLng(-15.7655233,-47.8719538),
            new google.maps.LatLng(-15.7656885,-47.8718305),
            new google.maps.LatLng(-15.7653646,-47.8713986),
            new google.maps.LatLng(-15.7652239,-47.8715032),
            new google.maps.LatLng(-15.7655233,-47.8719538)];

//  SG 9
  var SG_9 = [
            new google.maps.LatLng(-15.7662486,-47.8718787),
            new google.maps.LatLng(-15.7669482,-47.8713772),
            new google.maps.LatLng(-15.7667365,-47.8710634),
            new google.maps.LatLng(-15.7660628,-47.8715663),
            new google.maps.LatLng(-15.7662486,-47.8718787)];

//  Estacionamento do SG 9
  var Estacionamento_SG9 = [
            new google.maps.LatLng(-15.7662486,-47.8718787),
            new google.maps.LatLng(-15.7666333,-47.8725681),
            new google.maps.LatLng(-15.7674051,-47.8720558),
            new google.maps.LatLng(-15.7669482,-47.8713772),
            new google.maps.LatLng(-15.7662486,-47.8718787)];

//  Observatório Sismológico
  var Observatorio_Sismologico = [
            new google.maps.LatLng(-15.7649283,-47.8731018),
            new google.maps.LatLng(-15.7651897,-47.8734747),
            new google.maps.LatLng(-15.7664784,-47.8731769),
            new google.maps.LatLng(-15.7659724,-47.8723562),
            new google.maps.LatLng(-15.7649283,-47.8731018)];

//----------------------------6------------------------------------/

//  Associação dos Aposentados da FUB/Associação dos Ex-Alunos
  var APOSFUB = [
            new google.maps.LatLng(-15.76637,-47.8720987),
            new google.maps.LatLng(-15.7659724,-47.8723562),
            new google.maps.LatLng(-15.7664784,-47.8731769),
            new google.maps.LatLng(-15.766912,-47.873075),
            new google.maps.LatLng(-15.76637,-47.8720987)];

//  Restaurante da ADUnB
  var Restaurante_ADUnB = [
            new google.maps.LatLng(-15.766912,-47.873075),
            new google.maps.LatLng(-15.7679394,-47.8728349),
            new google.maps.LatLng(-15.7674051,-47.8720558),
            new google.maps.LatLng(-15.7666333,-47.8725681),
            new google.maps.LatLng(-15.766912,-47.873075)];

//  Área da Concha Acústica e Praça da Música
  var Concha_Acustica = [
            new google.maps.LatLng(-15.7655104,-47.8715971),
            new google.maps.LatLng(-15.7665636,-47.8708139),
            new google.maps.LatLng(-15.7662228,-47.8703123),
            new google.maps.LatLng(-15.7651697,-47.8711143),
            new google.maps.LatLng(-15.7655104,-47.8715971)];

//  Departamento de Artes Cênicas
  var Departamento_de_Artes_Cenicas = [
            new google.maps.LatLng(-15.7656885,-47.8718305),
            new google.maps.LatLng(-15.7667365,-47.8710634),
            new google.maps.LatLng(-15.7665636,-47.8708139),
            new google.maps.LatLng(-15.7655104,-47.8715971),
            new google.maps.LatLng(-15.7656885,-47.8718305)];

//  Instituto de Artes
  var Instituto_de_Artes = [
            new google.maps.LatLng(-15.7651697,-47.8711143),
            new google.maps.LatLng(-15.7662228,-47.8703123),
            new google.maps.LatLng(-15.7659415,-47.8698898),
            new google.maps.LatLng(-15.7648651,-47.8706691),
            new google.maps.LatLng(-15.7651697,-47.8711143)];

//-------------------AREA PJC/PAT/REL/CIC/POL/EST--------------------//
  //  Sub-Área IPol/IRel/CIC/Est
  var SubArea_IPol_IRel_CIC_Est = [
    new google.maps.LatLng(-15.7574807,-47.8700297),
    new google.maps.LatLng(-15.7574895,-47.8700514),
    new google.maps.LatLng(-15.7597089,-47.8694258),
    new google.maps.LatLng(-15.7592145,-47.8677964),
    new google.maps.LatLng(-15.7589137,-47.8681076),
    new google.maps.LatLng(-15.7575985,-47.8694178),
    new google.maps.LatLng(-15.7576101,-47.8694701),
    new google.maps.LatLng(-15.7575624,-47.869556),
    new google.maps.LatLng(-15.7575908,-47.8695211),
    new google.maps.LatLng(-15.757565,-47.8698631),
    new google.maps.LatLng(-15.7574807,-47.8700297)];

//  Institutos de Ciência Política e Relações Internacionais - UnB
  var IPol_IRel_UnB =[
    new google.maps.LatLng (-15.7585846,-47.8692394),
    new google.maps.LatLng (-15.757725,-47.8694621),
    new google.maps.LatLng (-15.7578489,-47.8699449),
    new google.maps.LatLng (-15.7587085,-47.8697008),
    new google.maps.LatLng (-15.7585846,-47.8692394)];


//  Prédio de Ciência da Computação e Estatística  - UnB
  var CIC_Est_UnB =[
    new google.maps.LatLng (-15.7591035,-47.8690892),
    new google.maps.LatLng (-15.7590054,-47.8686762),
    new google.maps.LatLng (-15.758249,-47.8688693),
    new google.maps.LatLng (-15.7583549,-47.8693038),
    new google.maps.LatLng (-15.7591035,-47.8690892)];

//  Estacionamento e acesso ao CIC/Est
  var Estac_Acesso_CIC_Est =[
    new google.maps.LatLng (-15.7585846,-47.8692394),
    new google.maps.LatLng (-15.7587085,-47.8697008),
    new google.maps.LatLng (-15.7594352,-47.8695043),
    new google.maps.LatLng (-15.75931,-47.8690383),
    new google.maps.LatLng (-15.7585846,-47.8692394)];

  // Sub-Área PJC
  var SubArea_PJC = [
    new google.maps.LatLng(-15.7575553,-47.8708515),
    new google.maps.LatLng(-15.7582696,-47.8706423),
    new google.maps.LatLng(-15.7582955,-47.8707469),
    new google.maps.LatLng(-15.7595397,-47.8703901),
    new google.maps.LatLng(-15.7599566,-47.8702613),
    new google.maps.LatLng(-15.7597089,-47.8694258),
    new google.maps.LatLng(-15.7574895,-47.8700514),
    new google.maps.LatLng(-15.7574807,-47.8700297),
    new google.maps.LatLng(-15.7574512,-47.8700778),
    new google.maps.LatLng(-15.757432,-47.8701675),
        new google.maps.LatLng(-15.7574249,-47.8703392),
    new google.maps.LatLng(-15.7575553,-47.8708515)];

//  Pavilhão João Calmon - UnB
  var PJC_UnB = [
    new google.maps.LatLng(-15.7578986,-47.8706388),
    new google.maps.LatLng(-15.7591474,-47.8702748),
    new google.maps.LatLng(-15.7590235,-47.8698242),
    new google.maps.LatLng(-15.7577748,-47.8701889),
    new google.maps.LatLng(-15.7578986,-47.8706388)];

//  Estacionamento Sul do Pavilhão João Calmon
  var Estac_PJC_Sul = [
    new google.maps.LatLng(-15.7591758,-47.8703687),
    new google.maps.LatLng(-15.7596352,-47.8702506),
    new google.maps.LatLng(-15.7594352,-47.8695043),
    new google.maps.LatLng(-15.7589718,-47.8696257),
    new google.maps.LatLng(-15.7591758,-47.8703687)];

//  Estacionamento PAT PJC
  var Estac_PAT_PJC = [
    new google.maps.LatLng(-15.7579257,-47.8707381),
    new google.maps.LatLng(-15.7582696,-47.8706423),
    new google.maps.LatLng(-15.7582955,-47.8707469),
    new google.maps.LatLng(-15.759663,-47.8703505),
    new google.maps.LatLng(-15.7596352,-47.8702506),
    new google.maps.LatLng(-15.7591758,-47.8703687),
    new google.maps.LatLng(-15.7591474,-47.8702748),
    new google.maps.LatLng(-15.7578986,-47.8706388),
    new google.maps.LatLng(-15.7579257,-47.8707381)];

//  Estacionamento Norte PJC e PAT - UnB
  var Area_PAT_PJC_IPol_CIC = [
    new google.maps.LatLng(-15.757432,-47.8701675),
    new google.maps.LatLng(-15.757423,-47.8702406),
    new google.maps.LatLng(-15.7574249,-47.8703392),
    new google.maps.LatLng(-15.7575553,-47.8708515),
    new google.maps.LatLng(-15.7579257,-47.8707381),
    new google.maps.LatLng(-15.757745,-47.8700803),
    new google.maps.LatLng(-15.757432,-47.8701675)];

//  Estacionamento PJC, IPol e IRel
  var Estac_PJC_IPol_IRel = [
    new google.maps.LatLng(-15.7590235,-47.8698242),
    new google.maps.LatLng(-15.7589718,-47.8696257),
    new google.maps.LatLng(-15.7574895,-47.8700514),
    new google.maps.LatLng(-15.7574807,-47.8700297),
    new google.maps.LatLng(-15.7574512,-47.8700778),
    new google.maps.LatLng(-15.757432,-47.8701675),
    new google.maps.LatLng(-15.757745,-47.8700803),
    new google.maps.LatLng(-15.7577748,-47.8701889),
    new google.maps.LatLng(-15.7590235,-47.8698242)];

//  Gramado em frente ao PJC
  var Frente_PJC =[
    new google.maps.LatLng (-15.759663,-47.8703505),
    new google.maps.LatLng (-15.7599566,-47.8702613),
    new google.maps.LatLng (-15.7597089,-47.8694258),
    new google.maps.LatLng (-15.7594352,-47.8695043),
    new google.maps.LatLng (-15.759663,-47.8703505)];

  //  Grande área PAT, PJC, IPol/IRel/CIC/Est
var Area_PAT_PJC_IPol_CIC = [
    new google.maps.LatLng(-15.7601263,-47.8708817),
    new google.maps.LatLng(-15.7598908,-47.8700065),
    new google.maps.LatLng(-15.7592145,-47.8677964),
    new google.maps.LatLng(-15.7574953,-47.8694648),
    new google.maps.LatLng(-15.7575262,-47.869851),
    new google.maps.LatLng(-15.7574127,-47.8701138),
    new google.maps.LatLng(-15.757392,-47.8703552),
    new google.maps.LatLng(-15.7577224,-47.8715998),
    new google.maps.LatLng(-15.7601263,-47.8708817)];

//  Sub-Área PAT
  var SubArea_PAT =[
    new google.maps.LatLng (-15.7577637,-47.871589),
    new google.maps.LatLng (-15.7601263,-47.8708817),
    new google.maps.LatLng (-15.7599566,-47.8702613),
    new google.maps.LatLng (-15.7595397,-47.8703901),
    new google.maps.LatLng (-15.7582955,-47.8707469),
    new google.maps.LatLng (-15.7582696,-47.8706423),
    new google.maps.LatLng (-15.7575553,-47.8708515),
    new google.maps.LatLng (-15.7577637,-47.871589)];

//  Pavilhão Anísio Teixeira
  var PAT_UNB =[
    new google.maps.LatLng (-15.7582955,-47.8707469),
    new google.maps.LatLng (-15.7584168,-47.8711814),
    new google.maps.LatLng (-15.7596559,-47.8708166),
    new google.maps.LatLng (-15.7595397,-47.8703901),
    new google.maps.LatLng (-15.7582955,-47.8707469)];

//  Estacionamento Norte do PAT
  var Estac_PAT_Norte =[
    new google.maps.LatLng (-15.7583213,-47.8714221),
    new google.maps.LatLng (-15.7584736,-47.8713799),
    new google.maps.LatLng (-15.7582696,-47.8706423),
    new google.maps.LatLng (-15.7581206,-47.8706851),
    new google.maps.LatLng (-15.7583213,-47.8714221)];

//  Estacionamento Oeste PAT
  var Estac_PAT_Oeste =[
    new google.maps.LatLng (-15.7584168,-47.8711814),
    new google.maps.LatLng (-15.7584736,-47.8713799),
    new google.maps.LatLng (-15.7597126,-47.8710071),
    new google.maps.LatLng (-15.7596559,-47.8708166),
    new google.maps.LatLng (-15.7584168,-47.8711814)];
    //  Módulo de Atividades de Serviço e Comércio Norte - UnB
  var Masc_Norte =[
    new google.maps.LatLng (-15.7577637,-47.871589),
    new google.maps.LatLng (-15.7583213,-47.8714221),
    new google.maps.LatLng (-15.7581206,-47.8706851),
    new google.maps.LatLng (-15.7575643,-47.8708515),
    new google.maps.LatLng (-15.7577637,-47.871589)];

//  Acesso PAT Sul
  var Acesso_PAT_PJC_Sul = [
        new google.maps.LatLng(-15.7597126,-47.8710071),
        new google.maps.LatLng(-15.7599115,-47.87094),
        new google.maps.LatLng(-15.7598005,-47.8704894),
        new google.maps.LatLng(-15.7600018,-47.8704357),
        new google.maps.LatLng(-15.7599566,-47.8702613),
        new google.maps.LatLng(-15.7595397,-47.8703901),
        new google.maps.LatLng(-15.7597126,-47.8710071)];

//  Parada de Onibus PAT/PJC
  var Parada_PAT_PJC_Sul = [
        new google.maps.LatLng(-15.7600018,-47.8704357),
        new google.maps.LatLng(-15.7598005,-47.8704894),
        new google.maps.LatLng(-15.7599115,-47.87094),
        new google.maps.LatLng(-15.7601263,-47.8708817),
        new google.maps.LatLng(-15.7600018,-47.8704357)];



//------------------------------ CRIACAO DE POLYGONS----------------------//

  var ICCPolygon = new google.maps.Polygon({
    // Coordenadas do seu objeto
    paths: ICCCoords
    // Cor do da linha
    //strokeColor: '#3300FF',
    // Opacidade da linha
    //strokeOpacity: 0.8,
    // Espessura da linha
    //strokeWeight: 2,
    // Cor de preenchimento do objeto
    //fillColor: '#942E7C',
    // Opacidade do preenchimento
    //fillOpacity: 0.35
  });
  var UNB_Polygon = new google.maps.Polygon({
    paths: UNB_Coords //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  //----------------------------SUB AREAS POLYGON----------------------------//
var APOSFUB_Polygon = new google.maps.Polygon({
    paths: APOSFUB //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Restaurante_ADUnB_Polygon = new google.maps.Polygon({
    paths: Restaurante_ADUnB //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Concha_Acustica_Polygon = new google.maps.Polygon({
    paths: Concha_Acustica //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Departamento_de_Artes_Cenicas_Polygon = new google.maps.Polygon({
    paths: Departamento_de_Artes_Cenicas //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Instituto_de_Artes_Polygon = new google.maps.Polygon({
    paths: Instituto_de_Artes //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });


var SG_8_Polygon = new google.maps.Polygon({
    paths: SG_8 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var SG_10_Polygon = new google.maps.Polygon({
    paths: SG_10 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Estacionamento_SG10_Polygon = new google.maps.Polygon({
    paths: Estacionamento_SG10 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var SG_9_Polygon = new google.maps.Polygon({
    paths: SG_9 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Estacionamento_SG9_Polygon = new google.maps.Polygon({
    paths: Estacionamento_SG9 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Observatorio_Sismologico_Polygon = new google.maps.Polygon({
    paths: Observatorio_Sismologico //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Estacionamento_SG11_Polygon = new google.maps.Polygon({
    paths: Estacionamento_SG11 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var SG_12_Polygon = new google.maps.Polygon({
    paths: SG_12 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Estacionamento_SG12_Polygon = new google.maps.Polygon({
    paths: Estacionamento_SG12 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var SG_2_Polygon = new google.maps.Polygon({
    paths: SG_2 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Auditorio_de_Musica_Polygon = new google.maps.Polygon({
    paths: Auditorio_de_Musica //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Estacionamento_SG2_Polygon = new google.maps.Polygon({
    paths: Estacionamento_SG2 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

var Estacionamento_Principal_FT_Polygon = new google.maps.Polygon({
    paths: Estacionamento_Principal_FT //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var Lab_de_Hidraulica_e_Estrut_Polygon = new google.maps.Polygon({
    paths: Lab_de_Hidraulica_e_Estrut //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var Faculdade_de_Tecnologia_Polygon = new google.maps.Polygon({
    paths: Faculdade_de_Tecnologia //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var Passagem_Pedestres_FT_Polygon = new google.maps.Polygon({
    paths: Passagem_Pedestres_FT //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var SG_11_Polygon = new google.maps.Polygon({
    paths: SG_11 //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var SGs_e_Artes_Sub_Engenharias_Polygon = new google.maps.Polygon({
    paths: SGs_e_Artes_Sub_Engenharias //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
 var SGs_e_Artes_Sub_Complementares_Polygon = new google.maps.Polygon({
    paths: SGs_e_Artes_Sub_Complementares //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

 var Estacionamento_menor_FT_Polygon = new google.maps.Polygon({
    paths: Estacionamento_menor_FT //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

 var UnB_Lab_de_Energia_Polygon = new google.maps.Polygon({
    paths: UnB_Lab_de_Energia //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var SGs_e_Artes_e_FT_Polygon = new google.maps.Polygon({
    paths: SGs_e_Artes_e_FT //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var SGs_e_Artes_Sub_Area_Faculdade_de_Tecnologia_Polygon = new google.maps.Polygon({
    paths: SGs_e_Artes_Sub_Area_Faculdade_de_Tecnologia //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var SGs_e_Artes_Sub_Musica_Polygon = new google.maps.Polygon({
    paths: SGs_e_Artes_Sub_Musica //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

  var ASGs_e_Artes_Sub_Artes_Polygon = new google.maps.Polygon({
    paths: ASGs_e_Artes_Sub_Artes //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

    var SubArea_IPol_IRel_CIC_Est_Polygon = new google.maps.Polygon({
    paths: SubArea_IPol_IRel_CIC_Est //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var IPol_IRel_UnB_Polygon = new google.maps.Polygon({
    paths: IPol_IRel_UnB //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var CIC_Est_UnB_Polygon = new google.maps.Polygon({
    paths: CIC_Est_UnB //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var Estac_Acesso_CIC_Est_Polygon = new google.maps.Polygon({
    paths: Estac_Acesso_CIC_Est //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });


    var Area_PAT_PJC_IPol_CIC_Polygon = new google.maps.Polygon({
    paths: Area_PAT_PJC_IPol_CIC //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var SubArea_PJC_Polygon = new google.maps.Polygon({
    paths: SubArea_PJC //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var PJC_UnB_Polygon = new google.maps.Polygon({
    paths: PJC_UnB //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var Estac_PJC_Sul_Polygon = new google.maps.Polygon({
    paths: Estac_PJC_Sul //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var Estac_PAT_PJC_Polygon = new google.maps.Polygon({
    paths: Estac_PAT_PJC //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var Area_PAT_PJC_IPol_CIC_Polygon = new google.maps.Polygon({
    paths: Area_PAT_PJC_IPol_CIC //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var Estac_PJC_IPol_IRel_Polygon = new google.maps.Polygon({
    paths: Estac_PJC_IPol_IRel //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
  var Frente_PJC_Polygon = new google.maps.Polygon({
    paths: Frente_PJC //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });

    var SubArea_PAT_Polygon = new google.maps.Polygon({
    paths: SubArea_PAT //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var PAT_UNB_Polygon = new google.maps.Polygon({
    paths: PAT_UNB //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var Estac_PAT_Norte_Polygon = new google.maps.Polygon({
    paths: Estac_PAT_Norte //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var Estac_PAT_Oeste_Polygon = new google.maps.Polygon({
    paths: Estac_PAT_Oeste //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var Masc_Norte_Polygon = new google.maps.Polygon({
    paths: Masc_Norte //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var Acesso_PAT_PJC_Sul_Polygon = new google.maps.Polygon({
    paths: Acesso_PAT_PJC_Sul //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });
    var Parada_PAT_PJC_Sul_Polygon = new google.maps.Polygon({
    paths: Parada_PAT_PJC_Sul //,
    //strokeColor: '#3300FF',
    //strokeOpacity: 0.8,
    //strokeWeight: 2,
    //fillColor: '#942E7C',
    //filOpacity: 0.35
  });


  //--------------------------------------------------------------------------//
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -15.763606, lng: -47.869636},
          zoom: 17,
  });

  var marcador = '';
  var pertence = false;
  google.maps.event.addListener(map, 'click', function(e) {
    var local = e.latLng;
    pertence =
        google.maps.geometry.poly.containsLocation(local, UNB_Polygon) ?
        true:
        false;

    var mensagem = pertence ?
        "" :
        "Local inválido! Somente ocorrências dentro da UnB - Campus Darci Ribeiro";

    document.getElementById("mensagem").innerHTML = mensagem;


    if (pertence){
      if (marcador){
        marcador.setPosition(local);
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
        nomeLocal = "UNB_DarcyRibeiro";
        //document.getElementById("localidade").value = nomeLocal;

      } else {
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
        nomeLocal = "UNB_DarcyRibeiro";
        //document.getElementById("localidade").value = nomeLocal;
        // Inserindo o marcador
        marcador = new google.maps.Marker({
          position: local,
          map: map,
          icon: {
            //path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: .2,
            strokeColor: 'white',
            strokeWeight: .5,
            scale: 10
          }
        });
      }
    }else{
      document.getElementById("latitude").value = '';
      document.getElementById("longitude").value = '';
      //document.getElementById("localidade").value = nomeLocal;
    }

    //PRIMEIRA GRANDE AREA

    if (google.maps.geometry.poly.containsLocation(local, Area_PAT_PJC_IPol_CIC_Polygon) ?
        true:
        false){
      nomeLocal = "Area_PAT_PJC_IPol_CIC";
      //SUB AREA PAT
      if (google.maps.geometry.poly.containsLocation(local, SubArea_PAT_Polygon) ?
        true:
        false){
        nomeLocal = "SubArea_PAT";
        if(google.maps.geometry.poly.containsLocation(local, PAT_UNB_Polygon) ?
          true:
          false){
          nomeLocal = "PAT_UNB";

        }else if(google.maps.geometry.poly.containsLocation(local, Estac_PAT_Norte_Polygon) ?
          true:
          false){
          nomeLocal = "Estac_PAT_Norte";

        }else if(google.maps.geometry.poly.containsLocation(local, Estac_PAT_Oeste_Polygon) ?
          true:
          false){
          nomeLocal = "Estac_PAT_Oeste";

        }else if(google.maps.geometry.poly.containsLocation(local, Masc_Norte_Polygon) ?
          true:
          false){
          nomeLocal = "Masc_Norte";

        }else if(google.maps.geometry.poly.containsLocation(local, Acesso_PAT_PJC_Sul_Polygon) ?
          true:
          false){
          nomeLocal = "Acesso_PAT_PJC_Sul";

        }else if(google.maps.geometry.poly.containsLocation(local, Parada_PAT_PJC_Sul_Polygon) ?
          true:
          false){
          nomeLocal = "Parada_PAT_PJC_Sul";

        }
      //SUB AREA PJC
      }else if(google.maps.geometry.poly.containsLocation(local, SubArea_PJC_Polygon) ?
        true:
        false){
        nomeLocal = "SubArea_PJC";
        if(google.maps.geometry.poly.containsLocation(local, PJC_UnB_Polygon) ?
          true:
          false){
          nomeLocal = "PJC_UnB";

        }else if(google.maps.geometry.poly.containsLocation(local, Estac_PJC_Sul_Polygon) ?
          true:
          false){
          nomeLocal = "Estac_PJC_Sul";

        }else if(google.maps.geometry.poly.containsLocation(local, Estac_PAT_PJC_Polygon) ?
          true:
          false){
          nomeLocal = "Estac_PAT_PJC";

        }else if(google.maps.geometry.poly.containsLocation(local, Estac_PJC_IPol_IRel_Polygon) ?
          true:
          false){
          nomeLocal = "Estac_PJC_IPol_IRel";

        }else if(google.maps.geometry.poly.containsLocation(local, Frente_PJC_Polygon) ?
          true:
          false){
          nomeLocal = "Frente_PJC";

        }else if(google.maps.geometry.poly.containsLocation(local, Area_PAT_PJC_IPol_CIC_Polygon) ?
          true:
          false){
          nomeLocal = "Area_PAT_PJC_IPol_CIC";

        }
      //SUB AREA IPOL/IREL/CIC/EST
      }else if(google.maps.geometry.poly.containsLocation(local, SubArea_IPol_IRel_CIC_Est_Polygon) ?
        true:
        false){
        nomeLocal = "SubArea_IPol_IRel_CIC_Est";
        if(google.maps.geometry.poly.containsLocation(local, IPol_IRel_UnB_Polygon) ?
          true:
          false){
          nomeLocal = "IPol_IRel_UnB";

        }else if(google.maps.geometry.poly.containsLocation(local, CIC_Est_UnB_Polygon) ?
          true:
          false){
          nomeLocal = "CIC_Est_UnB";

        }else if(google.maps.geometry.poly.containsLocation(local, Estac_Acesso_CIC_Est_Polygon) ?
          true:
          false){
          nomeLocal = "Estac_Acesso_CIC_Est";

        }
      }

    //SEGUNDA GRANDE AREA
    }else if(google.maps.geometry.poly.containsLocation(local, SGs_e_Artes_e_FT_Polygon) ?
        true:
        false){
      nomeLocal = "SGs_e_Artes_e_FT";
      /*if(google.maps.geometry.poly.containsLocation(local, SGs_e_Artes_Sub_Area_Faculdade_de_Tecnologia_Polygon) ?
          true:
          false){
          nomeLocal = "SGs_e_Artes_Sub_Area_Faculdade_de_Tecnologia"

      }else if(google.maps.geometry.poly.containsLocation(local, SGs_e_Artes_Sub_Musica_Polygon) ?
          true:
          false){
          nomeLocal = "SGs_e_Artes_Sub_Musica";

      }else if(google.maps.geometry.poly.containsLocation(local, ASGs_e_Artes_Sub_Artes_Polygon) ?
          true:
          false){
          nomeLocal = "ASGs_e_Artes_Sub_Artes";

      }else if(google.maps.geometry.poly.containsLocation(local, SGs_e_Artes_Sub_Engenharias_Polygon) ?
          true:
          false){
          nomeLocal = "SGs_e_Artes_Sub_Engenharias";

      }else if(google.maps.geometry.poly.containsLocation(local, SGs_e_Artes_Sub_Complementares_Polygon) ?
          true:
          false){
          nomeLocal = "SGs_e_Artes_Sub_Complementares";

      }else */if(google.maps.geometry.poly.containsLocation(local, Estacionamento_menor_FT_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_menor_FT";

      }else if(google.maps.geometry.poly.containsLocation(local, UnB_Lab_de_Energia_Polygon) ?
          true:
          false){
          nomeLocal = "UnB_Lab_de_Energia";

      }else if(google.maps.geometry.poly.containsLocation(local, Estacionamento_Principal_FT_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_Principal_FT";

      }else if(google.maps.geometry.poly.containsLocation(local, Lab_de_Hidraulica_e_Estrut_Polygon) ?
          true:
          false){
          nomeLocal = "Lab_de_Hidraulica_e_Estrut";

      }else if(google.maps.geometry.poly.containsLocation(local, Passagem_Pedestres_FT_Polygon) ?
          true:
          false){
          nomeLocal = "Passagem_Pedestres_FT";

     }else if(google.maps.geometry.poly.containsLocation(local, SG_11_Polygon) ?
          true:
          false){
          nomeLocal = "SG_11";

     }else if(google.maps.geometry.poly.containsLocation(local, Faculdade_de_Tecnologia_Polygon) ?
          true:
          false){
          nomeLocal = "Faculdade_de_Tecnologia";

     }else if(google.maps.geometry.poly.containsLocation(local, Estacionamento_SG11_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_SG11";

     }else if(google.maps.geometry.poly.containsLocation(local, SG_12_Polygon) ?
          true:
          false){
          nomeLocal = "SG_12";

     }else if(google.maps.geometry.poly.containsLocation(local, Estacionamento_SG12_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_SG12";

     }else if(google.maps.geometry.poly.containsLocation(local, SG_2_Polygon) ?
          true:
          false){
          nomeLocal = "SG_2";

     }else if(google.maps.geometry.poly.containsLocation(local, Auditorio_de_Musica_Polygon) ?
          true:
          false){
          nomeLocal = "Auditorio_de_Musica";

     }else if(google.maps.geometry.poly.containsLocation(local, Estacionamento_SG2_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_SG2";

     }else if(google.maps.geometry.poly.containsLocation(local, SG_8_Polygon) ?
          true:
          false){
          nomeLocal = "SG_8";

     }else if(google.maps.geometry.poly.containsLocation(local, SG_10_Polygon) ?
          true:
          false){
          nomeLocal = "SG_10";

     }else if(google.maps.geometry.poly.containsLocation(local, Estacionamento_SG10_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_SG10";

     }else if(google.maps.geometry.poly.containsLocation(local, SG_9_Polygon) ?
          true:
          false){
          nomeLocal = "SG_9";

     }else if(google.maps.geometry.poly.containsLocation(local, Estacionamento_SG9_Polygon) ?
          true:
          false){
          nomeLocal = "Estacionamento_SG9";

     }else if(google.maps.geometry.poly.containsLocation(local, Observatorio_Sismologico_Polygon) ?
          true:
          false){
          nomeLocal = "Observatorio_Sismologico";

     }else if(google.maps.geometry.poly.containsLocation(local, APOSFUB_Polygon) ?
          true:
          false){
          nomeLocal = "APOSFUB";

     }else if(google.maps.geometry.poly.containsLocation(local, Restaurante_ADUnB_Polygon) ?
          true:
          false){
          nomeLocal = "Restaurante_ADUnB";

     }else if(google.maps.geometry.poly.containsLocation(local, Concha_Acustica_Polygon) ?
          true:
          false){
          nomeLocal = "Concha_Acustica";

     }else if(google.maps.geometry.poly.containsLocation(local, Departamento_de_Artes_Cenicas_Polygon) ?
          true:
          false){
          nomeLocal = "Departamento_de_Artes_Cenicas";

     }else if(google.maps.geometry.poly.containsLocation(local, Instituto_de_Artes_Polygon) ?
          true:
          false){
          nomeLocal = "Instituto_de_Artes";
     }
    }
    document.getElementById("localidade").value = nomeLocal;
    document.getElementById("exibe_localidade").innerHTML = nomeLocal;
  });
}
