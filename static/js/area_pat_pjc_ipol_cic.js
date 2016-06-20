// JavaScript Document
function nomeLocal_pat_pjc_ipol_cic(local){
var nomeLocal = "";

var Area_PAT_PJC_IPol_CIC = [
//Grande área PAT, PJC, IPol/IRel/CIC/Est
 new google.maps.LatLng(-15.7601211,-47.8708817),
 new google.maps.LatLng(-15.7598856,-47.8700065),
 new google.maps.LatLng(-15.7592093,-47.8677964),
 new google.maps.LatLng(-15.7584968,-47.8666162),
 new google.maps.LatLng(-15.7565556,-47.8685743),
 new google.maps.LatLng(-15.7574953,-47.8694648),
 new google.maps.LatLng(-15.757521,-47.869851),
 new google.maps.LatLng(-15.7574075,-47.8701138),
 new google.maps.LatLng(-15.7573868,-47.8703552),
 new google.maps.LatLng(-15.7577172,-47.8715998),
 new google.maps.LatLng(-15.7601211,-47.8708817)];

var SubArea_PAT = [
//Sub-Área PAT
 new google.maps.LatLng(-15.7577637,-47.871589),
 new google.maps.LatLng(-15.7601263,-47.8708817),
 new google.maps.LatLng(-15.7599566,-47.8702613),
 new google.maps.LatLng(-15.7595397,-47.8703901),
 new google.maps.LatLng(-15.7582955,-47.8707469),
 new google.maps.LatLng(-15.7582696,-47.8706423),
 new google.maps.LatLng(-15.7575553,-47.8708515),
 new google.maps.LatLng(-15.7577637,-47.871589)];

var PAT_UnB = [
//Pavilhão Anísio Teixeira - UnB
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
//Módulo de Atividades de Serviço e Comércio Norte - UnB
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
//Sub-Área PJC
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
//Pavilhão João Calmon - UnB
 new google.maps.LatLng(-15.7578986,-47.8706388),
 new google.maps.LatLng(-15.7591474,-47.8702748),
 new google.maps.LatLng(-15.7590235,-47.8698242),
 new google.maps.LatLng(-15.7577748,-47.8701889),
 new google.maps.LatLng(-15.7578986,-47.8706388)];

var Estac_PJC_Sul = [
//Estacionamento Sul do Pavilhão João Calmon
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
//Sub-Área IPol/IRel/CIC/Est
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
//Institutos de Ciência Política e Relações Internacionais - UnB
 new google.maps.LatLng(-15.7585846,-47.8692394),
 new google.maps.LatLng(-15.757725,-47.8694621),
 new google.maps.LatLng(-15.7578489,-47.8699449),
 new google.maps.LatLng(-15.7587085,-47.8697008),
 new google.maps.LatLng(-15.7585846,-47.8692394)];

var CIC_Est_UnB = [
//Prédio de Ciência da Computação e Estatística  - UnB
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
//Área do Centro Comunitário
 new google.maps.LatLng(-15.7574953,-47.8694648),
 new google.maps.LatLng(-15.7592145,-47.8677964),
 new google.maps.LatLng(-15.7584968,-47.8666162),
 new google.maps.LatLng(-15.7565195,-47.8685796),
 new google.maps.LatLng(-15.7569945,-47.8691053),
 new google.maps.LatLng(-15.7570822,-47.8690249),
 new google.maps.LatLng(-15.7574953,-47.8694648)];

var AthosBulcao = [
//Centro Comunitário Athos Bulcão - UnB
 new google.maps.LatLng(-15.7579031,-47.8689444),
 new google.maps.LatLng(-15.7585485,-47.8683061),
 new google.maps.LatLng(-15.7581355,-47.867893),
 new google.maps.LatLng(-15.7575262,-47.8685045),
 new google.maps.LatLng(-15.7579031,-47.8689444)];

var Estac_Centro_Comunitario = [
//Estacionamento Centro Comunitário Athos Bulcão
 new google.maps.LatLng(-15.7565195,-47.8685796),
 new google.maps.LatLng(-15.7569945,-47.8691053),
 new google.maps.LatLng(-15.7575675,-47.8685528),
 new google.maps.LatLng(-15.7575262,-47.8685045),
 new google.maps.LatLng(-15.7581355,-47.867893),
 new google.maps.LatLng(-15.7582206,-47.8679788),
 new google.maps.LatLng(-15.7589073,-47.8672815),
 new google.maps.LatLng(-15.7584968,-47.8666162),
 new google.maps.LatLng(-15.7565195,-47.8685796)];

var poligonos = {
  Area_PAT_PJC_IPol_CIC: new google.maps.Polygon({
    paths: Area_PAT_PJC_IPol_CIC }),

  SubArea_PAT: new google.maps.Polygon({
    paths: SubArea_PAT }),

  PAT_UnB: new google.maps.Polygon({
    paths: PAT_UnB }),

  Estac_PAT_Norte: new google.maps.Polygon({
    paths: Estac_PAT_Norte }),

  Estac_PAT_Oeste: new google.maps.Polygon({
    paths: Estac_PAT_Oeste }),

  Masc_Norte: new google.maps.Polygon({
    paths: Masc_Norte }),

  Acesso_PAT_PJC_Sul: new google.maps.Polygon({
    paths: Acesso_PAT_PJC_Sul }),

  P_Onibus_PAT_PJC: new google.maps.Polygon({
    paths: P_Onibus_PAT_PJC }),

  SubArea_PJC: new google.maps.Polygon({
    paths: SubArea_PJC }),

  PJC_UnB: new google.maps.Polygon({
    paths: PJC_UnB }),

  Estac_PJC_Sul: new google.maps.Polygon({
    paths: Estac_PJC_Sul }),

  Estac_PAT_PJC: new google.maps.Polygon({
    paths: Estac_PAT_PJC }),

  Estac_PJC_PAT_Norte: new google.maps.Polygon({
    paths: Estac_PJC_PAT_Norte }),

  Estac_PJC_IPol_IRel: new google.maps.Polygon({
    paths: Estac_PJC_IPol_IRel }),

  Frente_PJC: new google.maps.Polygon({
    paths: Frente_PJC }),

  SubArea_IPol_IRel_CIC_Est: new google.maps.Polygon({
    paths: SubArea_IPol_IRel_CIC_Est }),

  IPol_IRel_UnB: new google.maps.Polygon({
    paths: IPol_IRel_UnB }),

  CIC_Est_UnB: new google.maps.Polygon({
    paths: CIC_Est_UnB }),

  Estac_Acesso_CIC_Est: new google.maps.Polygon({
    paths: Estac_Acesso_CIC_Est }),

  SubArea_Centro_Comunitario: new google.maps.Polygon({
    paths: SubArea_Centro_Comunitario }),

  AthosBulcao: new google.maps.Polygon({
    paths: AthosBulcao }),

  Estac_Centro_Comunitario: new google.maps.Polygon({
    paths: Estac_Centro_Comunitario })
};
  
if (google.maps.geometry.poly.containsLocation(local, poligonos["Area_PAT_PJC_IPol_CIC"]) ?
        true:
        false){
      nomeLocal = "Area_PAT_PJC_IPol_CIC";
  if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_PAT"]) ?
          true:
          false){
        nomeLocal = "SubArea_PAT";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["PAT_UnB"]) ?
            true:
            false){
          nomeLocal = "PAT_UnB";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_PAT_Norte"]) ?
            true:
            false){
          nomeLocal = "Estac_PAT_Norte";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_PAT_Oeste"]) ?
            true:
            false){
          nomeLocal = "Estac_PAT_Oeste";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Masc_Norte"]) ?
            true:
            false){
          nomeLocal = "Masc_Norte";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Acesso_PAT_PJC_Sul"]) ?
            true:
            false){
          nomeLocal = "Acesso_PAT_PJC_Sul";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_PAT_PJC"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_PAT_PJC";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_PJC"]) ?
          true:
          false){
        nomeLocal = "SubArea_PJC";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["PJC_UnB"]) ?
            true:
            false){
          nomeLocal = "PJC_UnB";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_PJC_Sul"]) ?
            true:
            false){
          nomeLocal = "Estac_PJC_Sul";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_PAT_PJC"]) ?
            true:
            false){
          nomeLocal = "Estac_PAT_PJC";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_PJC_PAT_Norte"]) ?
            true:
            false){
          nomeLocal = "Estac_PJC_PAT_Norte";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_PJC_IPol_IRel"]) ?
            true:
            false){
          nomeLocal = "Estac_PJC_IPol_IRel";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Frente_PJC"]) ?
            true:
            false){
          nomeLocal = "Frente_PJC";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_IPol_IRel_CIC_Est"]) ?
            true:
            false){
        nomeLocal = "SubArea_IPol_IRel_CIC_Est";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["IPol_IRel_UnB"]) ?
            true:
            false){
          nomeLocal = "IPol_IRel_UnB";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["CIC_Est_UnB"]) ?
            true:
            false){
          nomeLocal = "CIC_Est_UnB";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_Acesso_CIC_Est"]) ?
            true:
            false){
          nomeLocal = "Estac_Acesso_CIC_Est";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_Centro_Comunitario"]) ?
          true:
          false){
        nomeLocal = "SubArea_Centro_Comunitario";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["AthosBulcao"]) ?
            true:
            false){
          nomeLocal = "AthosBulcao";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_Centro_Comunitario"]) ?
            true:
            false){
          nomeLocal = "Estac_Centro_Comunitario";
    }
  }
}
return (nomeLocal);
}