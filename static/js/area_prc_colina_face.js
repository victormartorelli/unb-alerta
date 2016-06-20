// JavaScript Document
function nomeLocal_prc_colina_face(local){
var nomeLocal = "";

var Area_PRC_Colina_FACE = [
//Área PRC/Colina/FACE
 new google.maps.LatLng(-15.7581406,-47.8730965),
 new google.maps.LatLng(-15.7567157,-47.8735042),
 new google.maps.LatLng(-15.7537677,-47.8756553),
 new google.maps.LatLng(-15.7542995,-47.8767872),
 new google.maps.LatLng(-15.7611557,-47.8746521),
 new google.maps.LatLng(-15.760673,-47.8729195),
 new google.maps.LatLng(-15.7601263,-47.8708817),
 new google.maps.LatLng(-15.7577224,-47.8715998),
 new google.maps.LatLng(-15.7577999,-47.8720745),
 new google.maps.LatLng(-15.7580477,-47.8726029),
 new google.maps.LatLng(-15.7581406,-47.8730965)];

var SubArea_FACE = [
//Sub-área FACE
 new google.maps.LatLng(-15.7601263,-47.8708817),
 new google.maps.LatLng(-15.7577224,-47.8715998),
 new google.maps.LatLng(-15.7577999,-47.8720745),
 new google.maps.LatLng(-15.7580477,-47.8726029),
 new google.maps.LatLng(-15.7581406,-47.8730965),
 new google.maps.LatLng(-15.760673,-47.8729195),
 new google.maps.LatLng(-15.7601263,-47.8708817)];

var FACE = [
//Faculdade de Economia e Administração
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
//Circulação de pedestres FA
 new google.maps.LatLng(-15.7597721,-47.8710043),
 new google.maps.LatLng(-15.7601025,-47.8724527),
 new google.maps.LatLng(-15.7603348,-47.8726566),
 new google.maps.LatLng(-15.7603245,-47.8729409),
 new google.maps.LatLng(-15.760673,-47.8729195),
 new google.maps.LatLng(-15.7601211,-47.8708817),
 new google.maps.LatLng(-15.7597721,-47.8710043)];

var SubArea_PRC = [
//Sub-Área PRC/Colina
 new google.maps.LatLng(-15.7611557,-47.8746521),
 new google.maps.LatLng(-15.760673,-47.8729195),
 new google.maps.LatLng(-15.7581406,-47.8730965),
 new google.maps.LatLng(-15.7586259,-47.8753924),
 new google.maps.LatLng(-15.7611557,-47.8746521)];

var PostoPetrobras = [
//Posto Petrobrás
 new google.maps.LatLng(-15.7604329,-47.8740674),
 new google.maps.LatLng(-15.7606342,-47.8747755),
 new google.maps.LatLng(-15.7610576,-47.8746361),
 new google.maps.LatLng(-15.7608459,-47.8739977),
 new google.maps.LatLng(-15.7604329,-47.8740674)];

var P_Onibus_Posto = [
//Parada de Ônibus Posto
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
//UnB Colina Blocos A, B, C, D e E
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

var poligonos = {
Area_PRC_Colina_FACE: new google.maps.Polygon({
    paths: Area_PRC_Colina_FACE }),

SubArea_FACE: new google.maps.Polygon({
    paths: SubArea_FACE }),

FACE: new google.maps.Polygon({
    paths: FACE }),

FA: new google.maps.Polygon({
    paths: FA }),

Estac_FACE: new google.maps.Polygon({
    paths: Estac_FACE }),

Estac_FA: new google.maps.Polygon({
    paths: Estac_FA }),

Circulacao_Pedestres_FA: new google.maps.Polygon({
    paths: Circulacao_Pedestres_FA }),

SubArea_PRC: new google.maps.Polygon({
    paths: SubArea_PRC }),

PostoPetrobras: new google.maps.Polygon({
    paths: PostoPetrobras }),

P_Onibus_Posto: new google.maps.Polygon({
    paths: P_Onibus_Posto }),

PRC: new google.maps.Polygon({
    paths: PRC }),

ASFUB: new google.maps.Polygon({
    paths: ASFUB }),

SubArea_Colina_Blocos_ABCDE: new google.maps.Polygon({
    paths: SubArea_Colina_Blocos_ABCDE }),

Colina_Bloco_A: new google.maps.Polygon({
    paths: Colina_Bloco_A }),

Colina_Bloco_B: new google.maps.Polygon({
    paths: Colina_Bloco_B }),

Colina_Bloco_C: new google.maps.Polygon({
    paths: Colina_Bloco_C }),

Colina_Bloco_D: new google.maps.Polygon({
    paths: Colina_Bloco_D }),

Colina_Bloco_E: new google.maps.Polygon({
    paths: Colina_Bloco_E }),

SubArea_Colina_Blocos_FGHIJ: new google.maps.Polygon({
    paths: SubArea_Colina_Blocos_FGHIJ }),

Colina_Bloco_F: new google.maps.Polygon({
    paths: Colina_Bloco_F }),

Colina_Bloco_G: new google.maps.Polygon({
    paths: Colina_Bloco_G }),

Colina_Bloco_G: new google.maps.Polygon({
    paths: Colina_Bloco_G }),

Colina_Bloco_I: new google.maps.Polygon({
    paths: Colina_Bloco_I }),

Colina_Bloco_J: new google.maps.Polygon({
    paths: Colina_Bloco_J }),
};

if (google.maps.geometry.poly.containsLocation(local, poligonos["Area_PRC_Colina_FACE"]) ?
        true:
        false){
      nomeLocal = "Area_PRC_Colina_FACE";
  if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_FACE"]) ?
          true:
          false){
        nomeLocal = "SubArea_FACE";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["FACE"]) ?
            true:
            false){
          nomeLocal = "FACE";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["FA"]) ?
            true:
            false){
          nomeLocal = "FA";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_FACE"]) ?
            true:
            false){
          nomeLocal = "Estac_FACE";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_FA"]) ?
            true:
            false){
          nomeLocal = "Estac_FA";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Circulacao_Pedestres_FA"]) ?
            true:
            false){
          nomeLocal = "Circulacao_Pedestres_FA";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_PRC"]) ?
          true:
          false){
        nomeLocal = "SubArea_PRC";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["PostoPetrobras"]) ?
            true:
            false){
          nomeLocal = "PostoPetrobras";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_Posto"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_Posto";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["PRC"]) ?
            true:
            false){
          nomeLocal = "PRC";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["ASFUB"]) ?
            true:
            false){
          nomeLocal = "ASFUB";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_Colina_Blocos_ABCDE"]) ?
          true:
          false){
      nomeLocal = "SubArea_Colina_Blocos_ABCDE";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_A"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_A";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_B"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_B";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_C"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_C";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_D"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_D";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_E"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_E";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_Colina_Blocos_FGHIJ"]) ?
          true:
          false){
        nomeLocal = "SubArea_Colina_Blocos_FGHIJ";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_F"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_F";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_G"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_G";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_G"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_G";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_I"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_I";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Colina_Bloco_J"]) ?
            true:
            false){
          nomeLocal = "Colina_Bloco_J";
    }
  }
}
return(nomeLocal);
}