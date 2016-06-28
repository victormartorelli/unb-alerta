function getIdLocal(local){    
  
  var Campus_DarcyRibeiro = [
  //Campus Darcy Ribeiro - UnB
   new google.maps.LatLng(-15.7837569,-47.8737724),
   new google.maps.LatLng(-15.7751772,-47.8648728),
   new google.maps.LatLng(-15.7629316,-47.8621101),
   new google.maps.LatLng(-15.7665842,-47.8578897),
   new google.maps.LatLng(-15.766006,-47.8566452),
   new google.maps.LatLng(-15.7587576,-47.8556581),
   new google.maps.LatLng(-15.758613,-47.8629752),
   new google.maps.LatLng(-15.7598624,-47.8645416),
   new google.maps.LatLng(-15.7455636,-47.8792977),
   new google.maps.LatLng(-15.7386191,-47.8826612),
   new google.maps.LatLng(-15.7377672,-47.8799576),
   new google.maps.LatLng(-15.7370133,-47.8801292),
   new google.maps.LatLng(-15.7349583,-47.8820926),
   new google.maps.LatLng(-15.7341993,-47.8836697),
   new google.maps.LatLng(-15.735485,-47.8856063),
   new google.maps.LatLng(-15.7687717,-47.8752976),
   new google.maps.LatLng(-15.7837569,-47.8737724)];
  
  //Parte 1
  var Area_ICC = [
  //�rea Instituto Central de Ci�ncias - Universidade de Bras�lia
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7618578,-47.8725493),
   new google.maps.LatLng(-15.7624154,-47.8723133),
   new google.maps.LatLng(-15.7630865,-47.8718948),
   new google.maps.LatLng(-15.764496,-47.8709319),
   new google.maps.LatLng(-15.7681588,-47.8682873),
   new google.maps.LatLng(-15.7651851,-47.8660664),
   new google.maps.LatLng(-15.763968,-47.8683182),
   new google.maps.LatLng(-15.7623793,-47.8695829),
   new google.maps.LatLng(-15.7598908,-47.8700065),
   new google.maps.LatLng(-15.760673,-47.8729195)];
  
  var SubArea_ICC_Norte = [
  //Sub-�rea ICC Norte
   new google.maps.LatLng(-15.7598908,-47.8700065),
   new google.maps.LatLng(-15.7607736,-47.8728497),
   new google.maps.LatLng(-15.7618578,-47.8725493),
   new google.maps.LatLng(-15.7624154,-47.8723133),
   new google.maps.LatLng(-15.7630091,-47.8719592),
   new google.maps.LatLng(-15.7626064,-47.8704197),
   new google.maps.LatLng(-15.7624773,-47.8696659),
   new google.maps.LatLng(-15.7623482,-47.8696015),
   new google.maps.LatLng(-15.7598908,-47.8700065)];
  
  var ICC_Norte = [
  //Ala Norte do ICC
   new google.maps.LatLng(-15.7602161,-47.8710473),
   new google.maps.LatLng(-15.7626064,-47.8704197),
   new google.maps.LatLng(-15.7624773,-47.8696659),
   new google.maps.LatLng(-15.7600096,-47.870366),
   new google.maps.LatLng(-15.7602161,-47.8710473)];
  
  var P_Onibus_ICC_Norte = [
  //Parada de �nibus ICC Norte
   new google.maps.LatLng(-15.7598908,-47.8700065),
   new google.maps.LatLng(-15.7600096,-47.870366),
   new google.maps.LatLng(-15.7601902,-47.870315),
   new google.maps.LatLng(-15.7601128,-47.8699824),
   new google.maps.LatLng(-15.7598908,-47.8700065)];
  
  var Estac_ICC_Norte = [
  //Estacionamento ICC Norte - UnB
   new google.maps.LatLng(-15.7602161,-47.8710473),
   new google.maps.LatLng(-15.760691,-47.8727746),
   new google.maps.LatLng(-15.7607736,-47.8728497),
   new google.maps.LatLng(-15.7618578,-47.8725493),
   new google.maps.LatLng(-15.7624154,-47.8723133),
   new google.maps.LatLng(-15.7630091,-47.8719592),
   new google.maps.LatLng(-15.7626064,-47.8704197),
   new google.maps.LatLng(-15.7602161,-47.8710473)];
  
  var SubArea_ICC_Centro_RU = [
  //Sub-�rea de circula��o do ICC e RU - UnB
   new google.maps.LatLng(-15.7626064,-47.8704197),
   new google.maps.LatLng(-15.7630091,-47.8719592),
   new google.maps.LatLng(-15.7657401,-47.8699851),
   new google.maps.LatLng(-15.7646044,-47.8690302),
   new google.maps.LatLng(-15.7640546,-47.8685233),
   new google.maps.LatLng(-15.763968,-47.8683182),
   new google.maps.LatLng(-15.7623482,-47.8696015),
   new google.maps.LatLng(-15.7624773,-47.8696659),
   new google.maps.LatLng(-15.7626064,-47.8704197)];
  
  var ICC_Centro = [
  //Ala Central do ICC
   new google.maps.LatLng(-15.7626064,-47.8704197),
   new google.maps.LatLng(-15.7632827,-47.870146),
   new google.maps.LatLng(-15.7639229,-47.8697276),
   new google.maps.LatLng(-15.7646044,-47.8690302),
   new google.maps.LatLng(-15.7640546,-47.8685233),
   new google.maps.LatLng(-15.7638713,-47.8687835),
   new google.maps.LatLng(-15.7634789,-47.8691375),
   new google.maps.LatLng(-15.7624773,-47.8696659),
   new google.maps.LatLng(-15.7626064,-47.8704197)];
  
  var MASC_Centro = [
  //M�dulo de Atividades de Servi�o e Com�rcio Centro - UnB
   new google.maps.LatLng(-15.7629884,-47.8715301),
   new google.maps.LatLng(-15.7633808,-47.8712404),
   new google.maps.LatLng(-15.7632001,-47.8709507),
   new google.maps.LatLng(-15.7628336,-47.8711814),
   new google.maps.LatLng(-15.7629884,-47.8715301)];
  
  var P_Onibus_ICC_Centro_Norte = [
  //Parada de �nibus ICC Centro Norte
   new google.maps.LatLng(-15.7630865,-47.8718948),
   new google.maps.LatLng(-15.7633911,-47.8716642),
   new google.maps.LatLng(-15.7632982,-47.8715408),
   new google.maps.LatLng(-15.7630401,-47.8717071),
   new google.maps.LatLng(-15.7630865,-47.8718948)];
  
  var RU = [
  //Restaurante Universit�rio - UnB
   new google.maps.LatLng(-15.7648676,-47.8706074),
   new google.maps.LatLng(-15.7643204,-47.8698617),
   new google.maps.LatLng(-15.7636596,-47.8703821),
   new google.maps.LatLng(-15.7641294,-47.8711116),
   new google.maps.LatLng(-15.7648676,-47.8706074)];
  
  var Centro_Convivencia = [
  //Centro de Conviv�ncia
   new google.maps.LatLng(-15.7647024,-47.8702265),
   new google.maps.LatLng(-15.7649089,-47.8705698),
   new google.maps.LatLng(-15.7653478,-47.8702426),
   new google.maps.LatLng(-15.7651051,-47.8699207),
   new google.maps.LatLng(-15.7647024,-47.8702265)];
  
  var SubArea_ICC_Sul = [
  //Sub-�rea ICC Sul
   new google.maps.LatLng(-15.7640546,-47.8685233),
   new google.maps.LatLng(-15.7646044,-47.8690302),
   new google.maps.LatLng(-15.7657401,-47.8699851),
   new google.maps.LatLng(-15.7681227,-47.8682819),
   new google.maps.LatLng(-15.7651851,-47.8660664),
   new google.maps.LatLng(-15.763968,-47.8683182),
   new google.maps.LatLng(-15.7640546,-47.8685233)];
  
  var ICC_Sul = [
  //Ala Sul do ICC
   new google.maps.LatLng(-15.7646044,-47.8690302),
   new google.maps.LatLng(-15.7661015,-47.8667933),
   new google.maps.LatLng(-15.7655426,-47.8663749),
   new google.maps.LatLng(-15.7640546,-47.8685233),
   new google.maps.LatLng(-15.7646044,-47.8690302)];
  
  var Estac_ICC_Sul = [
  //Estacionamento ICC Sul - UnB
   new google.maps.LatLng(-15.7646044,-47.8690302),
   new google.maps.LatLng(-15.7654742,-47.8697544),
   new google.maps.LatLng(-15.7677045,-47.86829),
   new google.maps.LatLng(-15.7663441,-47.8671487),
   new google.maps.LatLng(-15.7661041,-47.8668174),
   new google.maps.LatLng(-15.7646044,-47.8690302)];
  
  var P_Onibus_ICC_Sul = [
  //Parada de �nibus ICC Sul
   new google.maps.LatLng(-15.7651851,-47.8660664),
   new google.maps.LatLng(-15.7650664,-47.8663346),
   new google.maps.LatLng(-15.7654097,-47.8665519),
   new google.maps.LatLng(-15.7655569,-47.8663534),
   new google.maps.LatLng(-15.7651851,-47.8660664)];
  
  var P_Onibus_ICC_Centro_Sul = [
  //Parada de �nibus ICC Centro/Sul
   new google.maps.LatLng(-15.7666384,-47.8693333),
   new google.maps.LatLng(-15.76645,-47.8692207),
   new google.maps.LatLng(-15.7654742,-47.8697544),
   new google.maps.LatLng(-15.7657401,-47.8699851),
   new google.maps.LatLng(-15.7666384,-47.8693333)];
  
  var P_Onibus_ICC_Sul_FS = [
  //Parada de �nibus ICC Sul/FS
   new google.maps.LatLng(-15.7670308,-47.8674638),
   new google.maps.LatLng(-15.7669147,-47.8676274),
   new google.maps.LatLng(-15.7671547,-47.8678313),
   new google.maps.LatLng(-15.7673251,-47.867673),
   new google.maps.LatLng(-15.7670308,-47.8674638)];
  
  var Area_BCE_Reitoria = [
  //�rea BCE, Reitoria e adjac�ncias
   new google.maps.LatLng(-15.7598908,-47.8700065),
   new google.maps.LatLng(-15.7623793,-47.8695829),
   new google.maps.LatLng(-15.763968,-47.8683182),
   new google.maps.LatLng(-15.7651851,-47.8660664),
   new google.maps.LatLng(-15.7633704,-47.8647602),
   new google.maps.LatLng(-15.7634324,-47.8628236),
   new google.maps.LatLng(-15.7616667,-47.8635103),
   new google.maps.LatLng(-15.7584968,-47.8666162),
   new google.maps.LatLng(-15.7592145,-47.8677964),
   new google.maps.LatLng(-15.7598908,-47.8700065)];
  
  var SubAreaBCE = [
  //Sub-�rea BCE
   new google.maps.LatLng(-15.7617855,-47.8682685),
   new google.maps.LatLng(-15.7613751,-47.8676141),
   new google.maps.LatLng(-15.7618217,-47.8673002),
   new google.maps.LatLng(-15.7611008,-47.8661951),
   new google.maps.LatLng(-15.7602418,-47.8667396),
   new google.maps.LatLng(-15.7592145,-47.8677964),
   new google.maps.LatLng(-15.7595747,-47.869002),
   new google.maps.LatLng(-15.7609905,-47.8686789),
   new google.maps.LatLng(-15.7617855,-47.8682685)];
  
  var BCE = [
  //Biblioteca Central Estudantil - UnB
   new google.maps.LatLng(-15.7609905,-47.8686789),
   new google.maps.LatLng(-15.7616926,-47.8682283),
   new google.maps.LatLng(-15.7608459,-47.8667933),
   new google.maps.LatLng(-15.7600921,-47.8673243),
   new google.maps.LatLng(-15.7609905,-47.8686789)];
  
  var Estac_BCE = [
  //Estacionamento BCE - UnB
   new google.maps.LatLng(-15.7613777,-47.8675818),
   new google.maps.LatLng(-15.7618062,-47.8672814),
   new google.maps.LatLng(-15.7612177,-47.8663802),
   new google.maps.LatLng(-15.7607814,-47.8666967),
   new google.maps.LatLng(-15.7613777,-47.8675818)];
  
  var Estac_BCE_Serv = [
  //Estacionamento para Servidores BCE
   new google.maps.LatLng(-15.7603916,-47.8686467),
   new google.maps.LatLng(-15.7607401,-47.8684375),
   new google.maps.LatLng(-15.7599631,-47.8673083),
   new google.maps.LatLng(-15.759785,-47.8674263),
   new google.maps.LatLng(-15.7603916,-47.8686467)];
  
  var P_Onibus_BCE = [
  //Parada de �nibus BCE
   new google.maps.LatLng(-15.7605,-47.8670454),
   new google.maps.LatLng(-15.7608459,-47.8667933),
   new google.maps.LatLng(-15.7606575,-47.8664822),
   new google.maps.LatLng(-15.7602935,-47.8667074),
   new google.maps.LatLng(-15.7605,-47.8670454)];
  
  var SubAreaReitoria = [
  //Sub-�rea Reitoria
   new google.maps.LatLng(-15.7626193,-47.8675765),
   new google.maps.LatLng(-15.7649012,-47.8658867),
   new google.maps.LatLng(-15.7633704,-47.8647602),
   new google.maps.LatLng(-15.7611008,-47.8661951),
   new google.maps.LatLng(-15.7618217,-47.8673002),
   new google.maps.LatLng(-15.7622269,-47.8670079),
   new google.maps.LatLng(-15.7626193,-47.8675765)];
  
  var Estac_BCE_Reitoria = [
  //Estacionamento BCE e Reitoria - UnB
   new google.maps.LatLng(-15.7612177,-47.8663802),
   new google.maps.LatLng(-15.7618062,-47.8672814),
   new google.maps.LatLng(-15.7626813,-47.8666806),
   new google.maps.LatLng(-15.7620746,-47.8657687),
   new google.maps.LatLng(-15.7612177,-47.8663802)];
  
  var Reitoria_UnB = [
  //Reitoria da Universidade de Bras�lia
   new google.maps.LatLng(-15.7623044,-47.8669864),
   new google.maps.LatLng(-15.7626761,-47.8674719),
   new google.maps.LatLng(-15.7634557,-47.8669193),
   new google.maps.LatLng(-15.7631046,-47.8663936),
   new google.maps.LatLng(-15.7623044,-47.8669864)];
  
  var Estac_Reitoria = [
  //Estacionamento Reitoria - UnB
   new google.maps.LatLng(-15.7634557,-47.8669193),
   new google.maps.LatLng(-15.7639513,-47.8665626),
   new google.maps.LatLng(-15.7634866,-47.865884),
   new google.maps.LatLng(-15.7630039,-47.8662569),
   new google.maps.LatLng(-15.7634557,-47.8669193)];
  
  var P_Onibus_Reitoria = [
  //Paradas de �nibus Reitoria
   new google.maps.LatLng(-15.7621882,-47.8657593),
   new google.maps.LatLng(-15.7624515,-47.865589),
   new google.maps.LatLng(-15.7623405,-47.8654146),
   new google.maps.LatLng(-15.7620798,-47.8655769),
   new google.maps.LatLng(-15.7621882,-47.8657593)];
  
  var Memorial_Darcy_Ribeiro = [
  //Memorial Darcy Ribeiro - UnB
   new google.maps.LatLng(-15.7634866,-47.865884),
   new google.maps.LatLng(-15.7639513,-47.8665626),
   new google.maps.LatLng(-15.7643991,-47.8662341),
   new google.maps.LatLng(-15.764354,-47.8655005),
   new google.maps.LatLng(-15.763928,-47.8651893),
   new google.maps.LatLng(-15.7634866,-47.865884)];
  
  var SubArea_Circulacao_ICC_BCE_Reitoria = [
  //Trajeto de Pedestres e Ciclistas ICC, BCE e Reitoria
   new google.maps.LatLng(-15.7617855,-47.8682685),
   new google.maps.LatLng(-15.7609905,-47.8686789),
   new google.maps.LatLng(-15.7595747,-47.869002),
   new google.maps.LatLng(-15.7598908,-47.8700065),
   new google.maps.LatLng(-15.7623482,-47.8696015),
   new google.maps.LatLng(-15.763968,-47.8683182),
   new google.maps.LatLng(-15.7651851,-47.8660664),
   new google.maps.LatLng(-15.7649012,-47.8658867),
   new google.maps.LatLng(-15.7626193,-47.8675765),
   new google.maps.LatLng(-15.7622269,-47.8670079),
   new google.maps.LatLng(-15.7613751,-47.8676141),
   new google.maps.LatLng(-15.7617855,-47.8682685)];
  
  var TeatroArena_Honestino_Gimaraes = [
  //Teatro Arena Honestino Guimar�es
   new google.maps.LatLng(-15.7616152,-47.8696096),
   new google.maps.LatLng(-15.7620953,-47.8695452),
   new google.maps.LatLng(-15.7616823,-47.8685313),
   new google.maps.LatLng(-15.7614242,-47.8689873),
   new google.maps.LatLng(-15.7616152,-47.8696096)];
  
  var Trajetos_Centrais_BCE_Reitoria = [
  //Trajetos Centrais BCE Reitoria
   new google.maps.LatLng(-15.7621572,-47.8695345),
   new google.maps.LatLng(-15.7623793,-47.8695829),
   new google.maps.LatLng(-15.763968,-47.8683182),
   new google.maps.LatLng(-15.7639487,-47.8681773),
   new google.maps.LatLng(-15.7632156,-47.8672654),
   new google.maps.LatLng(-15.76264,-47.8676918),
   new google.maps.LatLng(-15.7622282,-47.867036),
   new google.maps.LatLng(-15.7613751,-47.8676141),
   new google.maps.LatLng(-15.7618449,-47.8682953),
   new google.maps.LatLng(-15.7616616,-47.8683597),
   new google.maps.LatLng(-15.7621572,-47.8695345)];
  
  var Area_PAT_PJC_IPol_CIC = [
  //�rea PAT, PJC, IPol/IRel/CIC/Est
   new google.maps.LatLng(-15.7601211,-47.8708817),
   new google.maps.LatLng(-15.7598856,-47.8700065),
   new google.maps.LatLng(-15.7592093,-47.8677964),
   new google.maps.LatLng(-15.7584968,-47.8666162),
   new google.maps.LatLng(-15.7565556,-47.8685743),
   new google.maps.LatLng(-15.7542943,-47.8708166),
   new google.maps.LatLng(-15.7551461,-47.87175),
   new google.maps.LatLng(-15.7557811,-47.8725547),
   new google.maps.LatLng(-15.7577172,-47.8715998),
   new google.maps.LatLng(-15.7601211,-47.8708817)];
  
  var SubArea_PAT = [
  //Sub-�rea PAT
   new google.maps.LatLng(-15.7577637,-47.871589),
   new google.maps.LatLng(-15.7601263,-47.8708817),
   new google.maps.LatLng(-15.7599566,-47.8702613),
   new google.maps.LatLng(-15.7595397,-47.8703901),
   new google.maps.LatLng(-15.7582955,-47.8707469),
   new google.maps.LatLng(-15.7582696,-47.8706423),
   new google.maps.LatLng(-15.7575553,-47.8708515),
   new google.maps.LatLng(-15.7577637,-47.871589)];
  
  var PAT_UnB = [
  //Pavilh�o An�sio Teixeira - UnB
   new google.maps.LatLng(-15.7582955,-47.8707469),
   new google.maps.LatLng(-15.7584168,-47.8711814),
   new google.maps.LatLng(-15.7596559,-47.8708166),
   new google.maps.LatLng(-15.7595397,-47.8703901),
   new google.maps.LatLng(-15.7582955,-47.8707469)];
  
  var Estac_PAT_Norte = [
  //Estacionamento Norte do PAT
   new google.maps.LatLng(-15.7583213,-47.8714221),
   new google.maps.LatLng(-15.7584736,-47.8713799),
   new google.maps.LatLng(-15.7582696,-47.8706423),
   new google.maps.LatLng(-15.7581206,-47.8706851),
   new google.maps.LatLng(-15.7583213,-47.8714221)];
  
  var Estac_PAT_Oeste = [
  //Estacionamento Oeste PAT
   new google.maps.LatLng(-15.7584168,-47.8711814),
   new google.maps.LatLng(-15.7584736,-47.8713799),
   new google.maps.LatLng(-15.7597126,-47.8710071),
   new google.maps.LatLng(-15.7596559,-47.8708166),
   new google.maps.LatLng(-15.7584168,-47.8711814)];
  
  var Masc_Norte = [
  //M�dulo de Atividades de Servi�o e Com�rcio Norte - UnB
   new google.maps.LatLng(-15.7577637,-47.871589),
   new google.maps.LatLng(-15.7583213,-47.8714221),
   new google.maps.LatLng(-15.7581206,-47.8706851),
   new google.maps.LatLng(-15.7575643,-47.8708515),
   new google.maps.LatLng(-15.7577637,-47.871589)];
  
  var Acesso_PAT_PJC_Sul = [
  //Acesso PAT Sul
   new google.maps.LatLng(-15.7597126,-47.8710071),
   new google.maps.LatLng(-15.7599115,-47.87094),
   new google.maps.LatLng(-15.7598005,-47.8704894),
   new google.maps.LatLng(-15.7600018,-47.8704357),
   new google.maps.LatLng(-15.7599566,-47.8702613),
   new google.maps.LatLng(-15.7595397,-47.8703901),
   new google.maps.LatLng(-15.7597126,-47.8710071)];
  
  var P_Onibus_PAT_PJC = [
  //Parada de Onibus PAT/PJC
   new google.maps.LatLng(-15.7600018,-47.8704357),
   new google.maps.LatLng(-15.7598005,-47.8704894),
   new google.maps.LatLng(-15.7599115,-47.87094),
   new google.maps.LatLng(-15.7601263,-47.8708817),
   new google.maps.LatLng(-15.7600018,-47.8704357)];
  
  var SubArea_PJC = [
  //Sub-�rea PJC
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
  
  var PJC_UnB = [
  //Pavilh�o Jo�o Calmon - UnB
   new google.maps.LatLng(-15.7578986,-47.8706388),
   new google.maps.LatLng(-15.7591474,-47.8702748),
   new google.maps.LatLng(-15.7590235,-47.8698242),
   new google.maps.LatLng(-15.7577748,-47.8701889),
   new google.maps.LatLng(-15.7578986,-47.8706388)];
  
  var Estac_PJC_Sul = [
  //Estacionamento Sul do Pavilh�o Jo�o Calmon
   new google.maps.LatLng(-15.7591758,-47.8703687),
   new google.maps.LatLng(-15.7596352,-47.8702506),
   new google.maps.LatLng(-15.7594352,-47.8695043),
   new google.maps.LatLng(-15.7589718,-47.8696257),
   new google.maps.LatLng(-15.7591758,-47.8703687)];
  
  var Estac_PAT_PJC = [
  //Estacionamento PAT PJC
   new google.maps.LatLng(-15.7579257,-47.8707381),
   new google.maps.LatLng(-15.7582696,-47.8706423),
   new google.maps.LatLng(-15.7582955,-47.8707469),
   new google.maps.LatLng(-15.759663,-47.8703505),
   new google.maps.LatLng(-15.7596352,-47.8702506),
   new google.maps.LatLng(-15.7591758,-47.8703687),
   new google.maps.LatLng(-15.7591474,-47.8702748),
   new google.maps.LatLng(-15.7578986,-47.8706388),
   new google.maps.LatLng(-15.7579257,-47.8707381)];
  
  var Estac_PJC_PAT_Norte = [
  //Estacionamento Norte PJC e PAT - UnB
   new google.maps.LatLng(-15.757432,-47.8701675),
   new google.maps.LatLng(-15.757423,-47.8702406),
   new google.maps.LatLng(-15.7574249,-47.8703392),
   new google.maps.LatLng(-15.7575553,-47.8708515),
   new google.maps.LatLng(-15.7579257,-47.8707381),
   new google.maps.LatLng(-15.757745,-47.8700803),
   new google.maps.LatLng(-15.757432,-47.8701675)];
  
  var Estac_PJC_IPol_IRel = [
  //Estacionamento PJC, IPol e IRel
   new google.maps.LatLng(-15.7590235,-47.8698242),
   new google.maps.LatLng(-15.7589718,-47.8696257),
   new google.maps.LatLng(-15.7574895,-47.8700514),
   new google.maps.LatLng(-15.7574807,-47.8700297),
   new google.maps.LatLng(-15.7574512,-47.8700778),
   new google.maps.LatLng(-15.757432,-47.8701675),
   new google.maps.LatLng(-15.757745,-47.8700803),
   new google.maps.LatLng(-15.7577748,-47.8701889),
   new google.maps.LatLng(-15.7590235,-47.8698242)];
  
  var Frente_PJC = [
  //Gramado em frente ao PJC
   new google.maps.LatLng(-15.759663,-47.8703505),
   new google.maps.LatLng(-15.7599566,-47.8702613),
   new google.maps.LatLng(-15.7597089,-47.8694258),
   new google.maps.LatLng(-15.7594352,-47.8695043),
   new google.maps.LatLng(-15.759663,-47.8703505)];
  
  var SubArea_IPol_IRel_CIC_Est = [
  //Sub-�rea IPol/IRel/CIC/Est
   new google.maps.LatLng(-15.7574807,-47.8700297),
   new google.maps.LatLng(-15.7574895,-47.8700514),
   new google.maps.LatLng(-15.7597089,-47.8694258),
   new google.maps.LatLng(-15.7592145,-47.8677964),
   new google.maps.LatLng(-15.7589137,-47.8681076),
   new google.maps.LatLng(-15.7575985,-47.8694178),
   new google.maps.LatLng(-15.7576101,-47.8694701),
   new google.maps.LatLng(-15.7575908,-47.8695211),
   new google.maps.LatLng(-15.7575624,-47.869556),
   new google.maps.LatLng(-15.757565,-47.8698631),
   new google.maps.LatLng(-15.7574807,-47.8700297)];
  
  var IPol_IRel_UnB = [
  //Institutos de Ci�ncia Pol�tica e Rela��es Internacionais - UnB
   new google.maps.LatLng(-15.7585846,-47.8692394),
   new google.maps.LatLng(-15.757725,-47.8694621),
   new google.maps.LatLng(-15.7578489,-47.8699449),
   new google.maps.LatLng(-15.7587085,-47.8697008),
   new google.maps.LatLng(-15.7585846,-47.8692394)];
  
  var CIC_Est_UnB = [
  //Pr�dio de Ci�ncia da Computa��o e Estat�stica �- UnB
   new google.maps.LatLng(-15.7591035,-47.8690892),
   new google.maps.LatLng(-15.7590054,-47.8686762),
   new google.maps.LatLng(-15.758249,-47.8688693),
   new google.maps.LatLng(-15.7583549,-47.8693038),
   new google.maps.LatLng(-15.7591035,-47.8690892)];
  
  var Estac_Acesso_CIC_Est = [
  //Estacionamento e acesso ao CIC/Est
   new google.maps.LatLng(-15.7585846,-47.8692394),
   new google.maps.LatLng(-15.7587085,-47.8697008),
   new google.maps.LatLng(-15.7594352,-47.8695043),
   new google.maps.LatLng(-15.75931,-47.8690383),
   new google.maps.LatLng(-15.7585846,-47.8692394)];
  
  var SubArea_Centro_Comunitario = [
  //�rea do Centro Comunit�rio
   new google.maps.LatLng(-15.7574953,-47.8694648),
   new google.maps.LatLng(-15.7592145,-47.8677964),
   new google.maps.LatLng(-15.7584968,-47.8666162),
   new google.maps.LatLng(-15.7565195,-47.8685796),
   new google.maps.LatLng(-15.7574953,-47.8694648)];
  
  var AthosBulcao = [
  //Centro Comunit�rio Athos Bulc�o - UnB
   new google.maps.LatLng(-15.7579031,-47.8689444),
   new google.maps.LatLng(-15.7585485,-47.8683061),
   new google.maps.LatLng(-15.7581355,-47.867893),
   new google.maps.LatLng(-15.7575262,-47.8685045),
   new google.maps.LatLng(-15.7579031,-47.8689444)];
  
  var Estac_Centro_Comunitario = [
  //Estacionamento Centro Comunit�rio Athos Bulc�o
   new google.maps.LatLng(-15.7565195,-47.8685796),
   new google.maps.LatLng(-15.7570616,-47.8690382),
   new google.maps.LatLng(-15.7575675,-47.8685528),
   new google.maps.LatLng(-15.7575262,-47.8685045),
   new google.maps.LatLng(-15.7581355,-47.867893),
   new google.maps.LatLng(-15.7582206,-47.8679788),
   new google.maps.LatLng(-15.7589073,-47.8672815),
   new google.maps.LatLng(-15.7584968,-47.8666162),
   new google.maps.LatLng(-15.7565195,-47.8685796)];
  
  var SubArea_BAES_Almox = [
  //Sub-�rea BAES e Almoxarifado
   new google.maps.LatLng(-15.7542943,-47.8708166),
   new google.maps.LatLng(-15.7557811,-47.8725547),
   new google.maps.LatLng(-15.7577172,-47.8715998),
   new google.maps.LatLng(-15.7574204,-47.8703231),
   new google.maps.LatLng(-15.7575624,-47.869556),
   new google.maps.LatLng(-15.7565556,-47.8685743),
   new google.maps.LatLng(-15.7542943,-47.8708166)];
  
  var Almoxarifado = [
  //Almoxarifado
   new google.maps.LatLng(-15.7565711,-47.8702748), 
   new google.maps.LatLng(-15.7574178,-47.8695345), 
   new google.maps.LatLng(-15.756788,-47.8689551), 
   new google.maps.LatLng(-15.7560652,-47.8696847), 
   new google.maps.LatLng(-15.7565711,-47.8702748)];
  
  var Garagem_Oficina = [
  //Garagem e Oficina Mec�nica
   new google.maps.LatLng(-15.7564782,-47.8703177),
   new google.maps.LatLng(-15.7560032,-47.8697169),
   new google.maps.LatLng(-15.7552598,-47.8705645),
   new google.maps.LatLng(-15.7557141,-47.8711009),
   new google.maps.LatLng(-15.7564782,-47.8703177)];
  
  var BAES = [
  //Bloco de Salas de Aula Eudoro de Souza
   new google.maps.LatLng(-15.7566176,-47.870543),
   new google.maps.LatLng(-15.7567312,-47.8706879),
   new google.maps.LatLng(-15.757263,-47.870189),
   new google.maps.LatLng(-15.7571287,-47.8700441),
   new google.maps.LatLng(-15.7566176,-47.870543)];
  
  var BSAN = [
  //Bloco de Salas de Aula Norte
   new google.maps.LatLng(-15.7566951,-47.8717339),
   new google.maps.LatLng(-15.7576398,-47.8715247),
   new google.maps.LatLng(-15.757423,-47.870704),
   new google.maps.LatLng(-15.7564782,-47.87094),
   new google.maps.LatLng(-15.7566951,-47.8717339)];
  
  var Estac_BAES_BSAN = [
  //Estacionamento BAES e BSAN
   new google.maps.LatLng(-15.757423,-47.870704),
   new google.maps.LatLng(-15.7573197,-47.8701407),
   new google.maps.LatLng(-15.7564782,-47.87094),
   new google.maps.LatLng(-15.757423,-47.870704)];
  
  var Area_PRC_Colina_FACE = [
  //�rea PRC Colina FACE
   new google.maps.LatLng(-15.7567157,-47.8735042),
   new google.maps.LatLng(-15.7537677,-47.8756553),
   new google.maps.LatLng(-15.7542995,-47.8767872),
   new google.maps.LatLng(-15.7611557,-47.8746521),
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7601263,-47.8708817),
   new google.maps.LatLng(-15.7577224,-47.8715998),
   new google.maps.LatLng(-15.7563885,-47.8722543),
   new google.maps.LatLng(-15.7567157,-47.8735042)];
  
  var SubArea_FACE = [
  //Sub-�rea FACE ICS
   new google.maps.LatLng(-15.7601263,-47.8708817),
   new google.maps.LatLng(-15.7577224,-47.8715998),
   new google.maps.LatLng(-15.7563885,-47.8722543),
   new google.maps.LatLng(-15.7567157,-47.8735042),
   new google.maps.LatLng(-15.7581406,-47.8730965),
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7601263,-47.8708817)];
  
  var FACE = [
  //Faculdade de Economia e Administra��o
   new google.maps.LatLng(-15.7590932,-47.8711867),
   new google.maps.LatLng(-15.7577224,-47.8715998),
   new google.maps.LatLng(-15.7577999,-47.8720745),
   new google.maps.LatLng(-15.7579806,-47.8724903),
   new google.maps.LatLng(-15.7591577,-47.8721845),
   new google.maps.LatLng(-15.7590802,-47.8718466),
   new google.maps.LatLng(-15.7592196,-47.8717178),
   new google.maps.LatLng(-15.7590932,-47.8711867)];
  
  var FA = [
  //Faculdade de Direito
   new google.maps.LatLng(-15.7592196,-47.8717178),
   new google.maps.LatLng(-15.7590802,-47.8718466),
   new google.maps.LatLng(-15.7591577,-47.8721845),
   new google.maps.LatLng(-15.7591487,-47.8722529),
   new google.maps.LatLng(-15.7594081,-47.8726432),
   new google.maps.LatLng(-15.7600147,-47.8721496),
   new google.maps.LatLng(-15.7598882,-47.8716213),
   new google.maps.LatLng(-15.7592196,-47.8717178)];
  
  var Estac_FACE = [
  //Estacionamento Face
   new google.maps.LatLng(-15.7588118,-47.8730375),
   new google.maps.LatLng(-15.7586466,-47.8723562),
   new google.maps.LatLng(-15.7580477,-47.8725225),
   new google.maps.LatLng(-15.7581613,-47.8730643),
   new google.maps.LatLng(-15.7588118,-47.8730375)];
  
  var Estac_FA = [
  //Estacionamento FA
   new google.maps.LatLng(-15.7588531,-47.873016),
   new google.maps.LatLng(-15.7602883,-47.8729409),
   new google.maps.LatLng(-15.760278,-47.8726405),
   new google.maps.LatLng(-15.7588376,-47.8726727),
   new google.maps.LatLng(-15.7588531,-47.873016)];
  
  var Circulacao_Pedestres_FA = [
  //Circula��o de pedestres FA
   new google.maps.LatLng(-15.7597721,-47.8710043),
   new google.maps.LatLng(-15.7601025,-47.8724527),
   new google.maps.LatLng(-15.7603348,-47.8726566),
   new google.maps.LatLng(-15.7603245,-47.8729409),
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7601211,-47.8708817),
   new google.maps.LatLng(-15.7597721,-47.8710043)];
  
  var ICS = [
  //Instituto de Ci�ncias Sociais
   new google.maps.LatLng(-15.7571752,-47.8732949),
   new google.maps.LatLng(-15.758058,-47.8730428),
   new google.maps.LatLng(-15.7579599,-47.8725654),
   new google.maps.LatLng(-15.7570822,-47.8728336),
   new google.maps.LatLng(-15.7571752,-47.8732949)];
  
  var SubArea_PRC = [
  //Sub-�rea PRC/Colina
   new google.maps.LatLng(-15.7611557,-47.8746521),
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7581406,-47.8730965),
   new google.maps.LatLng(-15.7586259,-47.8753924),
   new google.maps.LatLng(-15.7611557,-47.8746521)];
  
  var PostoPetrobras = [
  //Posto Petrobr�s
   new google.maps.LatLng(-15.7604329,-47.8740674),
   new google.maps.LatLng(-15.7606342,-47.8747755),
   new google.maps.LatLng(-15.7610576,-47.8746361),
   new google.maps.LatLng(-15.7608459,-47.8739977),
   new google.maps.LatLng(-15.7604329,-47.8740674)];
  
  var P_Onibus_Posto = [
  //Parada de �nibus Posto
   new google.maps.LatLng(-15.7608782,-47.8740808),
   new google.maps.LatLng(-15.7609814,-47.874058),
   new google.maps.LatLng(-15.7608782,-47.8736919),
   new google.maps.LatLng(-15.7607685,-47.8737228),
   new google.maps.LatLng(-15.7608782,-47.8740808)];
  
  var PRC = [
  //Prefeitura do Campus
   new google.maps.LatLng(-15.7606342,-47.8747755),
   new google.maps.LatLng(-15.7604122,-47.8740084),
   new google.maps.LatLng(-15.7599786,-47.8740942),
   new google.maps.LatLng(-15.7602419,-47.8749043),
   new google.maps.LatLng(-15.7606342,-47.8747755)];
  
  var ASFUB = [
  //ASFUB
   new google.maps.LatLng(-15.7588169,-47.8731072), 
   new google.maps.LatLng(-15.7588428,-47.8736222), 
   new google.maps.LatLng(-15.7592351,-47.8736973), 
   new google.maps.LatLng(-15.7592661,-47.8731018), 
   new google.maps.LatLng(-15.7588169,-47.8731072)];
  
  var Colina_Bloco_A = [
  //Colina Bloco A
   new google.maps.LatLng(-15.7573972,-47.8737348),
   new google.maps.LatLng(-15.7572578,-47.8734559),
   new google.maps.LatLng(-15.7564885,-47.8739011),
   new google.maps.LatLng(-15.7566589,-47.8741854),
   new google.maps.LatLng(-15.7573972,-47.8737348)];
  
  var Colina_Bloco_B = [
  //Colina Bloco B
   new google.maps.LatLng(-15.75709,-47.873944),
   new google.maps.LatLng(-15.757392,-47.8740782),
   new google.maps.LatLng(-15.7580116,-47.873708),
   new google.maps.LatLng(-15.7578618,-47.8734344),
   new google.maps.LatLng(-15.75709,-47.873944)];
  
  var Colina_Bloco_C = [
  //Colina Bloco C
   new google.maps.LatLng(-15.7570151,-47.8740218),
   new google.maps.LatLng(-15.7565221,-47.8743356),
   new google.maps.LatLng(-15.7566821,-47.8745824),
   new google.maps.LatLng(-15.7572036,-47.8742149),
   new google.maps.LatLng(-15.7570151,-47.8740218)];
  
  var SubArea_Colina_Blocos_ABCDE = [
  //UnB Colina�Blocos A, B, C, D e E
   new google.maps.LatLng(-15.7586259,-47.8753924),
   new google.maps.LatLng(-15.7581406,-47.8730965),
   new google.maps.LatLng(-15.7567157,-47.8735042),
   new google.maps.LatLng(-15.7559929,-47.8740406),
   new google.maps.LatLng(-15.756664,-47.8747755),
   new google.maps.LatLng(-15.7586259,-47.8753924)];
  
  var Colina_Bloco_D = [
  //Colina Bloco D
   new google.maps.LatLng(-15.7570952,-47.8743088),
   new google.maps.LatLng(-15.7572862,-47.874577),
   new google.maps.LatLng(-15.7579883,-47.8740782),
   new google.maps.LatLng(-15.7578386,-47.8738475),
   new google.maps.LatLng(-15.7570952,-47.8743088)];
  
  var Colina_Bloco_E = [
  //Colina Bloco E
   new google.maps.LatLng(-15.7573042,-47.874679),
   new google.maps.LatLng(-15.7574927,-47.8749633),
   new google.maps.LatLng(-15.7584091,-47.8744805),
   new google.maps.LatLng(-15.7582284,-47.8740647),
   new google.maps.LatLng(-15.7573042,-47.874679)];
  
  var SubArea_Colina_Blocos_FGHIJ = [
  //Colina Blocos F, G, H, I e J
   new google.maps.LatLng(-15.7559929,-47.8740406),
   new google.maps.LatLng(-15.7537677,-47.8756553),
   new google.maps.LatLng(-15.7542892,-47.8767765),
   new google.maps.LatLng(-15.7586259,-47.8753924),
   new google.maps.LatLng(-15.756664,-47.8747755),
   new google.maps.LatLng(-15.7559929,-47.8740406)];
  
  var Colina_Bloco_F = [
  //Colina Bloco F
   new google.maps.LatLng(-15.7566047,-47.8750357),
   new google.maps.LatLng(-15.7559025,-47.8755131),
   new google.maps.LatLng(-15.7561452,-47.875886),
   new google.maps.LatLng(-15.7567673,-47.8753817),
   new google.maps.LatLng(-15.7566047,-47.8750357)];
  
  var Colina_Bloco_G = [
  //Colina Bloco G
   new google.maps.LatLng(-15.7549913,-47.8760737),
   new google.maps.LatLng(-15.7552185,-47.8764197),
   new google.maps.LatLng(-15.7561013,-47.8758994),
   new google.maps.LatLng(-15.7558586,-47.8755239),
   new google.maps.LatLng(-15.7549913,-47.8760737)];
  
  var Colina_Bloco_G = [
  //Colina Bloco G
   new google.maps.LatLng(-15.7551643,-47.8758726),
   new google.maps.LatLng(-15.7563156,-47.8751537),
   new google.maps.LatLng(-15.7561426,-47.8748479),
   new google.maps.LatLng(-15.7550171,-47.8755641),
   new google.maps.LatLng(-15.7551643,-47.8758726)];
  
  var Colina_Bloco_I = [
  //Colina Bloco I
   new google.maps.LatLng(-15.7550971,-47.875886),
   new google.maps.LatLng(-15.754981,-47.8755936),
   new google.maps.LatLng(-15.7544027,-47.8758726),
   new google.maps.LatLng(-15.7542323,-47.8764331),
   new google.maps.LatLng(-15.7544363,-47.8766021),
   new google.maps.LatLng(-15.7547125,-47.8761274),
   new google.maps.LatLng(-15.7550971,-47.875886)];
  
  var Colina_Bloco_J = [
  //Colina Bloco J
   new google.maps.LatLng(-15.7552004,-47.8752798),
   new google.maps.LatLng(-15.7550429,-47.8749713),
   new google.maps.LatLng(-15.7541704,-47.8756392),
   new google.maps.LatLng(-15.7543098,-47.8759074),
   new google.maps.LatLng(-15.7552004,-47.8752798)];
  
  //Parte 2
  var Area_SGs_Artes_FT = [
  //�rea dos SGs e Pr�dios das Artes
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7611557,-47.8746521),
   new google.maps.LatLng(-15.7679394,-47.8728349),
   new google.maps.LatLng(-15.7659415,-47.8698898),
   new google.maps.LatLng(-15.7635428,-47.8715809),
   new google.maps.LatLng(-15.7629258,-47.8720165),
   new google.maps.LatLng(-15.7622469,-47.8723984),
   new google.maps.LatLng(-15.7618578,-47.8725493),
   new google.maps.LatLng(-15.7614699,-47.8726703),
   new google.maps.LatLng(-15.760673,-47.8729195)];
  
  var SubArea_FT = [
  //Sub �rea de SGs_e_Artes_e_Ft, que contempla toda a �rea da Faculdade de Tecnologia
   new google.maps.LatLng(-15.7611525,-47.8746548),
   new google.maps.LatLng(-15.7651897,-47.8734747),
   new google.maps.LatLng(-15.763788,-47.871404),
   new google.maps.LatLng(-15.7630059,-47.8719619),
   new google.maps.LatLng(-15.7624122,-47.872316),
   new google.maps.LatLng(-15.7618546,-47.872552),
   new google.maps.LatLng(-15.7606678,-47.8729222),
   new google.maps.LatLng(-15.7611525,-47.8746548)];
  
  var FT = [
  //FT - Faculdade de Tecnologia(pr�dio)
   new google.maps.LatLng(-15.7627225,-47.8722435),
   new google.maps.LatLng(-15.7631175,-47.8732145),
   new google.maps.LatLng(-15.7632956,-47.8731421),
   new google.maps.LatLng(-15.7634118,-47.8733996),
   new google.maps.LatLng(-15.7639694,-47.8731488),
   new google.maps.LatLng(-15.7647024,-47.8728094),
   new google.maps.LatLng(-15.7638093,-47.8714925),
   new google.maps.LatLng(-15.7627225,-47.8722435)];
  
  var Est_menor_FT = [
  //Estacionamento Secund�rio da FT
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
  
  var Est_maior_FT = [
  //Estacionamento Principal da FT
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
  
  var Lab_de_Hidraulica_e_Estrut = [
  //Laborat�rio de Hidr�ulica e Estruturas
   new google.maps.LatLng(-15.7628981,-47.8736061),
   new google.maps.LatLng(-15.7634118,-47.8733996),
   new google.maps.LatLng(-15.7632956,-47.8731421),
   new google.maps.LatLng(-15.7630555,-47.8732467),
   new google.maps.LatLng(-15.7627974,-47.8733566),
   new google.maps.LatLng(-15.7628981,-47.8736061)];
  
  var UnB_Lab_de_Energia = [
  //Laborat�rio de Energia
   new google.maps.LatLng(-15.7620217,-47.8739749),
   new google.maps.LatLng(-15.7624296,-47.8738139),
   new google.maps.LatLng(-15.7622941,-47.8733969),
   new google.maps.LatLng(-15.7618694,-47.8735833),
   new google.maps.LatLng(-15.7620217,-47.8739749)];
  
  var Passagem_Pedestres_FT = [
  //Passagem dos Pedestres da FT
   new google.maps.LatLng(-15.7611557,-47.8746521),
   new google.maps.LatLng(-15.7621005,-47.8743759),
   new google.maps.LatLng(-15.7613105,-47.8727558),
   new google.maps.LatLng(-15.760673,-47.8729195),
   new google.maps.LatLng(-15.7611557,-47.8746521)];
  
  var SubArea_Musica = [
  //Sub �rea de�SGs_e_Artes_e_FT, mas representando apenas os SGs da m�sica
   new google.maps.LatLng(-15.7645476,-47.8708917),
   new google.maps.LatLng(-15.763788,-47.871404),
   new google.maps.LatLng(-15.7645837,-47.8725815),
   new google.maps.LatLng(-15.7656885,-47.8718305),
   new google.maps.LatLng(-15.7648651,-47.8706691),
   new google.maps.LatLng(-15.7645476,-47.8708917)];
  
  var SG_2 = [
  //SG 2
   new google.maps.LatLng(-15.7641242,-47.8719002),
   new google.maps.LatLng(-15.7648625,-47.8713584),
   new google.maps.LatLng(-15.7645476,-47.8708917),
   new google.maps.LatLng(-15.763788,-47.871404),
   new google.maps.LatLng(-15.7641242,-47.8719002)];
  
  var Aud_de_Mus = [
  //Audit�rio de M�sica
   new google.maps.LatLng(-15.7641242,-47.8719002),
   new google.maps.LatLng(-15.7642998,-47.8721684),
   new google.maps.LatLng(-15.7647179,-47.8718626),
   new google.maps.LatLng(-15.7645321,-47.8716052),
   new google.maps.LatLng(-15.7641242,-47.8719002)];
  
  var Est_SG2_8 = [
  //Estacionamento do SG 2 e SG 8
   new google.maps.LatLng(-15.7652341,-47.8712055),
   new google.maps.LatLng(-15.7648651,-47.8706691),
   new google.maps.LatLng(-15.7645476,-47.8708917),
   new google.maps.LatLng(-15.7649115,-47.8714228),
   new google.maps.LatLng(-15.7652341,-47.8712055)];
  
  var SG_8 = [
  //SG 8
   new google.maps.LatLng(-15.7647179,-47.8718626),
   new google.maps.LatLng(-15.7653646,-47.8713986),
   new google.maps.LatLng(-15.7652341,-47.8712055),
   new google.maps.LatLng(-15.7649115,-47.8714228),
   new google.maps.LatLng(-15.7648625,-47.8713584),
   new google.maps.LatLng(-15.7645321,-47.8716052),
   new google.maps.LatLng(-15.7647179,-47.8718626)];
  
  var SG_10 = [
  //SG 10
   new google.maps.LatLng(-15.7642998,-47.8721684),
   new google.maps.LatLng(-15.7645837,-47.8725815),
   new google.maps.LatLng(-15.7655233,-47.8719538),
   new google.maps.LatLng(-15.7652239,-47.8715032),
   new google.maps.LatLng(-15.7642998,-47.8721684)];
  
  var Est_SG10 = [
  //Estacionamento do SG 10
   new google.maps.LatLng(-15.7655233,-47.8719538),
   new google.maps.LatLng(-15.7656885,-47.8718305),
   new google.maps.LatLng(-15.7653646,-47.8713986),
   new google.maps.LatLng(-15.7652239,-47.8715032),
   new google.maps.LatLng(-15.7655233,-47.8719538)];
  
  var SubArea_Artes = [
  //Sub �rea dos�SGs_e_Artes_e_FT, mas apenas com os pr�dios da Artes
   new google.maps.LatLng(-15.7648651,-47.8706691),
   new google.maps.LatLng(-15.7656885,-47.8718305),
   new google.maps.LatLng(-15.7667365,-47.8710634),
   new google.maps.LatLng(-15.7659415,-47.8698898),
   new google.maps.LatLng(-15.7648651,-47.8706691)];
  
  var Inst_de_Artes = [
  //Instituto de Artes
   new google.maps.LatLng(-15.7651697,-47.8711143),
   new google.maps.LatLng(-15.7662228,-47.8703123),
   new google.maps.LatLng(-15.7659415,-47.8698898),
   new google.maps.LatLng(-15.7648651,-47.8706691),
   new google.maps.LatLng(-15.7651697,-47.8711143)];
  
  var Concha_Praca = [
  //�rea da Concha Ac�stica e Pra�a da M�sica
   new google.maps.LatLng(-15.7655104,-47.8715971),
   new google.maps.LatLng(-15.7665636,-47.8708139),
   new google.maps.LatLng(-15.7662228,-47.8703123),
   new google.maps.LatLng(-15.7651697,-47.8711143),
   new google.maps.LatLng(-15.7655104,-47.8715971)];
  
  var Dep_de_Artes_Cen = [
  //Departamento de Artes C�nicas
   new google.maps.LatLng(-15.7656885,-47.8718305),
   new google.maps.LatLng(-15.7667365,-47.8710634),
   new google.maps.LatLng(-15.7665636,-47.8708139),
   new google.maps.LatLng(-15.7655104,-47.8715971),
   new google.maps.LatLng(-15.7656885,-47.8718305)];
  
  var SubArea_Engenharias = [
  //Sub �rea de�SGs_e_Artes_e_FT, mas com �nfase nos SGs das Engenharias.
   new google.maps.LatLng(-15.7645837,-47.8725815),
   new google.maps.LatLng(-15.7649283,-47.8731018),
   new google.maps.LatLng(-15.76637,-47.8720987),
   new google.maps.LatLng(-15.7666333,-47.8725681),
   new google.maps.LatLng(-15.7674051,-47.8720558),
   new google.maps.LatLng(-15.7667365,-47.8710634),
   new google.maps.LatLng(-15.7645837,-47.8725815)];
  
  var Est_SG12 = [
  //Estacionamento do SG 12
   new google.maps.LatLng(-15.765624,-47.8726083),
   new google.maps.LatLng(-15.7655104,-47.8724125),
   new google.maps.LatLng(-15.7648031,-47.8729033),
   new google.maps.LatLng(-15.7649283,-47.8731018),
   new google.maps.LatLng(-15.765624,-47.8726083)];
  
  var SG_11 = [
  //SG 11
   new google.maps.LatLng(-15.765624,-47.8726083),
   new google.maps.LatLng(-15.7660105,-47.8723425),
   new google.maps.LatLng(-15.76637,-47.8720987),
   new google.maps.LatLng(-15.7661687,-47.8717433),
   new google.maps.LatLng(-15.7657763,-47.8720263),
   new google.maps.LatLng(-15.7654291,-47.8722771),
   new google.maps.LatLng(-15.765624,-47.8726083)];
  
  var Est_SG9 = [
  //Estacionamento do SG 9
   new google.maps.LatLng(-15.7662486,-47.8718787),
   new google.maps.LatLng(-15.7666333,-47.8725681),
   new google.maps.LatLng(-15.7674051,-47.8720558),
   new google.maps.LatLng(-15.7669482,-47.8713772),
   new google.maps.LatLng(-15.7662486,-47.8718787)];
  
  var SG_12 = [
  //SG 12
   new google.maps.LatLng(-15.7648031,-47.8729033),
   new google.maps.LatLng(-15.7655104,-47.8724125),
   new google.maps.LatLng(-15.765322,-47.872088),
   new google.maps.LatLng(-15.7645837,-47.8725815),
   new google.maps.LatLng(-15.7648031,-47.8729033)];
  
  var Est_SG11 = [
  //Estacionamento do SG 11
   new google.maps.LatLng(-15.7661687,-47.8717433),
   new google.maps.LatLng(-15.7660628,-47.8715663),
   new google.maps.LatLng(-15.765322,-47.872088),
   new google.maps.LatLng(-15.7654291,-47.8722771),
   new google.maps.LatLng(-15.7661687,-47.8717433)];
  
  var SG_9 = [
  //SG 9
   new google.maps.LatLng(-15.7662486,-47.8718787),
   new google.maps.LatLng(-15.7669482,-47.8713772),
   new google.maps.LatLng(-15.7667365,-47.8710634),
   new google.maps.LatLng(-15.7660628,-47.8715663),
   new google.maps.LatLng(-15.7662486,-47.8718787)];
  
  var SubArea_Complementares = [
  //Sub �rea de SGs_e_Artes_e_FT, mas com os pr�dios complementares, como Observat�rio Sismol�gico, APOSFUB, Associa��o dos Ex-Alunos da UnB e Retaurante
   new google.maps.LatLng(-15.7651897,-47.8734747),
   new google.maps.LatLng(-15.7679394,-47.8728349),
   new google.maps.LatLng(-15.7674051,-47.8720558),
   new google.maps.LatLng(-15.7666333,-47.8725681),
   new google.maps.LatLng(-15.76637,-47.8720987),
   new google.maps.LatLng(-15.7649283,-47.8731018),
   new google.maps.LatLng(-15.7651897,-47.8734747)];
  
  var Obs_Sism = [
  //Observat�rio Sismol�gico
   new google.maps.LatLng(-15.7649283,-47.8731018),
   new google.maps.LatLng(-15.7651897,-47.8734747),
   new google.maps.LatLng(-15.7664784,-47.8731769),
   new google.maps.LatLng(-15.7659724,-47.8723562),
   new google.maps.LatLng(-15.7649283,-47.8731018)];
  
  var APOSFUB_EX_UNB = [
  //Associa��o dos Aposentados da FUB/Associa��o dos Ex-Alunos
   new google.maps.LatLng(-15.76637,-47.8720987),
   new google.maps.LatLng(-15.7659724,-47.8723562),
   new google.maps.LatLng(-15.7664784,-47.8731769),
   new google.maps.LatLng(-15.766912,-47.873075),
   new google.maps.LatLng(-15.76637,-47.8720987)];
  
  var Rest_ADUnB = [
  //Restaurante da ADUnB
   new google.maps.LatLng(-15.766912,-47.873075),
   new google.maps.LatLng(-15.7679394,-47.8728349),
   new google.maps.LatLng(-15.7674051,-47.8720558),
   new google.maps.LatLng(-15.7666333,-47.8725681),
   new google.maps.LatLng(-15.766912,-47.873075)];
  
  var Educacao = [
  //�rea dos Pr�dios da Educa��o/Bancos/Correio
   new google.maps.LatLng(-15.7659415,-47.8698898),
   new google.maps.LatLng(-15.7679394,-47.8728349),
   new google.maps.LatLng(-15.7731535,-47.871927),
   new google.maps.LatLng(-15.7681588,-47.8682873),
   new google.maps.LatLng(-15.7659415,-47.8698898)];
  
  var SubArea_Principal = [
  //Sub �rea da educa��o com os principais pr�dios, Faculdade de Educa��o, Departamento de M�todos e T�cnicas...
   new google.maps.LatLng(-15.7670643,-47.8715435),
   new google.maps.LatLng(-15.7679394,-47.8728349),
   new google.maps.LatLng(-15.7712589,-47.8722006),
   new google.maps.LatLng(-15.7686776,-47.8702855),
   new google.maps.LatLng(-15.7670643,-47.8715435)];
  
  var Cast_dAgua = [
  //Castelo D'�gua
   new google.maps.LatLng(-15.7697773,-47.8724796),
   new google.maps.LatLng(-15.7712589,-47.8722006),
   new google.maps.LatLng(-15.7702057,-47.8714174),
   new google.maps.LatLng(-15.7693642,-47.8719485),
   new google.maps.LatLng(-15.7697773,-47.8724796)];
  
  var Est_FE = [
  //Estacionamento da Faculdade de Educa��o
   new google.maps.LatLng(-15.7679755,-47.8722435),
   new google.maps.LatLng(-15.7681149,-47.8724635),
   new google.maps.LatLng(-15.7690597,-47.8718144),
   new google.maps.LatLng(-15.7689048,-47.8715891),
   new google.maps.LatLng(-15.7679755,-47.8722435)];
  
  var FE = [
  //Faculdade de Educa��o
   new google.maps.LatLng(-15.7676864,-47.8724474),
   new google.maps.LatLng(-15.7685537,-47.8718305),
   new google.maps.LatLng(-15.7681924,-47.8713155),
   new google.maps.LatLng(-15.7673457,-47.8719431),
   new google.maps.LatLng(-15.7676864,-47.8724474)];
  
  var Aud_dois_Cand = [
  //Audit�rio Dois Candangos
   new google.maps.LatLng(-15.7685537,-47.8718305),
   new google.maps.LatLng(-15.7696637,-47.8710258),
   new google.maps.LatLng(-15.7691319,-47.8706288),
   new google.maps.LatLng(-15.7681924,-47.8713155),
   new google.maps.LatLng(-15.7685537,-47.8718305)];
  
  var Dep_de_Planej_e_Adm = [
  //Departamento de Planejamento e Admnistra��o
   new google.maps.LatLng(-15.7676451,-47.8710741),
   new google.maps.LatLng(-15.7670643,-47.8715435),
   new google.maps.LatLng(-15.7673457,-47.8719431),
   new google.maps.LatLng(-15.7679342,-47.8715006),
   new google.maps.LatLng(-15.7676451,-47.8710741)];
  
  var Dep_de_Met_e_Tec = [
  //Departamento de M�todos e T�cnicas
   new google.maps.LatLng(-15.7679342,-47.8715006),
   new google.maps.LatLng(-15.7691319,-47.8706288),
   new google.maps.LatLng(-15.7686776,-47.8702855),
   new google.maps.LatLng(-15.7676451,-47.8710741),
   new google.maps.LatLng(-15.7679342,-47.8715006)];
  
  var SubArea_BSAS_e_Bancos = [
  //Sub �rea da educa��o com o pr�dio do BSAS, os bancos, e a quadra
   new google.maps.LatLng(-15.7670643,-47.8715435),
   new google.maps.LatLng(-15.7686776,-47.8702855),
   new google.maps.LatLng(-15.7670669,-47.8690892),
   new google.maps.LatLng(-15.7659415,-47.8698898),
   new google.maps.LatLng(-15.7670643,-47.8715435)];
  
  var Banco_Santander = [
  //Banco Santander
   new google.maps.LatLng(-15.7666023,-47.870594),
   new google.maps.LatLng(-15.7669662,-47.8703177),
   new google.maps.LatLng(-15.7668449,-47.8701621),
   new google.maps.LatLng(-15.7664887,-47.8704223),
   new google.maps.LatLng(-15.7666023,-47.870594)];
  
  var Quadra_Jose = [
  //Quadra Jos� Hon�rio
   new google.maps.LatLng(-15.7667572,-47.8708193),
   new google.maps.LatLng(-15.7671263,-47.8705242),
   new google.maps.LatLng(-15.7669662,-47.8703177),
   new google.maps.LatLng(-15.7666023,-47.870594),
   new google.maps.LatLng(-15.7667572,-47.8708193)];
  
  var BSAS = [
  //Bloco de Salas Sul
   new google.maps.LatLng(-15.7663803,-47.8705108),
   new google.maps.LatLng(-15.7676761,-47.8695184),
   new google.maps.LatLng(-15.7670669,-47.8690892),
   new google.maps.LatLng(-15.7659415,-47.8698898),
   new google.maps.LatLng(-15.7663803,-47.8705108)];
  
  var Est_Dep_de_Met_e_Tec = [
  //Estacionamento do Pr�dio do�<br>Departamento de Metodos e T�cnicas
   new google.maps.LatLng(-15.7676451,-47.8710741),
   new google.maps.LatLng(-15.7681898,-47.870653),
   new google.maps.LatLng(-15.7677793,-47.8701407),
   new google.maps.LatLng(-15.7672889,-47.8705189),
   new google.maps.LatLng(-15.7676451,-47.8710741)];
  
  var NEEPE = [
  //N�cleo de Ensino e Pesquisa em Portugu�s para Estrangeiros - NEPPE
   new google.maps.LatLng(-15.7674128,-47.870425),
   new google.maps.LatLng(-15.76796,-47.8699851),
   new google.maps.LatLng(-15.7676606,-47.8696847),
   new google.maps.LatLng(-15.7671908,-47.8700924),
   new google.maps.LatLng(-15.7674128,-47.870425)];
  
  var SubArea_Turismo = [
  //Sub �rea da Educa��o com os Pr�dios do Turismo, da Fiocruz, e do Pavilh�o Multiuso
   new google.maps.LatLng(-15.7712589,-47.8722006),
   new google.maps.LatLng(-15.7731535,-47.871927),
   new google.maps.LatLng(-15.7681588,-47.8682873),
   new google.maps.LatLng(-15.7670669,-47.8690892),
   new google.maps.LatLng(-15.7712589,-47.8722006)];
  
  var PMU_II = [
  //Pavilh�o Multiuso II
   new google.maps.LatLng(-15.7676761,-47.8695184),
   new google.maps.LatLng(-15.7687138,-47.8686976),
   new google.maps.LatLng(-15.7681588,-47.8682873),
   new google.maps.LatLng(-15.7670669,-47.8690892),
   new google.maps.LatLng(-15.7676761,-47.8695184)];
  
  var Passagem_dos_Pedestres = [
  //Passagem dos Pedestres da UnB
   new google.maps.LatLng(-15.7686776,-47.8702855),
   new google.maps.LatLng(-15.7692145,-47.8690624),
   new google.maps.LatLng(-15.7687138,-47.8686976),
   new google.maps.LatLng(-15.7676761,-47.8695184),
   new google.maps.LatLng(-15.7686776,-47.8702855)];
  
  var Est_CET = [
  //Estacionamento Centro de �Excel�ncia em Turismo
   new google.maps.LatLng(-15.770229,-47.8714389),
   new google.maps.LatLng(-15.7703245,-47.8712726),
   new google.maps.LatLng(-15.7687551,-47.8700978),
   new google.maps.LatLng(-15.7686776,-47.8702855),
   new google.maps.LatLng(-15.770229,-47.8714389)];
  
  var CET = [
  //Centro de Excel�ncia em Turismo
   new google.maps.LatLng(-15.7703245,-47.8712726),
   new google.maps.LatLng(-15.7709827,-47.8703499),
   new google.maps.LatLng(-15.7692145,-47.8690624),
   new google.maps.LatLng(-15.7687551,-47.8700978),
   new google.maps.LatLng(-15.7703245,-47.8712726)];
  
  var Fiocruz = [
  //Funda��o Oswaldo Cruz
   new google.maps.LatLng(-15.770229,-47.8714389),
   new google.maps.LatLng(-15.7712589,-47.8722006),
   new google.maps.LatLng(-15.7731535,-47.871927),
   new google.maps.LatLng(-15.7709827,-47.8703499),
   new google.maps.LatLng(-15.770229,-47.8714389)];
  
  var Area_Anexos_UnB = [
  //Pr�dios Anexos � UnB como FUBRA, FINATEC, AUTOTRAC, CDT, CRAD, entre outros...
   new google.maps.LatLng(-15.7681588,-47.8682766),
   new google.maps.LatLng(-15.7731535,-47.8719163),
   new google.maps.LatLng(-15.7805873,-47.8712404),
   new google.maps.LatLng(-15.7751772,-47.8648728),
   new google.maps.LatLng(-15.7751152,-47.8663937),
   new google.maps.LatLng(-15.7708279,-47.866332),
   new google.maps.LatLng(-15.7681588,-47.8682766)];
  
  var SubArea_Anexos_1 = [
  //Sub �rea 1 dos anexos da UnB
   new google.maps.LatLng(-15.7706136,-47.8700924),
   new google.maps.LatLng(-15.7731535,-47.871927),
   new google.maps.LatLng(-15.7805873,-47.8712511),
   new google.maps.LatLng(-15.7779235,-47.8680968),
   new google.maps.LatLng(-15.7706136,-47.8700924)];
  
  var Autotrac = [
  //�rea da Autotrac
   new google.maps.LatLng(-15.7722036,-47.8712243),
   new google.maps.LatLng(-15.7727715,-47.8703821),
   new google.maps.LatLng(-15.7719042,-47.8698027),
   new google.maps.LatLng(-15.7706136,-47.8700924),
   new google.maps.LatLng(-15.7722036,-47.8712243)];
  
  var Finatec = [
  //�rea da Finatec
   new google.maps.LatLng(-15.7737317,-47.8718787),
   new google.maps.LatLng(-15.7736336,-47.8708434),
   new google.maps.LatLng(-15.7732826,-47.8708595),
   new google.maps.LatLng(-15.7732,-47.8703713),
   new google.maps.LatLng(-15.7727715,-47.8703821),
   new google.maps.LatLng(-15.7722036,-47.8712243),
   new google.maps.LatLng(-15.7731535,-47.871927),
   new google.maps.LatLng(-15.7737317,-47.8718787)];
  
  var Est_Finatec = [
  //Estacionamento da Finatec
   new google.maps.LatLng(-15.7737317,-47.8718787),
   new google.maps.LatLng(-15.774568,-47.8717983),
   new google.maps.LatLng(-15.7744131,-47.8702641),
   new google.maps.LatLng(-15.7731948,-47.8701568),
   new google.maps.LatLng(-15.7732,-47.8703713),
   new google.maps.LatLng(-15.7732826,-47.8708595),
   new google.maps.LatLng(-15.7736336,-47.8708434),
   new google.maps.LatLng(-15.7737317,-47.8718787)];
  
  var Anexo_Finatec = [
  //Anexo do pr�dio da Finatec
   new google.maps.LatLng(-15.7745235,-47.8713524),
   new google.maps.LatLng(-15.7748674,-47.8713182),
   new google.maps.LatLng(-15.7747977,-47.8702909),
   new google.maps.LatLng(-15.7744131,-47.8702641),
   new google.maps.LatLng(-15.7745235,-47.8713524)];
  
  var FUBRA = [
  //Funda��o Universit�ria de Bras�lia
   new google.maps.LatLng(-15.7764755,-47.8716132),
   new google.maps.LatLng(-15.7763671,-47.8702775),
   new google.maps.LatLng(-15.7754508,-47.8703633),
   new google.maps.LatLng(-15.7755695,-47.8717017),
   new google.maps.LatLng(-15.7764755,-47.8716132)];
  
  var SubArea_Anexos_2 = [
  //Sub �rea 2 de�Anexos_Unb
   new google.maps.LatLng(-15.7718655,-47.8679869),
   new google.maps.LatLng(-15.7719455,-47.8697276),
   new google.maps.LatLng(-15.7779235,-47.8680968),
   new google.maps.LatLng(-15.7751772,-47.8648835),
   new google.maps.LatLng(-15.7751152,-47.8664044),
   new google.maps.LatLng(-15.7718501,-47.8663749),
   new google.maps.LatLng(-15.7718655,-47.8679869)];
  
  var CDT = [
  //CDT - Centro de Desenvolvimento Tecnol�gico
   new google.maps.LatLng(-15.774217,-47.8663909),
   new google.maps.LatLng(-15.7742247,-47.8671768),
   new google.maps.LatLng(-15.7751307,-47.8671768),
   new google.maps.LatLng(-15.7751152,-47.8664044),
   new google.maps.LatLng(-15.774217,-47.8663909)];
  
  var Est_CDT = [
  //Estacionamento do CDT
   new google.maps.LatLng(-15.7742247,-47.8671768),
   new google.maps.LatLng(-15.774217,-47.8663909),
   new google.maps.LatLng(-15.7738556,-47.8663883),
   new google.maps.LatLng(-15.773853,-47.8671741),
   new google.maps.LatLng(-15.7742247,-47.8671768)];
  
  var CEFTRU = [
  //Centro Interdisciplinar de Estudos em Transportes
   new google.maps.LatLng(-15.7733161,-47.8673807),
   new google.maps.LatLng(-15.7733342,-47.8668764),
   new google.maps.LatLng(-15.7725676,-47.8668791),
   new google.maps.LatLng(-15.7725624,-47.8673511),
   new google.maps.LatLng(-15.7733161,-47.8673807)];
  
  var Anexo_CEFTRU = [
  //Anexo do pr�dio CEFTRU
   new google.maps.LatLng(-15.7725676,-47.8668791),
   new google.maps.LatLng(-15.7733342,-47.8668764),
   new google.maps.LatLng(-15.7733303,-47.8665586),
   new google.maps.LatLng(-15.7725701,-47.8665639),
   new google.maps.LatLng(-15.7725676,-47.8668791)];
  
  var CME = [
  //Pr�dio do CME
   new google.maps.LatLng(-15.7720565,-47.867716),
   new google.maps.LatLng(-15.7728179,-47.867716),
   new google.maps.LatLng(-15.7728334,-47.8673592),
   new google.maps.LatLng(-15.7720668,-47.8673324),
   new google.maps.LatLng(-15.7720565,-47.867716)];
  
  var Est_CEFTRU_e_CME = [
  //Estacionamento Comunit�rio dos pr�dios CEFTRU e CME
   new google.maps.LatLng(-15.7725624,-47.8673511),
   new google.maps.LatLng(-15.7725701,-47.8665639),
   new google.maps.LatLng(-15.7720642,-47.8665707),
   new google.maps.LatLng(-15.7720668,-47.8673324),
   new google.maps.LatLng(-15.7725624,-47.8673511)];
  
  var SubArea_Anexos_3 = [
  //Sub �rea 3 de Anexos_UnB
   new google.maps.LatLng(-15.7706136,-47.8700924),
   new google.maps.LatLng(-15.7719455,-47.8697276),
   new google.maps.LatLng(-15.7718501,-47.8663749),
   new google.maps.LatLng(-15.7708279,-47.8663427),
   new google.maps.LatLng(-15.7681588,-47.8682873),
   new google.maps.LatLng(-15.7706136,-47.8700924)];
  
  var NMT = [
  //N�cleo de Medicina Tropical
   new google.maps.LatLng(-15.7687964,-47.8678071),
   new google.maps.LatLng(-15.7693178,-47.8685421),
   new google.maps.LatLng(-15.7706497,-47.8677964),
   new google.maps.LatLng(-15.7700044,-47.8669488),
   new google.maps.LatLng(-15.7687964,-47.8678071)];
  
  var Lab_Est_Geo_e_Amb = [
  //Laborat�rio de Estudos Geodin�micos e Ambientais
   new google.maps.LatLng(-15.7718887,-47.8674907),
   new google.maps.LatLng(-15.7718501,-47.8663749),
   new google.maps.LatLng(-15.7708279,-47.8663427),
   new google.maps.LatLng(-15.7700044,-47.8669488),
   new google.maps.LatLng(-15.7708872,-47.8680378),
   new google.maps.LatLng(-15.7718887,-47.8674907)];
  
  var Lab_de_Term = [
  //Laborat�rio de Termobiologia
   new google.maps.LatLng(-15.7693952,-47.8686816),
   new google.maps.LatLng(-15.7697308,-47.8692556),
   new google.maps.LatLng(-15.7712331,-47.8684508),
   new google.maps.LatLng(-15.7706497,-47.8677964),
   new google.maps.LatLng(-15.7693952,-47.8686816)];
  
  var CRAD = [
  //CRAD - Centro de Refer�ncia em Conserva��o da Natureza e Recupera��o de �reas Degradadas
   new google.maps.LatLng(-15.7708872,-47.8680378),
   new google.maps.LatLng(-15.7714241,-47.8686762),
   new google.maps.LatLng(-15.7719042,-47.868644),
   new google.maps.LatLng(-15.7718887,-47.8674907),
   new google.maps.LatLng(-15.7708872,-47.8680378)];
  
  var Area_L2_e_L3 = [
   new google.maps.LatLng(-15.7468234,-47.8820497),
   new google.maps.LatLng(-15.7559045,-47.8791049),
   new google.maps.LatLng(-15.7650785,-47.8762619),
   new google.maps.LatLng(-15.7675372,-47.8756476),
   new google.maps.LatLng(-15.7687717,-47.8752976),
   new google.maps.LatLng(-15.7699856,-47.8751514),
   new google.maps.LatLng(-15.7721397,-47.8747463),
   new google.maps.LatLng(-15.7743557,-47.8744485),
   new google.maps.LatLng(-15.7766957,-47.8742259),
   new google.maps.LatLng(-15.7790253,-47.8740246),
   new google.maps.LatLng(-15.7837569,-47.8737724),
   new google.maps.LatLng(-15.7814649,-47.8711706),
   new google.maps.LatLng(-15.7745577,-47.8717876),
   new google.maps.LatLng(-15.7731432,-47.8719163),
   new google.maps.LatLng(-15.7710883,-47.8722651),
   new google.maps.LatLng(-15.7693407,-47.8725656),
   new google.maps.LatLng(-15.7679291,-47.8728242),
   new google.maps.LatLng(-15.7659735,-47.8733461),
   new google.maps.LatLng(-15.7643589,-47.8737779),
   new google.maps.LatLng(-15.7611454,-47.8746414),
   new google.maps.LatLng(-15.7542892,-47.8767765),
   new google.maps.LatLng(-15.7512843,-47.8778065),
   new google.maps.LatLng(-15.7498335,-47.8783966),
   new google.maps.LatLng(-15.7484653,-47.879051),
   new google.maps.LatLng(-15.7465034,-47.8809822),
   new google.maps.LatLng(-15.7468234,-47.8820497)];
  
  var SubArea_602_603 = [
  //Quadras 602 e 603 entre a L2 e a L3
   new google.maps.LatLng(-15.7758431,-47.8742981),
   new google.maps.LatLng(-15.7798516,-47.8739602),
   new google.maps.LatLng(-15.7837569,-47.8737724),
   new google.maps.LatLng(-15.7814649,-47.8711706),
   new google.maps.LatLng(-15.7755695,-47.8717017),
   new google.maps.LatLng(-15.7758431,-47.8742981)];
  
  var SubArea_604 = [
  //Quadra 604 entre a L2 e a L3
   new google.maps.LatLng(-15.7730451,-47.8746253),
   new google.maps.LatLng(-15.7743254,-47.8744563),
   new google.maps.LatLng(-15.7758431,-47.8742981),
   new google.maps.LatLng(-15.7755695,-47.8717017),
   new google.maps.LatLng(-15.772725,-47.8720021),
   new google.maps.LatLng(-15.7730451,-47.8746253)];
  
  var HUB_Est = [
  //Estacionamento do HUB
   new google.maps.LatLng(-15.7730451,-47.8746253),
   new google.maps.LatLng(-15.7738556,-47.8745127),
   new google.maps.LatLng(-15.7737317,-47.8735471),
   new google.maps.LatLng(-15.772947,-47.8736758),
   new google.maps.LatLng(-15.7730451,-47.8746253)];
  
  var SubArea_605 = [
  //Quadra 605 entre a L2 e a L3
   new google.maps.LatLng(-15.7694184,-47.8752127),
   new google.maps.LatLng(-15.7730528,-47.8746226),
   new google.maps.LatLng(-15.7727327,-47.8719994),
   new google.maps.LatLng(-15.7690106,-47.8726378),
   new google.maps.LatLng(-15.7694184,-47.8752127)];
  
  var HUB = [
  //HUB - Hospital Universit�rio de Bras�lia
   new google.maps.LatLng(-15.7714602,-47.874856),
   new google.maps.LatLng(-15.7730451,-47.8746253),
   new google.maps.LatLng(-15.772725,-47.8720021),
   new google.maps.LatLng(-15.7710883,-47.8722651),
   new google.maps.LatLng(-15.7714602,-47.874856)];
  
  var Amb1 = [
  //Ambulat�rio 1
   new google.maps.LatLng(-15.770056,-47.8751028),
   new google.maps.LatLng(-15.7714602,-47.874856),
   new google.maps.LatLng(-15.7712537,-47.8736222),
   new google.maps.LatLng(-15.7698392,-47.8738368),
   new google.maps.LatLng(-15.770056,-47.8751028)];
  
  var Amb2 = [
  //Ambulat�rio 2
   new google.maps.LatLng(-15.7698392,-47.8738368),
   new google.maps.LatLng(-15.7712537,-47.8736222),
   new google.maps.LatLng(-15.7711711,-47.8730321),
   new google.maps.LatLng(-15.769736,-47.8733003),
   new google.maps.LatLng(-15.7698392,-47.8738368)];
  
  var Est_Amb = [
  //Estacionamento dos Ambulat�rios
   new google.maps.LatLng(-15.769736,-47.8733003),
   new google.maps.LatLng(-15.7711711,-47.8730321),
   new google.maps.LatLng(-15.7710883,-47.8722651),
   new google.maps.LatLng(-15.7696121,-47.87256),
   new google.maps.LatLng(-15.769736,-47.8733003)];
  
  var Odonto = [
  //Cl�nica Odontol�gica e Farm�cia Escola
   new google.maps.LatLng(-15.7692274,-47.8739789),
   new google.maps.LatLng(-15.7694184,-47.8752127),
   new google.maps.LatLng(-15.770056,-47.8751028),
   new google.maps.LatLng(-15.7698392,-47.8738636),
   new google.maps.LatLng(-15.7692274,-47.8739789)];
  
  var Est_Odonto = [
  //Estacionamento Cl�nica Odontol�gica e Farm�cia Escola
   new google.maps.LatLng(-15.7692274,-47.8739789),
   new google.maps.LatLng(-15.7698392,-47.8738368),
   new google.maps.LatLng(-15.7696121,-47.87256),
   new google.maps.LatLng(-15.7690106,-47.8726378),
   new google.maps.LatLng(-15.7692274,-47.8739789)];
  
  var SubArea_606_607 = [
  //Quadras 606 e 607 entre a L2 e a L3
   new google.maps.LatLng(-15.7626167,-47.8770339),
   new google.maps.LatLng(-15.7657045,-47.8761121),
   new google.maps.LatLng(-15.768782,-47.8752869),
   new google.maps.LatLng(-15.769421,-47.8752047),
   new google.maps.LatLng(-15.7690132,-47.8726298),
   new google.maps.LatLng(-15.7654381,-47.8734908),
   new google.maps.LatLng(-15.761863,-47.874459),
   new google.maps.LatLng(-15.7626167,-47.8770339)];
  
  var Pass_Alu_UnB = [
  //Passagem dos Alunos da UnB
   new google.maps.LatLng(-15.765513,-47.8761542),
   new google.maps.LatLng(-15.7659311,-47.8760469),
   new google.maps.LatLng(-15.7653529,-47.8735256),
   new google.maps.LatLng(-15.7648522,-47.8736544),
   new google.maps.LatLng(-15.765513,-47.8761542)];
  
  var SubArea_608_609 = [
  //Quadras 608 e 609 entre a L2 e a L3
   new google.maps.LatLng(-15.7562717,-47.8789651),
   new google.maps.LatLng(-15.7626167,-47.8770339),
   new google.maps.LatLng(-15.761863,-47.874459),
   new google.maps.LatLng(-15.7555592,-47.8764009),
   new google.maps.LatLng(-15.7562717,-47.8789651)];
  
  var SubArea_610_611_612 = [
  //Quadras 610,611 e 612 entre a L2 e a L3
   new google.maps.LatLng(-15.7468234,-47.8820497),
   new google.maps.LatLng(-15.7562717,-47.8789651),
   new google.maps.LatLng(-15.7555592,-47.8764009),
   new google.maps.LatLng(-15.7523995,-47.8774416),
   new google.maps.LatLng(-15.7503188,-47.8781927),
   new google.maps.LatLng(-15.7484653,-47.879051),
   new google.maps.LatLng(-15.7464413,-47.8810224),
   new google.maps.LatLng(-15.7468234,-47.8820497)];
  
  var Area_Arboreto_Botanica_Vet = [
  //�rea Arboreto e Bot�nica e Veterin�ria
   new google.maps.LatLng(-15.7341993,-47.8836697),
   new google.maps.LatLng(-15.735485,-47.8856063),
   new google.maps.LatLng(-15.7468234,-47.8820497),
   new google.maps.LatLng(-15.7464413,-47.8810224),
   new google.maps.LatLng(-15.7484653,-47.879051),
   new google.maps.LatLng(-15.7498335,-47.8783966),
   new google.maps.LatLng(-15.7542995,-47.8767872),
   new google.maps.LatLng(-15.7537677,-47.8756553),
   new google.maps.LatLng(-15.7567157,-47.8735042),
   new google.maps.LatLng(-15.7563885,-47.8722543),
   new google.maps.LatLng(-15.7557811,-47.8725547),
   new google.maps.LatLng(-15.7542943,-47.8708166),
   new google.maps.LatLng(-15.7455636,-47.8792977),
   new google.maps.LatLng(-15.7386191,-47.8826612),
   new google.maps.LatLng(-15.7377672,-47.8799576),
   new google.maps.LatLng(-15.7368068,-47.8800273),
   new google.maps.LatLng(-15.7349583,-47.8820926),
   new google.maps.LatLng(-15.7341993,-47.8836697)];
  
  var SubArea_Botanica = [
  //Sub-�rea da UnB voltada para o cultivo de plantas
   new google.maps.LatLng(-15.7350461,-47.8846246),
   new google.maps.LatLng(-15.736812,-47.8833801),
   new google.maps.LatLng(-15.7386191,-47.8826612),
   new google.maps.LatLng(-15.7377672,-47.8799576),
   new google.maps.LatLng(-15.7370133,-47.8801292),
   new google.maps.LatLng(-15.7349583,-47.8820926),
   new google.maps.LatLng(-15.7341993,-47.8836697),
   new google.maps.LatLng(-15.7350461,-47.8846246)];
  
  var Fitopatologia = [
  //Casas de Vegeta��o - Fitopatologia
   new google.maps.LatLng(-15.7362285,-47.8837878),
   new google.maps.LatLng(-15.7348292,-47.8823608),
   new google.maps.LatLng(-15.7341993,-47.8836697),
   new google.maps.LatLng(-15.7350461,-47.8846246),
   new google.maps.LatLng(-15.7362285,-47.8837878)];
  
  var Estufa = [
  //Estufa para cultivo das plantas
   new google.maps.LatLng(-15.7369307,-47.8821999),
   new google.maps.LatLng(-15.7382887,-47.8816259),
   new google.maps.LatLng(-15.7377672,-47.8799576),
   new google.maps.LatLng(-15.7370133,-47.8801292),
   new google.maps.LatLng(-15.7361562,-47.8809661),
   new google.maps.LatLng(-15.7369307,-47.8821999)];
  
  var Hospital_Vet = [
  //Hospital Veterin�rio da UnB
   new google.maps.LatLng(-15.7475876,-47.877388),
   new google.maps.LatLng(-15.7488577,-47.8787398),
   new google.maps.LatLng(-15.7506751,-47.8772271),
   new google.maps.LatLng(-15.7492527,-47.8756821),
   new google.maps.LatLng(-15.7475876,-47.877388)];
   
  //Parte 3
  var Area_Bio_Quim_Saude_CESPE = [
  //�rea Ci�ncias Biol�gicas, Qu�micas e de Sa�de, CPD e CESPE
   new google.maps.LatLng(-15.7681433,-47.86829),
   new google.maps.LatLng(-15.7708279,-47.8663427),
   new google.maps.LatLng(-15.7751152,-47.8663937),
   new google.maps.LatLng(-15.7751772,-47.8648728),
   new google.maps.LatLng(-15.7742273,-47.8644973),
   new google.maps.LatLng(-15.7728954,-47.8640896),
   new google.maps.LatLng(-15.7711273,-47.8638456),
   new google.maps.LatLng(-15.7672773,-47.8633239),
   new google.maps.LatLng(-15.7653497,-47.8630416),
   new google.maps.LatLng(-15.7634324,-47.8628236),
   new google.maps.LatLng(-15.7633549,-47.8647629),
   new google.maps.LatLng(-15.7651851,-47.8660664),
   new google.maps.LatLng(-15.7681433,-47.86829)];
  
  var SubArea_FS_Quimica = [
  //Faculdade de Sa�de e Instituto de Qu�mica
   new google.maps.LatLng(-15.766943,-47.8673887),
   new google.maps.LatLng(-15.7681588,-47.8682873),
   new google.maps.LatLng(-15.7708279,-47.866332),
   new google.maps.LatLng(-15.7711273,-47.8638456),
   new google.maps.LatLng(-15.7688015,-47.8635424),
   new google.maps.LatLng(-15.767418,-47.8653663),
   new google.maps.LatLng(-15.7679755,-47.866289),
   new google.maps.LatLng(-15.7673354,-47.8667504),
   new google.maps.LatLng(-15.766943,-47.8673887)];
  
  var Instituto_Quimica = [
  //Instituto de Qu�mica
   new google.maps.LatLng(-15.7681665,-47.8655032),
   new google.maps.LatLng(-15.7692688,-47.8647065),
   new google.maps.LatLng(-15.7688764,-47.8641218),
   new google.maps.LatLng(-15.7677897,-47.8649533),
   new google.maps.LatLng(-15.7681665,-47.8655032)];
  
  var Estacionamento_IQ = [
  //Estacionamento do Instituto de Qu�mica
   new google.maps.LatLng(-15.768435,-47.8658008),
   new google.maps.LatLng(-15.7698805,-47.8647548),
   new google.maps.LatLng(-15.7692919,-47.8638482),
   new google.maps.LatLng(-15.7689267,-47.8641513),
   new google.maps.LatLng(-15.7693153,-47.8647011),
   new google.maps.LatLng(-15.7682698,-47.8655218),
   new google.maps.LatLng(-15.768435,-47.8658008)];
  
  var Faculdade_de_saude = [
  //Faculdade de S�ude/Faculdade de Medicina
   new google.maps.LatLng(-15.768786,-47.8675711),
   new google.maps.LatLng(-15.7686467,-47.8673351),
   new google.maps.LatLng(-15.769421,-47.8667182),
   new google.maps.LatLng(-15.7688015,-47.8657687),
   new google.maps.LatLng(-15.7673716,-47.8667664),
   new google.maps.LatLng(-15.7681356,-47.8676087),
   new google.maps.LatLng(-15.7684195,-47.8674531),
   new google.maps.LatLng(-15.7685744,-47.867673),
   new google.maps.LatLng(-15.768786,-47.8675711)];
  
  var Estacionamento_FS_1 = [
  //Estacionamento da Faculdade de Sa�de/Faculdade de Medicina
   new google.maps.LatLng(-15.7689383,-47.8676006),
   new google.maps.LatLng(-15.770469,-47.8665063),
   new google.maps.LatLng(-15.7702651,-47.8661898),
   new google.maps.LatLng(-15.7687551,-47.8673056),
   new google.maps.LatLng(-15.7689383,-47.8676006)];
  
  var MASC_Sul = [
  //MASC Sul
   new google.maps.LatLng(-15.7677639,-47.8658813),
   new google.maps.LatLng(-15.7681562,-47.8656131),
   new google.maps.LatLng(-15.7679394,-47.8652644),
   new google.maps.LatLng(-15.767578,-47.8655273),
   new google.maps.LatLng(-15.7677639,-47.8658813)];
  
  var P_Onibus_FS = [
  //Ponto de �nibus da Faculdade de S�ude/Faculdade de Medicina
   new google.maps.LatLng(-15.7695165,-47.8672841),
   new google.maps.LatLng(-15.7697979,-47.8670964),
   new google.maps.LatLng(-15.7697592,-47.8670213),
   new google.maps.LatLng(-15.769483,-47.8672198),
   new google.maps.LatLng(-15.7695165,-47.8672841)];
  
  var SUB_AREA_BIOLOGICAS_FS = [
   new google.maps.LatLng(-15.766943,-47.8673887),
   new google.maps.LatLng(-15.7673354,-47.8667504),
   new google.maps.LatLng(-15.7679755,-47.866289),
   new google.maps.LatLng(-15.767418,-47.8653663),
   new google.maps.LatLng(-15.7688015,-47.8635424),
   new google.maps.LatLng(-15.7634324,-47.8628236),
   new google.maps.LatLng(-15.7633704,-47.8647602),
   new google.maps.LatLng(-15.766943,-47.8673887)];
  
  var Instituto_Biologia = [
  //Instituto de Ci�ncias Biol�gicas
   new google.maps.LatLng(-15.7655026,-47.8661549),
   new google.maps.LatLng(-15.7660654,-47.8663587),
   new google.maps.LatLng(-15.7663158,-47.8660557),
   new google.maps.LatLng(-15.7667159,-47.8660101),
   new google.maps.LatLng(-15.7675832,-47.8646475),
   new google.maps.LatLng(-15.7664319,-47.8637999),
   new google.maps.LatLng(-15.7655439,-47.8652161),
   new google.maps.LatLng(-15.7654458,-47.8656292),
   new google.maps.LatLng(-15.7655026,-47.8661549)];
  
  var Estacionamento_IB = [
  //Estacionamento do Instituto de Biologia
   new google.maps.LatLng(-15.7665584,-47.863875),
   new google.maps.LatLng(-15.7675831,-47.8645992),
   new google.maps.LatLng(-15.7679033,-47.8641808),
   new google.maps.LatLng(-15.7675057,-47.8638428),
   new google.maps.LatLng(-15.7669533,-47.8638563),
   new google.maps.LatLng(-15.7666617,-47.8636819),
   new google.maps.LatLng(-15.7665584,-47.863875)];
  
  var Estacionamento_FS_2 = [
  //Estacionamento da Faculdade de Sa�de/Faculdade de Medicina
   new google.maps.LatLng(-15.7669792,-47.8665948),
   new google.maps.LatLng(-15.7678103,-47.8660476),
   new google.maps.LatLng(-15.7675677,-47.8656507),
   new google.maps.LatLng(-15.7667675,-47.8662837),
   new google.maps.LatLng(-15.7669792,-47.8665948)];
  
  var BSA_Sul = [
  //Bloco de salas ala sul
   new google.maps.LatLng(-15.7674335,-47.8666269),
   new google.maps.LatLng(-15.767227,-47.8664338),
   new google.maps.LatLng(-15.7669225,-47.8666511),
   new google.maps.LatLng(-15.7665597,-47.8663635),
   new google.maps.LatLng(-15.7663441,-47.8665693),
   new google.maps.LatLng(-15.7669379,-47.8670186),
   new google.maps.LatLng(-15.7674335,-47.8666269)];
  
  var Estacionamento_bsa_sul_ib = [
  //Estacionamento do BSA Sul e Instituto de Ci�ncias Biol�gicas
   new google.maps.LatLng(-15.7661893,-47.8666699),
   new google.maps.LatLng(-15.7663958,-47.8664446),
   new google.maps.LatLng(-15.7665507,-47.8663212),
   new google.maps.LatLng(-15.7669225,-47.8666511),
   new google.maps.LatLng(-15.7669585,-47.8665626),
   new google.maps.LatLng(-15.766752,-47.8662461),
   new google.maps.LatLng(-15.7677277,-47.8648996),
   new google.maps.LatLng(-15.7675676,-47.8647763),
   new google.maps.LatLng(-15.7667159,-47.8660101),
   new google.maps.LatLng(-15.7664164,-47.8661657),
   new google.maps.LatLng(-15.766055,-47.866568),
   new google.maps.LatLng(-15.7661893,-47.8666699)];
  
  var SubArea_CPD_CESPE = [
  //Centro de Inform�tica e�Centro de Sele��o e de Promo��o de Eventos
   new google.maps.LatLng(-15.7708176,-47.8663373),
   new google.maps.LatLng(-15.7751152,-47.8664044),
   new google.maps.LatLng(-15.7751772,-47.8648835),
   new google.maps.LatLng(-15.7742273,-47.8644973),
   new google.maps.LatLng(-15.7735459,-47.8643525),
   new google.maps.LatLng(-15.7728954,-47.8640896),
   new google.maps.LatLng(-15.771117,-47.8638402),
   new google.maps.LatLng(-15.7708176,-47.8663373)];
  
  var CPD = [
  //Centro de Inform�tica
   new google.maps.LatLng(-15.7726502,-47.8660651),
   new google.maps.LatLng(-15.7728476,-47.8660651),
   new google.maps.LatLng(-15.7728515,-47.8654897),
   new google.maps.LatLng(-15.7726579,-47.8654911),
   new google.maps.LatLng(-15.7726502,-47.8660651)];
  
  var Estacionamento_cpd = [
  //Estacionamento do Centro de Infom�tica
   new google.maps.LatLng(-15.7728515,-47.8654897),
   new google.maps.LatLng(-15.7728476,-47.8660651),
   new google.maps.LatLng(-15.7726502,-47.8660651),
   new google.maps.LatLng(-15.7726527,-47.8663239),
   new google.maps.LatLng(-15.773027,-47.8663453),
   new google.maps.LatLng(-15.7730464,-47.8654723),
   new google.maps.LatLng(-15.7728515,-47.8654897)];
  
  var CESPE = [
  //Centro de Sele��o e de Promo��o de Eventos
   new google.maps.LatLng(-15.7716951,-47.8660101),
   new google.maps.LatLng(-15.772232,-47.8656292),
   new google.maps.LatLng(-15.7721029,-47.8654549),
   new google.maps.LatLng(-15.7723482,-47.8652725),
   new google.maps.LatLng(-15.7724979,-47.8648406),
   new google.maps.LatLng(-15.772374,-47.8647119),
   new google.maps.LatLng(-15.7720694,-47.8645939),
   new google.maps.LatLng(-15.7715248,-47.8650042),
   new google.maps.LatLng(-15.771468,-47.8651759),
   new google.maps.LatLng(-15.771819,-47.8656775),
   new google.maps.LatLng(-15.7715893,-47.8658491),
   new google.maps.LatLng(-15.7716951,-47.8660101)];
  
  var Estacionamento_CESPE_1 = [
  //Estacionamento do CESPE
   new google.maps.LatLng(-15.7720462,-47.8663105),
   new google.maps.LatLng(-15.7720178,-47.866171),
   new google.maps.LatLng(-15.7725521,-47.8657955),
   new google.maps.LatLng(-15.7724359,-47.8655246),
   new google.maps.LatLng(-15.7717493,-47.8660396),
   new google.maps.LatLng(-15.7719171,-47.8663185),
   new google.maps.LatLng(-15.7720462,-47.8663105)];
  
  var Estacionamento_CESPE_2 = [
  //Estacionamento do CESPE
   new google.maps.LatLng(-15.7715996,-47.8662568),
   new google.maps.LatLng(-15.7712227,-47.8656453),
   new google.maps.LatLng(-15.7712021,-47.865479),
   new google.maps.LatLng(-15.7713312,-47.8650928),
   new google.maps.LatLng(-15.7717235,-47.8646958),
   new google.maps.LatLng(-15.7715996,-47.8645295),
   new google.maps.LatLng(-15.7712434,-47.8648567),
   new google.maps.LatLng(-15.771073,-47.8651786),
   new google.maps.LatLng(-15.7710214,-47.8655326),
   new google.maps.LatLng(-15.7710524,-47.8657311),
   new google.maps.LatLng(-15.771357,-47.8662783),
   new google.maps.LatLng(-15.7715996,-47.8662568)];
  
  var Estacionamento_CESPE_3 = [
  //Estacionamento do Cespe
   new google.maps.LatLng(-15.7715996,-47.8662568),
   new google.maps.LatLng(-15.7718216,-47.8662461),
   new google.maps.LatLng(-15.7714138,-47.8656507),
   new google.maps.LatLng(-15.7716564,-47.8654575),
   new google.maps.LatLng(-15.771468,-47.8651759),
   new google.maps.LatLng(-15.7715248,-47.8650042),
   new google.maps.LatLng(-15.7715841,-47.8649586),
   new google.maps.LatLng(-15.7720694,-47.8645939),
   new google.maps.LatLng(-15.7720178,-47.8645509),
   new google.maps.LatLng(-15.7718784,-47.8646368),
   new google.maps.LatLng(-15.7715273,-47.8649318),
   new google.maps.LatLng(-15.7713312,-47.8650928),
   new google.maps.LatLng(-15.7712692,-47.8653717),
   new google.maps.LatLng(-15.7712744,-47.8654951),
   new google.maps.LatLng(-15.7712227,-47.8656453),
   new google.maps.LatLng(-15.7715996,-47.8662568)];
  
  var P_Onibus_CESPE_CPD = [
  //Ponto de �nibus do CESPE e CPD
   new google.maps.LatLng(-15.7723275,-47.866348),
   new google.maps.LatLng(-15.7724875,-47.866348),
   new google.maps.LatLng(-15.7724927,-47.8662461),
   new google.maps.LatLng(-15.7723326,-47.8662461),
   new google.maps.LatLng(-15.7723275,-47.866348)];
  
  var Area_Centro_Olimpico = [
  //Centro Ol�mpico�
   new google.maps.LatLng(-15.7665842,-47.8578897),
   new google.maps.LatLng(-15.7660473,-47.8574391),
   new google.maps.LatLng(-15.766006,-47.8566452),
   new google.maps.LatLng(-15.7587576,-47.8556581),
   new google.maps.LatLng(-15.7591499,-47.8579326),
   new google.maps.LatLng(-15.7597488,-47.8591343),
   new google.maps.LatLng(-15.7597282,-47.8604432),
   new google.maps.LatLng(-15.7594597,-47.8609367),
   new google.maps.LatLng(-15.7593151,-47.8620096),
   new google.maps.LatLng(-15.758613,-47.8629752),
   new google.maps.LatLng(-15.7598624,-47.8645416),
   new google.maps.LatLng(-15.7665842,-47.8578897)];
  
  var SUB_AREA_FEF_CO_1 = [
   new google.maps.LatLng(-15.7655052,-47.8589559),
   new google.maps.LatLng(-15.7643333,-47.8578669),
   new google.maps.LatLng(-15.763546,-47.8586876),
   new google.maps.LatLng(-15.7638842,-47.8590283),
   new google.maps.LatLng(-15.7627148,-47.8604284),
   new google.maps.LatLng(-15.7625418,-47.8611955),
   new google.maps.LatLng(-15.7633343,-47.8611097),
   new google.maps.LatLng(-15.7655052,-47.8589559)];
  
  var FEF = [
  //Faculdade de Educa��o F�sica
   new google.maps.LatLng(-15.7629601,-47.8610829),
   new google.maps.LatLng(-15.7635718,-47.8604525),
   new google.maps.LatLng(-15.7632827,-47.8601575),
   new google.maps.LatLng(-15.7626348,-47.8607502),
   new google.maps.LatLng(-15.7629601,-47.8610829)];
  
  var ESTACIONAMENTO_FEF = [
  //Estacionamento FEF
   new google.maps.LatLng(-15.7642326,-47.8597391),
   new google.maps.LatLng(-15.763959,-47.8594494),
   new google.maps.LatLng(-15.7633808,-47.8600717),
   new google.maps.LatLng(-15.7636363,-47.8603559),
   new google.maps.LatLng(-15.7642326,-47.8597391)];
  
  var ESTACIONAMENTO_CO = [
  //Estacionamento do CO
   new google.maps.LatLng(-15.7644856,-47.8595299),
   new google.maps.LatLng(-15.7651464,-47.8588647),
   new google.maps.LatLng(-15.7647696,-47.8584516),
   new google.maps.LatLng(-15.7640932,-47.8591114),
   new google.maps.LatLng(-15.7644856,-47.8595299)];
  
  var QUADRAS_15 = [
  //Quadras 
   new google.maps.LatLng(-15.7638687,-47.8589344),
   new google.maps.LatLng(-15.7644959,-47.8582987),
   new google.maps.LatLng(-15.7642842,-47.8580869),
   new google.maps.LatLng(-15.7636699,-47.8587279),
   new google.maps.LatLng(-15.7638687,-47.8589344)];
  
  var SUB_AREA_FEF_CO_2 = [
   new google.maps.LatLng(-15.7655052,-47.8589559),
   new google.maps.LatLng(-15.7665842,-47.8578897),
   new google.maps.LatLng(-15.7660473,-47.8574391),
   new google.maps.LatLng(-15.766006,-47.8566452),
   new google.maps.LatLng(-15.7631485,-47.8562549),
   new google.maps.LatLng(-15.7630969,-47.8572875),
   new google.maps.LatLng(-15.7625857,-47.8572553),
   new google.maps.LatLng(-15.762547,-47.8579152),
   new google.maps.LatLng(-15.7641526,-47.8580627),
   new google.maps.LatLng(-15.7643333,-47.8578669),
   new google.maps.LatLng(-15.7655052,-47.8589559)];
  
  var CEU_1 = [
  //Casa do Estudante
   new google.maps.LatLng(-15.7652935,-47.8582531),
   new google.maps.LatLng(-15.7655156,-47.8582639),
   new google.maps.LatLng(-15.7654846,-47.8574914),
   new google.maps.LatLng(-15.7652574,-47.8575129),
   new google.maps.LatLng(-15.7652935,-47.8582531)];
  
  var CEU_2 = [
  //Casa do Estudante
   new google.maps.LatLng(-15.7657478,-47.8575638),
   new google.maps.LatLng(-15.7659931,-47.8575451),
   new google.maps.LatLng(-15.7659518,-47.8567618),
   new google.maps.LatLng(-15.7657221,-47.8567913),
   new google.maps.LatLng(-15.7657478,-47.8575638)];
  
  var CENTRO_OLIMPICO = [
  //Centro Ol�mpico
   new google.maps.LatLng(-15.762658,-47.8578937),
   new google.maps.LatLng(-15.7641913,-47.8579849),
   new google.maps.LatLng(-15.7642533,-47.857604),
   new google.maps.LatLng(-15.762689,-47.8574485),
   new google.maps.LatLng(-15.762658,-47.8578937)];
  
  var QUADRA_14 = [
  //V�rias quadras
   new google.maps.LatLng(-15.7631485,-47.8574324),
   new google.maps.LatLng(-15.7640107,-47.8574753),
   new google.maps.LatLng(-15.7640623,-47.8566867),
   new google.maps.LatLng(-15.7632001,-47.8566438),
   new google.maps.LatLng(-15.7631485,-47.8574324)];
  
  var SUB_AREA_FEF_CO_3 = [
   new google.maps.LatLng(-15.7641526,-47.8580627),
   new google.maps.LatLng(-15.7617649,-47.8578427),
   new google.maps.LatLng(-15.7617649,-47.858001),
   new google.maps.LatLng(-15.7591499,-47.8579326),
   new google.maps.LatLng(-15.7597488,-47.8591343),
   new google.maps.LatLng(-15.7597282,-47.8604432),
   new google.maps.LatLng(-15.7594597,-47.8609367),
   new google.maps.LatLng(-15.7593151,-47.8620096),
   new google.maps.LatLng(-15.758613,-47.8629752),
   new google.maps.LatLng(-15.7598624,-47.8645416),
   new google.maps.LatLng(-15.7633343,-47.8611097),
   new google.maps.LatLng(-15.7625418,-47.8611955),
   new google.maps.LatLng(-15.7627148,-47.8604284),
   new google.maps.LatLng(-15.7638842,-47.8590283),
   new google.maps.LatLng(-15.763546,-47.8586876),
   new google.maps.LatLng(-15.7641526,-47.8580627)];
  
  var QUADRA_16 = [
  //Quadra  
   new google.maps.LatLng(-15.7635511,-47.858052),
   new google.maps.LatLng(-15.7623948,-47.857958),
   new google.maps.LatLng(-15.7623612,-47.8588191),
   new google.maps.LatLng(-15.7634969,-47.8589263),
   new google.maps.LatLng(-15.7635511,-47.858052)];
  
  var QUADRA_17 = [
  //Quadra  
   new google.maps.LatLng(-15.7632466,-47.8589103),
   new google.maps.LatLng(-15.7620746,-47.8588003),
   new google.maps.LatLng(-15.7620411,-47.8596211),
   new google.maps.LatLng(-15.7632027,-47.8597149),
   new google.maps.LatLng(-15.7632466,-47.8589103)];
  
  var QUADRA_18 = [
  //Quadra  
   new google.maps.LatLng(-15.7614938,-47.8593073),
   new google.maps.LatLng(-15.7618216,-47.8593234),
   new google.maps.LatLng(-15.7618475,-47.8587869),
   new google.maps.LatLng(-15.7615196,-47.8587628),
   new google.maps.LatLng(-15.7614938,-47.8593073)];
  
  var QUADRA_19 = [
  //Quadra  
   new google.maps.LatLng(-15.7606394,-47.8606886),
   new google.maps.LatLng(-15.7626038,-47.86082),
   new google.maps.LatLng(-15.762689,-47.8597551),
   new google.maps.LatLng(-15.7606755,-47.8595995),
   new google.maps.LatLng(-15.7606394,-47.8606886)];
  
  var QUADRA_20 = [
  //Quadra  
   new google.maps.LatLng(-15.7620437,-47.8608012),
   new google.maps.LatLng(-15.7601232,-47.8606027),
   new google.maps.LatLng(-15.7600457,-47.8621423),
   new google.maps.LatLng(-15.7619662,-47.8621799),
   new google.maps.LatLng(-15.7620437,-47.8608012)];
  
  var SUB_AREA_FEF_CO_4 = [
   new google.maps.LatLng(-15.7621934,-47.8578883),
   new google.maps.LatLng(-15.762547,-47.8579152),
   new google.maps.LatLng(-15.7625857,-47.8572553),
   new google.maps.LatLng(-15.7630969,-47.8572875),
   new google.maps.LatLng(-15.7631485,-47.8562549),
   new google.maps.LatLng(-15.7622811,-47.8561288),
   new google.maps.LatLng(-15.7621934,-47.8578883)];
  
  var QUADRA_9 = [
  //Quadra 
   new google.maps.LatLng(-15.7622851,-47.8567578),
   new google.maps.LatLng(-15.762285,-47.8569603),
   new google.maps.LatLng(-15.7626025,-47.8569683),
   new google.maps.LatLng(-15.7626077,-47.8567658),
   new google.maps.LatLng(-15.7622851,-47.8567578)];
  
  var QUADRA_10 = [
  //Quadra 
   new google.maps.LatLng(-15.7622747,-47.8567242),
   new google.maps.LatLng(-15.7625935,-47.8567363),
   new google.maps.LatLng(-15.7626051,-47.8565231),
   new google.maps.LatLng(-15.7622786,-47.8565003),
   new google.maps.LatLng(-15.7622747,-47.8567242)];
  
  var QUADRA_11 = [
  //Quadra 
   new google.maps.LatLng(-15.762738,-47.8569576),
   new google.maps.LatLng(-15.7627355,-47.8571883),
   new google.maps.LatLng(-15.7630452,-47.857191),
   new google.maps.LatLng(-15.7630504,-47.8569683),
   new google.maps.LatLng(-15.762738,-47.8569576)];
  
  var QUADRA_12 = [
  //Quadra 
   new google.maps.LatLng(-15.7627459,-47.8569522),
   new google.maps.LatLng(-15.7630582,-47.8569656),
   new google.maps.LatLng(-15.7630582,-47.8567537),
   new google.maps.LatLng(-15.762751,-47.856743),
   new google.maps.LatLng(-15.7627459,-47.8569522)];
  
  var QUADRA_13 = [
  //Quadra 
   new google.maps.LatLng(-15.7627613,-47.8567109),
   new google.maps.LatLng(-15.7630787,-47.8567243),
   new google.maps.LatLng(-15.7630917,-47.8565043),
   new google.maps.LatLng(-15.7627561,-47.8564936),
   new google.maps.LatLng(-15.7627613,-47.8567109)];
  
  var SUB_AREA_FEF_CO_5 = [
   new google.maps.LatLng(-15.7613932,-47.8568959),
   new google.maps.LatLng(-15.7618294,-47.8569308),
   new google.maps.LatLng(-15.7617649,-47.8578427),
   new google.maps.LatLng(-15.7621934,-47.8578883),
   new google.maps.LatLng(-15.7622811,-47.8561449),
   new google.maps.LatLng(-15.7614345,-47.8560162),
   new google.maps.LatLng(-15.7613932,-47.8568959)];
  
  var QUADRA_5 = [
  //Quadra 
   new google.maps.LatLng(-15.7613932,-47.8568959),
   new google.maps.LatLng(-15.7617546,-47.8569254),
   new google.maps.LatLng(-15.76177,-47.8566759),
   new google.maps.LatLng(-15.7613983,-47.8566572),
   new google.maps.LatLng(-15.7613932,-47.8568959)];
  
  var QUADRA_6 = [
  //Quadra 
   new google.maps.LatLng(-15.7614138,-47.8566357),
   new google.maps.LatLng(-15.76177,-47.8566759),
   new google.maps.LatLng(-15.7617804,-47.8564239),
   new google.maps.LatLng(-15.761419,-47.856389),
   new google.maps.LatLng(-15.7614138,-47.8566357)];
  
  var QUADRA_7 = [
  //Quadra 
   new google.maps.LatLng(-15.7618397,-47.8572044),
   new google.maps.LatLng(-15.7621986,-47.8572124),
   new google.maps.LatLng(-15.7622141,-47.8568879),
   new google.maps.LatLng(-15.7618733,-47.8568369),
   new google.maps.LatLng(-15.7618397,-47.8572044)];
  
  var QUADRA_8 = [
  //Quadra 
   new google.maps.LatLng(-15.7618733,-47.8568369),
   new google.maps.LatLng(-15.7622243,-47.8568637),
   new google.maps.LatLng(-15.7622424,-47.8565391),
   new google.maps.LatLng(-15.7618991,-47.856515),
   new google.maps.LatLng(-15.7618733,-47.8568369)];
  
  var SUB_AREA_FEF_CO_6 = [
   new google.maps.LatLng(-15.7613932,-47.8568959),
   new google.maps.LatLng(-15.7614345,-47.8560162),
   new google.maps.LatLng(-15.7587576,-47.8556581),
   new google.maps.LatLng(-15.7591499,-47.8579326),
   new google.maps.LatLng(-15.7617649,-47.858001),
   new google.maps.LatLng(-15.7617649,-47.8578427),
   new google.maps.LatLng(-15.7618294,-47.8569308),
   new google.maps.LatLng(-15.7613932,-47.8568959)];
  
  var QUADRA_1 = [
  //Quadra 
   new google.maps.LatLng(-15.7613442,-47.8579045),
   new google.maps.LatLng(-15.7617068,-47.8579326),
   new google.maps.LatLng(-15.7617119,-47.8576885),
   new google.maps.LatLng(-15.7613506,-47.857663),
   new google.maps.LatLng(-15.7613442,-47.8579045)];
  
  var QUADRA_2 = [
  //Quadra 
   new google.maps.LatLng(-15.7613467,-47.8576577),
   new google.maps.LatLng(-15.7617016,-47.857655),
   new google.maps.LatLng(-15.7617158,-47.8574163),
   new google.maps.LatLng(-15.7613505,-47.8574149),
   new google.maps.LatLng(-15.7613467,-47.8576577)];
  
  var QUADRA_3 = [
  //Quadra 
   new google.maps.LatLng(-15.7613544,-47.8573935),
   new google.maps.LatLng(-15.7617133,-47.8574136),
   new google.maps.LatLng(-15.7617262,-47.8571615),
   new google.maps.LatLng(-15.761357,-47.8571602),
   new google.maps.LatLng(-15.7613544,-47.8573935)];
  
  var QUADRA_4 = [
  //Quadra 
   new google.maps.LatLng(-15.761357,-47.8571602),
   new google.maps.LatLng(-15.7617262,-47.8571615),
   new google.maps.LatLng(-15.7617391,-47.8569281),
   new google.maps.LatLng(-15.7613725,-47.8568959),
   new google.maps.LatLng(-15.761357,-47.8571602)];
  //Vetor dos poligonos
  var poligonos = {
  //Campus Darcy Ribeiro - UnB
      1: new google.maps.Polygon({paths: Campus_DarcyRibeiro }),
  //�rea Instituto Central de Ci�ncias - Universidade de Bras�lia
      2: new google.maps.Polygon({paths: Area_ICC }),
  //Sub-�rea ICC Norte
      3: new google.maps.Polygon({paths: SubArea_ICC_Norte }),
  //Ala Norte do ICC
      4: new google.maps.Polygon({paths: ICC_Norte }),
  //Parada de �nibus ICC Norte
      5: new google.maps.Polygon({paths: P_Onibus_ICC_Norte }),
  //Estacionamento ICC Norte - UnB
      6: new google.maps.Polygon({paths: Estac_ICC_Norte }),
  //Sub-�rea de circula��o do ICC e RU - UnB
      7: new google.maps.Polygon({paths: SubArea_ICC_Centro_RU }),
  //Ala Central do ICC
      8: new google.maps.Polygon({paths: ICC_Centro }),
  //M�dulo de Atividades de Servi�o e Com�rcio Centro - UnB
      9: new google.maps.Polygon({paths: MASC_Centro }),
  //Parada de �nibus ICC Centro Norte
      10: new google.maps.Polygon({paths: P_Onibus_ICC_Centro_Norte }),
  //Restaurante Universit�rio - UnB
      11: new google.maps.Polygon({paths: RU }),
  //Centro de Conviv�ncia
      12: new google.maps.Polygon({paths: Centro_Convivencia }),
  //Sub-�rea ICC Sul
      13: new google.maps.Polygon({paths: SubArea_ICC_Sul }),
  //Ala Sul do ICC
      14: new google.maps.Polygon({paths: ICC_Sul }),
  //Estacionamento ICC Sul - UnB
      15: new google.maps.Polygon({paths: Estac_ICC_Sul }),
  //Parada de �nibus ICC Sul
      16: new google.maps.Polygon({paths: P_Onibus_ICC_Sul }),
  //Parada de �nibus ICC Centro/Sul
      17: new google.maps.Polygon({paths: P_Onibus_ICC_Centro_Sul }),
  //Parada de �nibus ICC Sul/FS
      18: new google.maps.Polygon({paths: P_Onibus_ICC_Sul_FS }),
  //�rea BCE, Reitoria e adjac�ncias
      19: new google.maps.Polygon({paths: Area_BCE_Reitoria }),
  //Sub-�rea BCE
      20: new google.maps.Polygon({paths: SubAreaBCE }),
  //Biblioteca Central Estudantil - UnB
      21: new google.maps.Polygon({paths: BCE }),
  //Estacionamento BCE - UnB
      22: new google.maps.Polygon({paths: Estac_BCE }),
  //Estacionamento para Servidores BCE
      23: new google.maps.Polygon({paths: Estac_BCE_Serv }),
  //Parada de �nibus BCE
      24: new google.maps.Polygon({paths: P_Onibus_BCE }),
  //Sub-�rea Reitoria
      25: new google.maps.Polygon({paths: SubAreaReitoria }),
  //Estacionamento BCE e Reitoria - UnB
      26: new google.maps.Polygon({paths: Estac_BCE_Reitoria }),
  //Reitoria da Universidade de Bras�lia
      27: new google.maps.Polygon({paths: Reitoria_UnB }),
  //Estacionamento Reitoria - UnB
      28: new google.maps.Polygon({paths: Estac_Reitoria }),
  //Paradas de �nibus Reitoria
      29: new google.maps.Polygon({paths: P_Onibus_Reitoria }),
  //Memorial Darcy Ribeiro - UnB
      30: new google.maps.Polygon({paths: Memorial_Darcy_Ribeiro }),
  //Trajeto de Pedestres e Ciclistas ICC, BCE e Reitoria
      31: new google.maps.Polygon({paths: SubArea_Circulacao_ICC_BCE_Reitoria }),
  //Teatro Arena Honestino Guimar�es
      32: new google.maps.Polygon({paths: TeatroArena_Honestino_Gimaraes }),
  //Trajetos Centrais BCE Reitoria
      33: new google.maps.Polygon({paths: Trajetos_Centrais_BCE_Reitoria }),
  //�rea PAT, PJC, IPol/IRel/CIC/Est
      34: new google.maps.Polygon({paths: Area_PAT_PJC_IPol_CIC }),
  //Sub-�rea PAT
      35: new google.maps.Polygon({paths: SubArea_PAT }),
  //Pavilh�o An�sio Teixeira - UnB
      36: new google.maps.Polygon({paths: PAT_UnB }),
  //Estacionamento Norte do PAT
      37: new google.maps.Polygon({paths: Estac_PAT_Norte }),
  //Estacionamento Oeste PAT
      38: new google.maps.Polygon({paths: Estac_PAT_Oeste }),
  //M�dulo de Atividades de Servi�o e Com�rcio Norte - UnB
      39: new google.maps.Polygon({paths: Masc_Norte }),
  //Acesso PAT Sul
      40: new google.maps.Polygon({paths: Acesso_PAT_PJC_Sul }),
  //Parada de Onibus PAT/PJC
      41: new google.maps.Polygon({paths: P_Onibus_PAT_PJC }),
  //Sub-�rea PJC
      42: new google.maps.Polygon({paths: SubArea_PJC }),
  //Pavilh�o Jo�o Calmon - UnB
      43: new google.maps.Polygon({paths: PJC_UnB }),
  //Estacionamento Sul do Pavilh�o Jo�o Calmon
      44: new google.maps.Polygon({paths: Estac_PJC_Sul }),
  //Estacionamento PAT PJC
      45: new google.maps.Polygon({paths: Estac_PAT_PJC }),
  //Estacionamento Norte PJC e PAT - UnB
      46: new google.maps.Polygon({paths: Estac_PJC_PAT_Norte }),
  //Estacionamento PJC, IPol e IRel
      47: new google.maps.Polygon({paths: Estac_PJC_IPol_IRel }),
  //Gramado em frente ao PJC
      48: new google.maps.Polygon({paths: Frente_PJC }),
  //Sub-�rea IPol/IRel/CIC/Est
      49: new google.maps.Polygon({paths: SubArea_IPol_IRel_CIC_Est }),
  //Institutos de Ci�ncia Pol�tica e Rela��es Internacionais - UnB
      50: new google.maps.Polygon({paths: IPol_IRel_UnB }),
  //Pr�dio de Ci�ncia da Computa��o e Estat�stica �- UnB
      51: new google.maps.Polygon({paths: CIC_Est_UnB }),
  //Estacionamento e acesso ao CIC/Est
      52: new google.maps.Polygon({paths: Estac_Acesso_CIC_Est }),
  //�rea do Centro Comunit�rio
      53: new google.maps.Polygon({paths: SubArea_Centro_Comunitario }),
  //Centro Comunit�rio Athos Bulc�o - UnB
      54: new google.maps.Polygon({paths: AthosBulcao }),
  //Estacionamento Centro Comunit�rio Athos Bulc�o
      55: new google.maps.Polygon({paths: Estac_Centro_Comunitario }),
  //Sub-�rea BAES e Almoxarifado
      56: new google.maps.Polygon({paths: SubArea_BAES_Almox }),
  //Almoxarifado
      57: new google.maps.Polygon({paths: Almoxarifado }),
  //Garagem e Oficina Mec�nica
      58: new google.maps.Polygon({paths: Garagem_Oficina }),
  //Bloco de Salas de Aula Eudoro de Souza
      59: new google.maps.Polygon({paths: BAES }),
  //Bloco de Salas de Aula Norte
      60: new google.maps.Polygon({paths: BSAN }),
  //Estacionamento BAES e BSAN
      61: new google.maps.Polygon({paths: Estac_BAES_BSAN }),
  //�rea PRC Colina FACE
      62: new google.maps.Polygon({paths: Area_PRC_Colina_FACE }),
  //Sub-�rea FACE ICS
      63: new google.maps.Polygon({paths: SubArea_FACE }),
  //Faculdade de Economia e Administra��o
      64: new google.maps.Polygon({paths: FACE }),
  //Faculdade de Direito
      65: new google.maps.Polygon({paths: FA }),
  //Estacionamento Face
      66: new google.maps.Polygon({paths: Estac_FACE }),
  //Estacionamento FA
      67: new google.maps.Polygon({paths: Estac_FA }),
  //Circula��o de pedestres FA
      68: new google.maps.Polygon({paths: Circulacao_Pedestres_FA }),
  //Instituto de Ci�ncias Sociais
      69: new google.maps.Polygon({paths: ICS }),
  //Sub-�rea PRC/Colina
      70: new google.maps.Polygon({paths: SubArea_PRC }),
  //Posto Petrobr�s
      71: new google.maps.Polygon({paths: PostoPetrobras }),
  //Parada de �nibus Posto
      72: new google.maps.Polygon({paths: P_Onibus_Posto }),
  //Prefeitura do Campus
      73: new google.maps.Polygon({paths: PRC }),
  //ASFUB
      74: new google.maps.Polygon({paths: ASFUB }),
  //UnB Colina�Blocos A, B, C, D e E
      75: new google.maps.Polygon({paths: SubArea_Colina_Blocos_ABCDE }),
  //Colina Bloco A
      76: new google.maps.Polygon({paths: Colina_Bloco_A }),
  //Colina Bloco B
      77: new google.maps.Polygon({paths: Colina_Bloco_B }),
  //Colina Bloco C
      78: new google.maps.Polygon({paths: Colina_Bloco_C }),
  //Colina Bloco D
      79: new google.maps.Polygon({paths: Colina_Bloco_D }),
  //Colina Bloco E
      80: new google.maps.Polygon({paths: Colina_Bloco_E }),
  //Colina Blocos F, G, H, I e J
      81: new google.maps.Polygon({paths: SubArea_Colina_Blocos_FGHIJ }),
  //Colina Bloco F
      82: new google.maps.Polygon({paths: Colina_Bloco_F }),
  //Colina Bloco G
      83: new google.maps.Polygon({paths: Colina_Bloco_G }),
  //Colina Bloco G
      84: new google.maps.Polygon({paths: Colina_Bloco_G }),
  //Colina Bloco I
      85: new google.maps.Polygon({paths: Colina_Bloco_I }),
  //Colina Bloco J
      86: new google.maps.Polygon({paths: Colina_Bloco_J }),
  //�rea dos SGs e Pr�dios das Artes
      87: new google.maps.Polygon({paths: Area_SGs_Artes_FT }),
  //Sub �rea de SGs_e_Artes_e_Ft, que contempla toda a �rea da Faculdade de Tecnologia
      88: new google.maps.Polygon({paths: SubArea_FT }),
  //FT - Faculdade de Tecnologia(pr�dio)
      89: new google.maps.Polygon({paths: FT }),
  //Estacionamento Secund�rio da FT
      90: new google.maps.Polygon({paths: Est_menor_FT }),
  //Estacionamento Principal da FT
      91: new google.maps.Polygon({paths: Est_maior_FT }),
  //Laborat�rio de Hidr�ulica e Estruturas
      92: new google.maps.Polygon({paths: Lab_de_Hidraulica_e_Estrut }),
  //Laborat�rio de Energia
      93: new google.maps.Polygon({paths: UnB_Lab_de_Energia }),
  //Passagem dos Pedestres da FT
      94: new google.maps.Polygon({paths: Passagem_Pedestres_FT }),
  //Sub �rea de�SGs_e_Artes_e_FT, mas representando apenas os SGs da m�sica
      95: new google.maps.Polygon({paths: SubArea_Musica }),
  //SG 2
      96: new google.maps.Polygon({paths: SG_2 }),
  //Audit�rio de M�sica
      97: new google.maps.Polygon({paths: Aud_de_Mus }),
  //Estacionamento do SG 2 e SG 8
      98: new google.maps.Polygon({paths: Est_SG2_8 }),
  //SG 8
      99: new google.maps.Polygon({paths: SG_8 }),
  //SG 10
      100: new google.maps.Polygon({paths: SG_10 }),
  //Estacionamento do SG 10
      101: new google.maps.Polygon({paths: Est_SG10 }),
  //Sub �rea dos�SGs_e_Artes_e_FT, mas apenas com os pr�dios da Artes
      102: new google.maps.Polygon({paths: SubArea_Artes }),
  //Instituto de Artes
      103: new google.maps.Polygon({paths: Inst_de_Artes }),
  //�rea da Concha Ac�stica e Pra�a da M�sica
      104: new google.maps.Polygon({paths: Concha_Praca }),
  //Departamento de Artes C�nicas
      105: new google.maps.Polygon({paths: Dep_de_Artes_Cen }),
  //Sub �rea de�SGs_e_Artes_e_FT, mas com �nfase nos SGs das Engenharias.
      106: new google.maps.Polygon({paths: SubArea_Engenharias }),
  //Estacionamento do SG 12
      107: new google.maps.Polygon({paths: Est_SG12 }),
  //SG 11
      108: new google.maps.Polygon({paths: SG_11 }),
  //Estacionamento do SG 9
      109: new google.maps.Polygon({paths: Est_SG9 }),
  //SG 12
      110: new google.maps.Polygon({paths: SG_12 }),
  //Estacionamento do SG 11
      111: new google.maps.Polygon({paths: Est_SG11 }),
  //SG 9
      112: new google.maps.Polygon({paths: SG_9 }),
  //Sub �rea de SGs_e_Artes_e_FT, mas com os pr�dios complementares, como Observat�rio Sismol�gico, APOSFUB, Associa��o dos Ex-Alunos da UnB e Retaurante
      113: new google.maps.Polygon({paths: SubArea_Complementares }),
  //Observat�rio Sismol�gico
      114: new google.maps.Polygon({paths: Obs_Sism }),
  //Associa��o dos Aposentados da FUB/Associa��o dos Ex-Alunos
      115: new google.maps.Polygon({paths: APOSFUB_EX_UNB }),
  //Restaurante da ADUnB
      116: new google.maps.Polygon({paths: Rest_ADUnB }),
  //�rea dos Pr�dios da Educa��o/Bancos/Correio
      117: new google.maps.Polygon({paths: Educacao }),
  //Sub �rea da educa��o com os principais pr�dios, Faculdade de Educa��o, Departamento de M�todos e T�cnicas...
      118: new google.maps.Polygon({paths: SubArea_Principal }),
  //Castelo D'�gua
      119: new google.maps.Polygon({paths: Cast_dAgua }),
  //Estacionamento da Faculdade de Educa��o
      120: new google.maps.Polygon({paths: Est_FE }),
  //Faculdade de Educa��o
      121: new google.maps.Polygon({paths: FE }),
  //Audit�rio Dois Candangos
      122: new google.maps.Polygon({paths: Aud_dois_Cand }),
  //Departamento de Planejamento e Admnistra��o
      123: new google.maps.Polygon({paths: Dep_de_Planej_e_Adm }),
  //Departamento de M�todos e T�cnicas
      124: new google.maps.Polygon({paths: Dep_de_Met_e_Tec }),
  //Sub �rea da educa��o com o pr�dio do BSAS, os bancos, e a quadra
      125: new google.maps.Polygon({paths: SubArea_BSAS_e_Bancos }),
  //Banco Santander
      126: new google.maps.Polygon({paths: Banco_Santander }),
  //Quadra Jos� Hon�rio
      127: new google.maps.Polygon({paths: Quadra_Jose }),
  //Bloco de Salas Sul
      128: new google.maps.Polygon({paths: BSAS }),
  //Estacionamento do Pr�dio do�<br>Departamento de Metodos e T�cnicas
      129: new google.maps.Polygon({paths: Est_Dep_de_Met_e_Tec }),
  //N�cleo de Ensino e Pesquisa em Portugu�s para Estrangeiros - NEPPE
      130: new google.maps.Polygon({paths: NEEPE }),
  //Sub �rea da Educa��o com os Pr�dios do Turismo, da Fiocruz, e do Pavilh�o Multiuso
      131: new google.maps.Polygon({paths: SubArea_Turismo }),
  //Pavilh�o Multiuso II
      132: new google.maps.Polygon({paths: PMU_II }),
  //Passagem dos Pedestres da UnB
      133: new google.maps.Polygon({paths: Passagem_dos_Pedestres }),
  //Estacionamento Centro de �Excel�ncia em Turismo
      134: new google.maps.Polygon({paths: Est_CET }),
  //Centro de Excel�ncia em Turismo
      135: new google.maps.Polygon({paths: CET }),
  //Funda��o Oswaldo Cruz
      136: new google.maps.Polygon({paths: Fiocruz }),
  //Pr�dios Anexos � UnB como FUBRA, FINATEC, AUTOTRAC, CDT, CRAD, entre outros...
      137: new google.maps.Polygon({paths: Area_Anexos_UnB }),
  //Sub �rea 1 dos anexos da UnB
      138: new google.maps.Polygon({paths: SubArea_Anexos_1 }),
  //�rea da Autotrac
      139: new google.maps.Polygon({paths: Autotrac }),
  //�rea da Finatec
      140: new google.maps.Polygon({paths: Finatec }),
  //Estacionamento da Finatec
      141: new google.maps.Polygon({paths: Est_Finatec }),
  //Anexo do pr�dio da Finatec
      142: new google.maps.Polygon({paths: Anexo_Finatec }),
  //Funda��o Universit�ria de Bras�lia
      143: new google.maps.Polygon({paths: FUBRA }),
  //Sub �rea 2 de�Anexos_Unb
      144: new google.maps.Polygon({paths: SubArea_Anexos_2 }),
  //CDT - Centro de Desenvolvimento Tecnol�gico
      145: new google.maps.Polygon({paths: CDT }),
  //Estacionamento do CDT
      146: new google.maps.Polygon({paths: Est_CDT }),
  //Centro Interdisciplinar de Estudos em Transportes
      147: new google.maps.Polygon({paths: CEFTRU }),
  //Anexo do pr�dio CEFTRU
      148: new google.maps.Polygon({paths: Anexo_CEFTRU }),
  //Pr�dio do CME
      149: new google.maps.Polygon({paths: CME }),
  //Estacionamento Comunit�rio dos pr�dios CEFTRU e CME
      150: new google.maps.Polygon({paths: Est_CEFTRU_e_CME }),
  //Sub �rea 3 de Anexos_UnB
      151: new google.maps.Polygon({paths: SubArea_Anexos_3 }),
  //N�cleo de Medicina Tropical
      152: new google.maps.Polygon({paths: NMT }),
  //Laborat�rio de Estudos Geodin�micos e Ambientais
      153: new google.maps.Polygon({paths: Lab_Est_Geo_e_Amb }),
  //Laborat�rio de Termobiologia
      154: new google.maps.Polygon({paths: Lab_de_Term }),
  //CRAD - Centro de Refer�ncia em Conserva��o da Natureza e Recupera��o de �reas Degradadas
      155: new google.maps.Polygon({paths: CRAD }),
  //�rea entre L2 e L3
      156: new google.maps.Polygon({paths: Area_L2_e_L3 }),
  //Quadra 605 entre a L2 e a L3
      157: new google.maps.Polygon({paths: SubArea_605 }),
  //HUB - Hospital Universit�rio de Bras�lia
      158: new google.maps.Polygon({paths: HUB }),
  //Ambulat�rio 1
      159: new google.maps.Polygon({paths: Amb1 }),
  //Ambulat�rio 2
      160: new google.maps.Polygon({paths: Amb2 }),
  //Estacionamento dos Ambulat�rios
      161: new google.maps.Polygon({paths: Est_Amb }),
  //Cl�nica Odontol�gica e Farm�cia Escola
      162: new google.maps.Polygon({paths: Odonto }),
  //Estacionamento Cl�nica Odontol�gica e Farm�cia Escola
      163: new google.maps.Polygon({paths: Est_Odonto }),
  //Quadra 604 entre a L2 e a L3
      164: new google.maps.Polygon({paths: SubArea_604 }),
  //Estacionamento do HUB
      165: new google.maps.Polygon({paths: HUB_Est }),
  //Quadras 606 e 607 entre a L2 e a L3
      166: new google.maps.Polygon({paths: SubArea_606_607 }),
  //Passagem dos Alunos da UnB
      167: new google.maps.Polygon({paths: Pass_Alu_UnB }),
  //Quadras 602 e 603 entre a L2 e a L3
      168: new google.maps.Polygon({paths: SubArea_602_603 }),
  //Quadras 608 e 609 entre a L2 e a L3
      169: new google.maps.Polygon({paths: SubArea_608_609 }),
  //Quadras 610,611 e 612 entre a L2 e a L3
      170: new google.maps.Polygon({paths: SubArea_610_611_612 }),
  //�rea Arboreto e Bot�nica e Veterin�ria
      171: new google.maps.Polygon({paths: Area_Arboreto_Botanica_Vet }),
  //Sub-�rea da UnB voltada para o cultivo de plantas
      172: new google.maps.Polygon({paths: SubArea_Botanica }),
  //Casas de Vegeta��o - Fitopatologia
      173: new google.maps.Polygon({paths: Fitopatologia }),
  //Estufa para cultivo das plantas
      174: new google.maps.Polygon({paths: Estufa }),
  //Hospital Veterin�rio da UnB
      175: new google.maps.Polygon({paths: Hospital_Vet }),
  //�rea Ci�ncias Biol�gicas, Qu�micas e de Sa�de, CPD e CESPE
      176: new google.maps.Polygon({paths: Area_Bio_Quim_Saude_CESPE }),
  //Faculdade de Sa�de e Instituto de Qu�mica
      177: new google.maps.Polygon({paths: SubArea_FS_Quimica }),
  //Instituto de Qu�mica
      178: new google.maps.Polygon({paths: Instituto_Quimica }),
  //Estacionamento do Instituto de Qu�mica
      179: new google.maps.Polygon({paths: Estacionamento_IQ }),
  //Faculdade de S�ude/Faculdade de Medicina
      180: new google.maps.Polygon({paths: Faculdade_de_saude }),
  //Estacionamento da Faculdade de Sa�de/Faculdade de Medicina
      181: new google.maps.Polygon({paths: Estacionamento_FS_1 }),
  //MASC Sul
      182: new google.maps.Polygon({paths: MASC_Sul }),
  //Ponto de �nibus da Faculdade de S�ude/Faculdade de Medicina
      183: new google.maps.Polygon({paths: P_Onibus_FS }),
  //Sub-�rea BIO FS
      184: new google.maps.Polygon({paths: SUB_AREA_BIOLOGICAS_FS }),
  //Instituto de Ci�ncias Biol�gicas
      185: new google.maps.Polygon({paths: Instituto_Biologia }),
  //Estacionamento do Instituto de Biologia
      186: new google.maps.Polygon({paths: Estacionamento_IB }),
  //Estacionamento da Faculdade de Sa�de/Faculdade de Medicina
      187: new google.maps.Polygon({paths: Estacionamento_FS_2 }),
  //Bloco de salas ala sul
      188: new google.maps.Polygon({paths: BSA_Sul }),
  //Estacionamento do BSA Sul e Instituto de Ci�ncias Biol�gicas
      189: new google.maps.Polygon({paths: Estacionamento_bsa_sul_ib }),
  //Centro de Inform�tica e�Centro de Sele��o e de Promo��o de Eventos
      190: new google.maps.Polygon({paths: SubArea_CPD_CESPE }),
  //Centro de Inform�tica
      191: new google.maps.Polygon({paths: CPD }),
  //Estacionamento do Centro de Infom�tica
      192: new google.maps.Polygon({paths: Estacionamento_cpd }),
  //Centro de Sele��o e de Promo��o de Eventos
      193: new google.maps.Polygon({paths: CESPE }),
  //Estacionamento do CESPE
      194: new google.maps.Polygon({paths: Estacionamento_CESPE_1 }),
  //Estacionamento do CESPE
      195: new google.maps.Polygon({paths: Estacionamento_CESPE_2 }),
  //Estacionamento do Cespe
      196: new google.maps.Polygon({paths: Estacionamento_CESPE_3 }),
  //Ponto de �nibus do CESPE e CPD
      197: new google.maps.Polygon({paths: P_Onibus_CESPE_CPD }),
  //Centro Ol�mpico�
      198: new google.maps.Polygon({paths: Area_Centro_Olimpico }),
  //SUB_AREA_FEF_CO_1
      199: new google.maps.Polygon({paths: SUB_AREA_FEF_CO_1 }),
  //Faculdade de Educa��o F�sica
      200: new google.maps.Polygon({paths: FEF }),
  //Estacionamento FEF
      201: new google.maps.Polygon({paths: ESTACIONAMENTO_FEF }),
  //Estacionamento do CO
      202: new google.maps.Polygon({paths: ESTACIONAMENTO_CO }),
  //Quadras
      203: new google.maps.Polygon({paths: QUADRAS_15 }),
  //SUB_AREA_FEF_CO_2
      204: new google.maps.Polygon({paths: SUB_AREA_FEF_CO_2 }),
  //Casa do Estudante
      205: new google.maps.Polygon({paths: CEU_1 }),
  //Casa do Estudante
      206: new google.maps.Polygon({paths: CEU_2 }),
  //Centro Ol�mpico
      207: new google.maps.Polygon({paths: CENTRO_OLIMPICO }),
  //V�rias quadras
      208: new google.maps.Polygon({paths: QUADRA_14 }),
  //SUB_AREA_FEF_CO_3
      209: new google.maps.Polygon({paths: SUB_AREA_FEF_CO_3 }),
  //Quadra
      210: new google.maps.Polygon({paths: QUADRA_16 }),
  //Quadra
      211: new google.maps.Polygon({paths: QUADRA_17 }),
  //Quadra
      212: new google.maps.Polygon({paths: QUADRA_18 }),
  //Quadra
      213: new google.maps.Polygon({paths: QUADRA_19 }),
  //Quadra
      214: new google.maps.Polygon({paths: QUADRA_20 }),
  //SUB_AREA_FEF_CO_4
      215: new google.maps.Polygon({paths: SUB_AREA_FEF_CO_4 }),
  //Quadra
      216: new google.maps.Polygon({paths: QUADRA_9 }),
  //Quadra
      217: new google.maps.Polygon({paths: QUADRA_10 }),
  //Quadra
      218: new google.maps.Polygon({paths: QUADRA_11 }),
  //Quadra
      219: new google.maps.Polygon({paths: QUADRA_12 }),
  //Quadra
      220: new google.maps.Polygon({paths: QUADRA_13 }),
  //SUB_AREA_FEF_CO_5
      221: new google.maps.Polygon({paths: SUB_AREA_FEF_CO_5 }),
  //Quadra
      222: new google.maps.Polygon({paths: QUADRA_5 }),
  //Quadra
      223: new google.maps.Polygon({paths: QUADRA_6 }),
  //Quadra
      224: new google.maps.Polygon({paths: QUADRA_7 }),
  //Quadra
      225: new google.maps.Polygon({paths: QUADRA_8 }),
  //SUB_AREA_FEF_CO_6
      226: new google.maps.Polygon({paths: SUB_AREA_FEF_CO_6 }),
  //Quadra
      227: new google.maps.Polygon({paths: QUADRA_1 }),
  //Quadra
      228: new google.maps.Polygon({paths: QUADRA_2 }),
  //Quadra
      229: new google.maps.Polygon({paths: QUADRA_3 }),
  //Quadra
      230: new google.maps.Polygon({paths: QUADRA_4 })
  }
  
  idLocal = 0;
  //Campus_DarcyRibeiro
  if (google.maps.geometry.poly.containsLocation(local, poligonos[1]) ?
    true:
    false){
    idLocal = 1;
    //Area_ICC
    if (google.maps.geometry.poly.containsLocation(local, poligonos[2]) ?
      true:
      false){
      idLocal = 2;
      //SubArea_ICC_Norte
      if (google.maps.geometry.poly.containsLocation(local, poligonos[3]) ?
        true:
        false){
        idLocal = 3;
        //ICC_Norte
        if (google.maps.geometry.poly.containsLocation(local, poligonos[4]) ?
          true:
          false){
          idLocal = 4;
        //P_Onibus_ICC_Norte
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[5]) ?
          true:
          false){
          idLocal = 5;
        //Estac_ICC_Norte
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[6]) ?
          true:
          false){
          idLocal = 6;
        }
      
      //SubArea_ICC_Centro_RU
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[7]) ?
        true:
        false){
        idLocal = 7;
        //ICC_Centro
        if (google.maps.geometry.poly.containsLocation(local, poligonos[8]) ?
          true:
          false){
          idLocal = 8;
        //MASC_Centro
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[9]) ?
          true:
          false){
          idLocal = 9;
        //P_Onibus_ICC_Centro_Norte
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[10]) ?
          true:
          false){
          idLocal = 10;
        //RU
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[11]) ?
          true:
          false){
          idLocal = 11;
        //Centro_Convivencia
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[12]) ?
          true:
          false){
          idLocal = 12;
        }
      //SubArea_ICC_Sul
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[13]) ?
        true:
        false){
        idLocal = 13;
        //ICC_Sul
        if (google.maps.geometry.poly.containsLocation(local, poligonos[14]) ?
          true:
          false){
          idLocal = 14;
        //Estac_ICC_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[15]) ?
          true:
          false){
          idLocal = 15;
        //P_Onibus_ICC_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[16]) ?
          true:
          false){
          idLocal = 16;
        //P_Onibus_ICC_Centro_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[17]) ?
          true:
          false){
          idLocal = 17;
        //P_Onibus_ICC_Sul_FS
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[18]) ?
          true:
          false){
          idLocal = 18;
        }
      }
    //Area_BCE_Reitoria
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[19]) ?
      true:
      false){
      idLocal = 19;
      //SubAreaBCE
      if (google.maps.geometry.poly.containsLocation(local, poligonos[20]) ?
        true:
        false){
        idLocal = 20;
        //BCE
        if (google.maps.geometry.poly.containsLocation(local, poligonos[21]) ?
          true:
          false){
          idLocal = 21;
        //Estac_BCE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[22]) ?
          true:
          false){
          idLocal = 22;
        //Estac_BCE_Serv
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[23]) ?
          true:
          false){
          idLocal = 23;
        //P_Onibus_BCE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[24]) ?
          true:
          false){
          idLocal = 24;
        }
      //SubAreaReitoria
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[25]) ?
        true:
        false){
        idLocal = 25;
        //Estac_BCE_Reitoria
        if (google.maps.geometry.poly.containsLocation(local, poligonos[26]) ?
          true:
          false){
          idLocal = 26;
        //Reitoria_UnB
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[27]) ?
          true:
          false){
          idLocal = 27;
        //Estac_Reitoria
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[28]) ?
          true:
          false){
          idLocal = 28;
        //P_Onibus_Reitoria
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[29]) ?
          true:
          false){
          idLocal = 29;
        //Memorial_Darcy_Ribeiro
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[30]) ?
          true:
          false){
          idLocal = 30;
        }
      //SubArea_Circulacao_ICC_BCE_Reitoria
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[31]) ?
        true:
        false){
        idLocal = 31;
        //TeatroArena_Honestino_Gimaraes
        if (google.maps.geometry.poly.containsLocation(local, poligonos[32]) ?
          true:
          false){
          idLocal = 32;
        //Trajetos_Centrais_BCE_Reitoria
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[33]) ?
          true:
          false){
          idLocal = 33;
        }
      }
    //Area_PAT_PJC_IPol_CIC
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[34]) ?
      true:
      false){
      idLocal = 34;
      //SubArea_PAT
      if (google.maps.geometry.poly.containsLocation(local, poligonos[35]) ?
        true:
        false){
        idLocal = 35;
        //PAT_UnB
        if (google.maps.geometry.poly.containsLocation(local, poligonos[36]) ?
          true:
          false){
          idLocal = 36;
        //Estac_PAT_Norte
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[37]) ?
          true:
          false){
          idLocal = 37;
        //Estac_PAT_Oeste
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[38]) ?
          true:
          false){
          idLocal = 38;
        //Masc_Norte
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[39]) ?
          true:
          false){
          idLocal = 39;
        //Acesso_PAT_PJC_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[40]) ?
          true:
          false){
          idLocal = 40;
        //P_Onibus_PAT_PJC
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[41]) ?
          true:
          false){
          idLocal = 41;
        }
      //SubArea_PJC
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[42]) ?
        true:
        false){
        idLocal = 42;
        //PJC_UnB
        if (google.maps.geometry.poly.containsLocation(local, poligonos[43]) ?
          true:
          false){
          idLocal = 43;
        //Estac_PJC_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[44]) ?
          true:
          false){
          idLocal = 44;
        //Estac_PAT_PJC
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[45]) ?
          true:
          false){
          idLocal = 45;
        //Estac_PJC_PAT_Norte
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[46]) ?
          true:
          false){
          idLocal = 46;
        //Estac_PJC_IPol_IRel
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[47]) ?
          true:
          false){
          idLocal = 47;
        //Frente_PJC
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[48]) ?
          true:
          false){
          idLocal = 48;
        }
      //SubArea_IPol_IRel_CIC_Est
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[49]) ?
        true:
        false){
        idLocal = 49;
        //IPol_IRel_UnB
        if (google.maps.geometry.poly.containsLocation(local, poligonos[50]) ?
          true:
          false){
          idLocal = 50;
        //CIC_Est_UnB
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[51]) ?
          true:
          false){
          idLocal = 51;
        //Estac_Acesso_CIC_Est
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[52]) ?
          true:
          false){
          idLocal = 52;
        }
      //SubArea_Centro_Comunitario
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[53]) ?
        true:
        false){
        idLocal = 53;
        //AthosBulcao
        if (google.maps.geometry.poly.containsLocation(local, poligonos[54]) ?
          true:
          false){
          idLocal = 54;
        //Estac_Centro_Comunitario
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[55]) ?
          true:
          false){
          idLocal = 55;
        }
      //SubArea_BAES_Almox
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[56]) ?
        true:
        false){
        idLocal = 56;
        //Almoxarifado
        if (google.maps.geometry.poly.containsLocation(local, poligonos[57]) ?
          true:
          false){
          idLocal = 57;
        //Garagem_Oficina
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[58]) ?
          true:
          false){
          idLocal = 58;
        //BAES
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[59]) ?
          true:
          false){
          idLocal = 59;
        //BSAN
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[60]) ?
          true:
          false){
          idLocal = 60;
        //Estac_BAES_BSAN
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[61]) ?
          true:
          false){
          idLocal = 61;
        }
      }
    //Area_PRC_Colina_FACE
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[62]) ?
      true:
      false){
      idLocal = 62;
      //SubArea_FACE
      if (google.maps.geometry.poly.containsLocation(local, poligonos[63]) ?
        true:
        false){
        idLocal = 63;
        //FACE
        if (google.maps.geometry.poly.containsLocation(local, poligonos[64]) ?
          true:
          false){
          idLocal = 64;
        //FA
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[65]) ?
          true:
          false){
          idLocal = 65;
        //Estac_FACE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[66]) ?
          true:
          false){
          idLocal = 66;
        //Estac_FA
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[67]) ?
          true:
          false){
          idLocal = 67;
        //Circulacao_Pedestres_FA
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[68]) ?
          true:
          false){
          idLocal = 68;
        //ICS
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[69]) ?
          true:
          false){
          idLocal = 69;
        }
      //SubArea_PRC
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[70]) ?
        true:
        false){
        idLocal = 70;
        //PostoPetrobras
        if (google.maps.geometry.poly.containsLocation(local, poligonos[71]) ?
          true:
          false){
          idLocal = 71;
        //P_Onibus_Posto
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[72]) ?
          true:
          false){
          idLocal = 72;
        //PRC
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[73]) ?
          true:
          false){
          idLocal = 73;
        //ASFUB
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[74]) ?
          true:
          false){
          idLocal = 74;
        }
      //SubArea_Colina_Blocos_ABCDE
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[75]) ?
        true:
        false){
        idLocal = 75;
        //Colina_Bloco_A
        if (google.maps.geometry.poly.containsLocation(local, poligonos[76]) ?
          true:
          false){
          idLocal = 76;
        //Colina_Bloco_B
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[77]) ?
          true:
          false){
          idLocal = 77;
        //Colina_Bloco_C
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[78]) ?
          true:
          false){
          idLocal = 78;
        //Colina_Bloco_D
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[79]) ?
          true:
          false){
          idLocal = 79;
        //Colina_Bloco_E
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[80]) ?
          true:
          false){
          idLocal = 80;
        }
      //SubArea_Colina_Blocos_FGHIJ
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[81]) ?
        true:
        false){
        idLocal = 81;
        //Colina_Bloco_F
        if (google.maps.geometry.poly.containsLocation(local, poligonos[82]) ?
          true:
          false){
          idLocal = 82;
        //Colina_Bloco_G
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[83]) ?
          true:
          false){
          idLocal = 83;
        //Colina_Bloco_G
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[84]) ?
          true:
          false){
          idLocal = 84;
        //Colina_Bloco_I
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[85]) ?
          true:
          false){
          idLocal = 85;
        //Colina_Bloco_J
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[86]) ?
          true:
          false){
          idLocal = 86;
        }
      }
    //Area_SGs_Artes_FT
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[87]) ?
      true:
      false){
      idLocal = 87;
      //SubArea_FT
      if (google.maps.geometry.poly.containsLocation(local, poligonos[88]) ?
        true:
        false){
        idLocal = 88;
        //FT
        if (google.maps.geometry.poly.containsLocation(local, poligonos[89]) ?
          true:
          false){
          idLocal = 89;
        //Est_menor_FT
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[90]) ?
          true:
          false){
          idLocal = 90;
        //Est_maior_FT
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[91]) ?
          true:
          false){
          idLocal = 91;
        //Lab_de_Hidraulica_e_Estrut
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[92]) ?
          true:
          false){
          idLocal = 92;
        //UnB_Lab_de_Energia
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[93]) ?
          true:
          false){
          idLocal = 93;
        //Passagem_Pedestres_FT
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[94]) ?
          true:
          false){
          idLocal = 94;
        }
      //SubArea_Musica
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[95]) ?
        true:
        false){
        idLocal = 95;
        //SG_2
        if (google.maps.geometry.poly.containsLocation(local, poligonos[96]) ?
          true:
          false){
          idLocal = 96;
        //Aud_de_Mus
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[97]) ?
          true:
          false){
          idLocal = 97;
        //Est_SG2/8
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[98]) ?
          true:
          false){
          idLocal = 98;
        //SG_8
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[99]) ?
          true:
          false){
          idLocal = 99;
        //SG_10
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[100]) ?
          true:
          false){
          idLocal = 100;
        //Est_SG10
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[101]) ?
          true:
          false){
          idLocal = 101;
        }
      //SubArea_Artes
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[102]) ?
        true:
        false){
        idLocal = 102;
        //Inst_de_Artes
        if (google.maps.geometry.poly.containsLocation(local, poligonos[103]) ?
          true:
          false){
          idLocal = 103;
        //Concha_Praca
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[104]) ?
          true:
          false){
          idLocal = 104;
        //Dep_de_Artes_Cen
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[105]) ?
          true:
          false){
          idLocal = 105;
        }
      //SubArea_Engenharias
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[106]) ?
        true:
        false){
        idLocal = 106;
        //Est_SG12
        if (google.maps.geometry.poly.containsLocation(local, poligonos[107]) ?
          true:
          false){
          idLocal = 107;
        //SG_11
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[108]) ?
          true:
          false){
          idLocal = 108;
        //Est_SG9
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[109]) ?
          true:
          false){
          idLocal = 109;
        //SG_12
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[110]) ?
          true:
          false){
          idLocal = 110;
        //Est_SG11
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[111]) ?
          true:
          false){
          idLocal = 111;
        //SG_9
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[112]) ?
          true:
          false){
          idLocal = 112;
        }
      //SubArea_Complementares
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[113]) ?
        true:
        false){
        idLocal = 113;
        //Obs_Sism
        if (google.maps.geometry.poly.containsLocation(local, poligonos[114]) ?
          true:
          false){
          idLocal = 114;
        //APOSFUB/EX_UNB
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[115]) ?
          true:
          false){
          idLocal = 115;
        //Rest_ADUnB
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[116]) ?
          true:
          false){
          idLocal = 116;
        }
      }
    //Area Educacao
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[117]) ?
      true:
      false){
      idLocal = 117;
      //SubArea_Principal
      if (google.maps.geometry.poly.containsLocation(local, poligonos[118]) ?
        true:
        false){
        idLocal = 118;
        //Cast_d'Agua
        if (google.maps.geometry.poly.containsLocation(local, poligonos[119]) ?
          true:
          false){
          idLocal = 119;
        //Est_FE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[120]) ?
          true:
          false){
          idLocal = 120;
        //FE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[121]) ?
          true:
          false){
          idLocal = 121;
        //Aud_dois_Cand
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[122]) ?
          true:
          false){
          idLocal = 122;
        //Dep_de_Planej_e_Adm
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[123]) ?
          true:
          false){
          idLocal = 123;
        //Dep_de_Met_e_Tec
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[124]) ?
          true:
          false){
          idLocal = 124;
        }
      //SubArea_BSAS_e_Bancos
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[125]) ?
        true:
        false){
        idLocal = 125;
        //Banco_Santander
        if (google.maps.geometry.poly.containsLocation(local, poligonos[126]) ?
          true:
          false){
          idLocal = 126;
        //Quadra_Jose
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[127]) ?
          true:
          false){
          idLocal = 127;
        //BSAS
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[128]) ?
          true:
          false){
          idLocal = 128;
        //Est_Dep_de_Met_e_Tec
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[129]) ?
          true:
          false){
          idLocal = 129;
        //NEEPE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[130]) ?
          true:
          false){
          idLocal = 130;
        }
      //SubArea_Turismo
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[131]) ?
        true:
        false){
        idLocal = 131;
        //PMU_II
        if (google.maps.geometry.poly.containsLocation(local, poligonos[132]) ?
          true:
          false){
          idLocal = 132;
        //Passagem_dos_Pedestres
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[133]) ?
          true:
          false){
          idLocal = 133;
        //Est_CET
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[134]) ?
          true:
          false){
          idLocal = 134;
        //CET
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[135]) ?
          true:
          false){
          idLocal = 135;
        //Fiocruz
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[136]) ?
          true:
          false){
          idLocal = 136;
        }
      }
    //Area_Anexos_UnB
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[137]) ?
      true:
      false){
      idLocal = 137;
      //SubArea_Anexos_1
      if (google.maps.geometry.poly.containsLocation(local, poligonos[138]) ?
        true:
        false){
        idLocal = 138;
        //Autotrac
        if (google.maps.geometry.poly.containsLocation(local, poligonos[139]) ?
          true:
          false){
          idLocal = 139;
        //Finatec
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[140]) ?
          true:
          false){
          idLocal = 140;
        //Est_Finatec
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[141]) ?
          true:
          false){
          idLocal = 141;
        //Anexo_Finatec
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[142]) ?
          true:
          false){
          idLocal = 142;
        //FUBRA
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[143]) ?
          true:
          false){
          idLocal = 143;
        }
      //SubArea_Anexos_2
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[144]) ?
        true:
        false){
        idLocal = 144;
        //CDT
        if (google.maps.geometry.poly.containsLocation(local, poligonos[145]) ?
          true:
          false){
          idLocal = 145;
        //Est_CDT
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[146]) ?
          true:
          false){
          idLocal = 146;
        //CEFTRU
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[147]) ?
          true:
          false){
          idLocal = 147;
        //Anexo_CEFTRU
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[148]) ?
          true:
          false){
          idLocal = 148;
        //CME
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[149]) ?
          true:
          false){
          idLocal = 149;
        //Est_CEFTRU_e_CME
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[150]) ?
          true:
          false){
          idLocal = 150;
        }
      //SubArea_Anexos_3
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[151]) ?
        true:
        false){
        idLocal = 151;
        //NMT
        if (google.maps.geometry.poly.containsLocation(local, poligonos[152]) ?
          true:
          false){
          idLocal = 152;
        //Lab_Est_Geo_e_Amb
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[153]) ?
          true:
          false){
          idLocal = 153;
        //Lab_de_Term
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[154]) ?
          true:
          false){
          idLocal = 154;
        //CRAD
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[155]) ?
          true:
          false){
          idLocal = 155;
        }
      }
    //Area_L2_e_L3
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[156]) ?
      true:
      false){
      idLocal = 156;
      //SubArea_605
      if (google.maps.geometry.poly.containsLocation(local, poligonos[157]) ?
        true:
        false){
        idLocal = 157;
        //HUB
        if (google.maps.geometry.poly.containsLocation(local, poligonos[158]) ?
          true:
          false){
          idLocal = 158;
        //Amb1
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[159]) ?
          true:
          false){
          idLocal = 159;
        //Amb2
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[160]) ?
          true:
          false){
          idLocal = 160;
        //Est_Amb
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[161]) ?
          true:
          false){
          idLocal = 161;
        //Odonto
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[162]) ?
          true:
          false){
          idLocal = 162;
        //Est_Odonto
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[163]) ?
          true:
          false){
          idLocal = 163;
        }
      //SubArea_604
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[164]) ?
        true:
        false){
        idLocal = 164;
        //HUB_Est
        if (google.maps.geometry.poly.containsLocation(local, poligonos[165]) ?
          true:
          false){
          idLocal = 165;
        }
      //SubArea_606/607
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[166]) ?
        true:
        false){
        idLocal = 166;
        //Pass_Alu_UnB
        if (google.maps.geometry.poly.containsLocation(local, poligonos[167]) ?
          true:
          false){
          idLocal = 167;
        }
      //SubArea_602/603
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[168]) ?
        true:
        false){
        idLocal = 168;
      //SubArea_608/609
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[169]) ?
        true:
        false){
        idLocal = 169;
      //SubArea_610/611/612
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[170]) ?
        true:
        false){
        idLocal = 170;
      }
    //Area_Arboreto_Botanica_Vet
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[171]) ?
      true:
      false){
      idLocal = 171;
      //SubArea_Botanica
      if (google.maps.geometry.poly.containsLocation(local, poligonos[172]) ?
        true:
        false){
        idLocal = 172;
        //Fitopatologia
        if (google.maps.geometry.poly.containsLocation(local, poligonos[173]) ?
          true:
          false){
          idLocal = 173;
        //Estufa
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[174]) ?
          true:
          false){
          idLocal = 174;
        }
      //Hospital_Vet
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[175]) ?
        true:
        false){
        idLocal = 175;
      }
    //Area_Bio_Quim_Saude_CESPE
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[176]) ?
      true:
      false){
      idLocal = 176;
      //SubArea_FS_Quimica
      if (google.maps.geometry.poly.containsLocation(local, poligonos[177]) ?
        true:
        false){
        idLocal = 177;
        //Instituto_Quimica
        if (google.maps.geometry.poly.containsLocation(local, poligonos[178]) ?
          true:
          false){
          idLocal = 178;
        //Estacionamento_IQ
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[179]) ?
          true:
          false){
          idLocal = 179;
        //Faculdade_de_saude
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[180]) ?
          true:
          false){
          idLocal = 180;
        //Estacionamento_FS_1
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[181]) ?
          true:
          false){
          idLocal = 181;
        //MASC_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[182]) ?
          true:
          false){
          idLocal = 182;
        //Ponto_Onibus
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[183]) ?
          true:
          false){
          idLocal = 183;
        }
      //SUB_AREA_BIOLOGICAS_FS
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[184]) ?
        true:
        false){
        idLocal = 184;
        //Instituto_Biologia
        if (google.maps.geometry.poly.containsLocation(local, poligonos[185]) ?
          true:
          false){
          idLocal = 185;
        //Estacionamento_IB
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[186]) ?
          true:
          false){
          idLocal = 186;
        //Estacionamento_FS_2
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[187]) ?
          true:
          false){
          idLocal = 187;
        //BSA_Sul
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[188]) ?
          true:
          false){
          idLocal = 188;
        //Estacionamento_bsa_sul_ib
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[189]) ?
          true:
          false){
          idLocal = 189;
        }
      //SubArea_CPD_CESPE
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[190]) ?
        true:
        false){
        idLocal = 190;
        //CPD
        if (google.maps.geometry.poly.containsLocation(local, poligonos[191]) ?
          true:
          false){
          idLocal = 191;
        //Estacionamento_cpd
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[192]) ?
          true:
          false){
          idLocal = 192;
        //CESPE
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[193]) ?
          true:
          false){
          idLocal = 193;
        //Estacionamento_CESPE_1
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[194]) ?
          true:
          false){
          idLocal = 194;
        //Estacionamento_CESPE_2
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[195]) ?
          true:
          false){
          idLocal = 195;
        //Estacionamento_CESPE_3
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[196]) ?
          true:
          false){
          idLocal = 196;
        //PONTO_ONIBUS_CESPE_CPD
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[197]) ?
          true:
          false){
          idLocal = 197;
        }
      }
    //Centro_Olimpico
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos[198]) ?
      true:
      false){
      idLocal = 198;
      //SUB_AREA_FEF_CO_1
      if (google.maps.geometry.poly.containsLocation(local, poligonos[199]) ?
        true:
        false){
        idLocal = 199;
        //FEF
        if (google.maps.geometry.poly.containsLocation(local, poligonos[200]) ?
          true:
          false){
          idLocal = 200;
        //ESTACIONAMENTO_FEF
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[201]) ?
          true:
          false){
          idLocal = 201;
        //ESTACIONAMENTO_CO
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[202]) ?
          true:
          false){
          idLocal = 202;
        //QUADRAS_15
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[203]) ?
          true:
          false){
          idLocal = 203;
        }
      //SUB_AREA_FEF_CO_2
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[204]) ?
        true:
        false){
        idLocal = 204;
        //CEU_1
        if (google.maps.geometry.poly.containsLocation(local, poligonos[205]) ?
          true:
          false){
          idLocal = 205;
        //CEU_2
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[206]) ?
          true:
          false){
          idLocal = 206;
        //CENTRO_OLIMPICO
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[207]) ?
          true:
          false){
          idLocal = 207;
        //QUADRA_14
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[208]) ?
          true:
          false){
          idLocal = 208;
        }
      //SUB_AREA_FEF_CO_3
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[209]) ?
        true:
        false){
        idLocal = 209;
        //QUADRA_16
        if (google.maps.geometry.poly.containsLocation(local, poligonos[210]) ?
          true:
          false){
          idLocal = 210;
        //QUADRA_17
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[211]) ?
          true:
          false){
          idLocal = 211;
        //QUADRA_18
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[212]) ?
          true:
          false){
          idLocal = 212;
        //QUADRA_19
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[213]) ?
          true:
          false){
          idLocal = 213;
        //QUADRA_20
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[214]) ?
          true:
          false){
          idLocal = 214;
        }
      //SUB_AREA_FEF_CO_4
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[215]) ?
        true:
        false){
        idLocal = 215;
        //QUADRA_9
        if (google.maps.geometry.poly.containsLocation(local, poligonos[216]) ?
          true:
          false){
          idLocal = 216;
        //QUADRA_10
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[217]) ?
          true:
          false){
          idLocal = 217;
        //QUADRA_11
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[218]) ?
          true:
          false){
          idLocal = 218;
        //QUADRA_12
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[219]) ?
          true:
          false){
          idLocal = 219;
        //QUADRA_13
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[220]) ?
          true:
          false){
          idLocal = 220;
        }
      //SUB_AREA_FEF_CO_5
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[221]) ?
        true:
        false){
        idLocal = 221;
        //QUADRA_5
        if (google.maps.geometry.poly.containsLocation(local, poligonos[222]) ?
          true:
          false){
          idLocal = 222;
        //QUADRA_6
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[223]) ?
          true:
          false){
          idLocal = 223;
        //QUADRA_7
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[224]) ?
          true:
          false){
          idLocal = 224;
        //QUADRA_8
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[225]) ?
          true:
          false){
          idLocal = 225;
        }
      //SUB_AREA_FEF_CO_6
      }else if (google.maps.geometry.poly.containsLocation(local, poligonos[226]) ?
        true:
        false){
        idLocal = 226;
        //QUADRA_1
        if (google.maps.geometry.poly.containsLocation(local, poligonos[227]) ?
          true:
          false){
          idLocal = 227;
        //QUADRA_2
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[228]) ?
          true:
          false){
          idLocal = 228;
        //QUADRA_3
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[229]) ?
          true:
          false){
          idLocal = 229;
        //QUADRA_4
        }else if (google.maps.geometry.poly.containsLocation(local, poligonos[230]) ?
          true:
          false){
          idLocal = 230;
        }
      }
    }
  }
  return(idLocal);
}

function include(file_path){
  var j = document.createElement("script");
  j.type = "text/javascript";
  j.src = file_path;
  document.body.appendChild(j);
}
/*
include ("/unb-alerta/static/js/area_icc.js");
include ("/unb-alerta/static/js/area_pat_pjc_ipol_cic.js");
include ("/unb-alerta/static/js/area_bce_reitoria.js");
include ("/unb-alerta/static/js/area_prc_colina_face.js");*/

var idLocal;
var map;

function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -15.763606, lng: -47.869636},
          zoom: 17,
  });

  var mensagem = '';
  var marcador = '';
  var idLocal = 0;
  google.maps.event.addListener(map, 'click', function(e) {
    var local = e.latLng;
    idLocal = getIdLocal(local);
    
    document.getElementById("localidade").value = idLocal; 
    document.getElementById("exibe_localidade").innerHTML = idLocal;
      
    if (idLocal){
      if (marcador){
        marcador.setPosition(local);
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
        mensagem = '';
        
      } else {          
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
        mensagem = '';
        
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
      mensagem = "Local inv�lido! Somente ocorr�ncias dentro da UnB - Campus Darcy Ribeiro";
    }
    document.getElementById("mensagem").innerHTML = mensagem;
  });
}
