// JavaScript Document
function nomeLocal_bce_reitoria(local){
var nomeLocal = "";

var Area_BCE_Reitoria = [
//Área BCE e Reitoria
 new google.maps.LatLng(-15.7598908,-47.8700065),
 new google.maps.LatLng(-15.7623793,-47.8695829),
 new google.maps.LatLng(-15.763968,-47.8683182),
 new google.maps.LatLng(-15.7651851,-47.8660664),
 new google.maps.LatLng(-15.7633704,-47.8647602),
 new google.maps.LatLng(-15.7602418,-47.8667396),
 new google.maps.LatLng(-15.7592145,-47.8677964),
 new google.maps.LatLng(-15.7598908,-47.8700065)];

var SubAreaBCE = [
//Sub-área BCE
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
//Parada de Ônibus BCE
 new google.maps.LatLng(-15.7605,-47.8670454),
 new google.maps.LatLng(-15.7608459,-47.8667933),
 new google.maps.LatLng(-15.7606575,-47.8664822),
 new google.maps.LatLng(-15.7602935,-47.8667074),
 new google.maps.LatLng(-15.7605,-47.8670454)];

var SubAreaReitoria = [
//Sub-área Reitoria
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
//Reitoria da Universidade de Brasília
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
//Paradas de Ônibus Reitoria
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
//Teatro Arena Honestino Guimarães
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

var poligonos = {
Area_BCE_Reitoria: new google.maps.Polygon({
    paths: Area_BCE_Reitoria }),

SubAreaBCE: new google.maps.Polygon({
    paths: SubAreaBCE }),

BCE: new google.maps.Polygon({
    paths: BCE }),

Estac_BCE: new google.maps.Polygon({
    paths: Estac_BCE }),

Estac_BCE_Serv: new google.maps.Polygon({
    paths: Estac_BCE_Serv }),

P_Onibus_BCE: new google.maps.Polygon({
    paths: P_Onibus_BCE }),

SubAreaReitoria: new google.maps.Polygon({
    paths: SubAreaReitoria }),

Estac_BCE_Reitoria: new google.maps.Polygon({
    paths: Estac_BCE_Reitoria }),

Reitoria_UnB: new google.maps.Polygon({
    paths: Reitoria_UnB }),

Estac_Reitoria: new google.maps.Polygon({
    paths: Estac_Reitoria }),

P_Onibus_Reitoria: new google.maps.Polygon({
    paths: P_Onibus_Reitoria }),

Memorial_Darcy_Ribeiro: new google.maps.Polygon({
    paths: Memorial_Darcy_Ribeiro }),

SubArea_Circulacao_ICC_BCE_Reitoria: new google.maps.Polygon({
    paths: SubArea_Circulacao_ICC_BCE_Reitoria }),

TeatroArena_Honestino_Gimaraes: new google.maps.Polygon({
    paths: TeatroArena_Honestino_Gimaraes }),

Trajetos_Centrais_BCE_Reitoria: new google.maps.Polygon({
    paths: Trajetos_Centrais_BCE_Reitoria })
};

if (google.maps.geometry.poly.containsLocation(local, poligonos["Area_BCE_Reitoria"]) ?
        true:
        false){
      nomeLocal = "Area_BCE_Reitoria";
  if (google.maps.geometry.poly.containsLocation(local, poligonos["SubAreaBCE"]) ?
          true:
          false){
        nomeLocal = "SubAreaBCE";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["BCE"]) ?
            true:
            false){
          nomeLocal = "BCE";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_BCE"]) ?
            true:
            false){
          nomeLocal = "Estac_BCE";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_BCE_Serv"]) ?
            true:
            false){
          nomeLocal = "Estac_BCE_Serv";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_BCE"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_BCE";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubAreaReitoria"]) ?
          true:
          false){
        nomeLocal = "SubAreaReitoria";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_BCE_Reitoria"]) ?
            true:
            false){
          nomeLocal = "Estac_BCE_Reitoria";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Reitoria_UnB"]) ?
            true:
            false){
          nomeLocal = "Reitoria_UnB";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_Reitoria"]) ?
            true:
            false){
          nomeLocal = "Estac_Reitoria";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_Reitoria"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_Reitoria";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Memorial_Darcy_Ribeiro"]) ?
            true:
            false){
          nomeLocal = "Memorial_Darcy_Ribeiro";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_Circulacao_ICC_BCE_Reitoria"]) ?
          true:
          false){
      nomeLocal = "SubArea_Circulacao_ICC_BCE_Reitoria";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["TeatroArena_Honestino_Gimaraes"]) ?
            true:
            false){
          nomeLocal = "TeatroArena_Honestino_Gimaraes";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Trajetos_Centrais_BCE_Reitoria"]) ?
            true:
            false){
          nomeLocal = "Trajetos_Centrais_BCE_Reitoria";
    }
  }
}
return(nomeLocal);
}