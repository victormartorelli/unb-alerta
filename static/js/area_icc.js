// JavaScript Document
function nomeLocal_icc(local){
var nomeLocal = "";

var Area_ICC = [
//Área Instituto Central de Ciências - Universidade de Brasília
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
//Sub-Área ICC Norte
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
//Parada de Ônibus ICC Norte
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
//Sub-Área de circulação do ICC e RU - UnB
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
//Módulo de Atividades de Serviço e Comércio Centro - UnB
 new google.maps.LatLng(-15.7629884,-47.8715301),
 new google.maps.LatLng(-15.7633808,-47.8712404),
 new google.maps.LatLng(-15.7632001,-47.8709507),
 new google.maps.LatLng(-15.7628336,-47.8711814),
 new google.maps.LatLng(-15.7629884,-47.8715301)];

var P_Onibus_ICC_Centro_Norte = [
//Parada de Ônibus ICC Centro Norte
 new google.maps.LatLng(-15.7630865,-47.8718948),
 new google.maps.LatLng(-15.7633911,-47.8716642),
 new google.maps.LatLng(-15.7632982,-47.8715408),
 new google.maps.LatLng(-15.7630401,-47.8717071),
 new google.maps.LatLng(-15.7630865,-47.8718948)];

var RU = [
//Restaurante Universitário - UnB
 new google.maps.LatLng(-15.7648676,-47.8706074),
 new google.maps.LatLng(-15.7643204,-47.8698617),
 new google.maps.LatLng(-15.7636596,-47.8703821),
 new google.maps.LatLng(-15.7641294,-47.8711116),
 new google.maps.LatLng(-15.7648676,-47.8706074)];

var Centro_Convivencia = [
//Centro de Convivência
 new google.maps.LatLng(-15.7647024,-47.8702265),
 new google.maps.LatLng(-15.7649089,-47.8705698),
 new google.maps.LatLng(-15.7653478,-47.8702426),
 new google.maps.LatLng(-15.7651051,-47.8699207),
 new google.maps.LatLng(-15.7647024,-47.8702265)];

var SubArea_ICC_Sul = [
//Sub-área ICC Sul
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
//Parada de Ônibus ICC Sul
 new google.maps.LatLng(-15.7651851,-47.8660664),
 new google.maps.LatLng(-15.7650664,-47.8663346),
 new google.maps.LatLng(-15.7654097,-47.8665519),
 new google.maps.LatLng(-15.7655569,-47.8663534),
 new google.maps.LatLng(-15.7651851,-47.8660664)];

var P_Onibus_ICC_Centro_Sul = [
//Parada de Ônibus ICC Centro/Sul
 new google.maps.LatLng(-15.7666384,-47.8693333),
 new google.maps.LatLng(-15.76645,-47.8692207),
 new google.maps.LatLng(-15.7654742,-47.8697544),
 new google.maps.LatLng(-15.7657401,-47.8699851),
 new google.maps.LatLng(-15.7666384,-47.8693333)];

var P_Onibus_ICC_Sul_FS = [
//Parada de ônibus ICC Sul/FS
 new google.maps.LatLng(-15.7670308,-47.8674638),
 new google.maps.LatLng(-15.7669147,-47.8676274),
 new google.maps.LatLng(-15.7671547,-47.8678313),
 new google.maps.LatLng(-15.7673251,-47.867673),
 new google.maps.LatLng(-15.7670308,-47.8674638)];

var poligonos = {
Area_ICC: new google.maps.Polygon({
    paths: Area_ICC }),

SubArea_ICC_Norte: new google.maps.Polygon({
    paths: SubArea_ICC_Norte }),

ICC_Norte: new google.maps.Polygon({
    paths: ICC_Norte }),

P_Onibus_ICC_Norte: new google.maps.Polygon({
    paths: P_Onibus_ICC_Norte }),

Estac_ICC_Norte: new google.maps.Polygon({
    paths: Estac_ICC_Norte }),

SubArea_ICC_Centro_RU: new google.maps.Polygon({
    paths: SubArea_ICC_Centro_RU }),

ICC_Centro: new google.maps.Polygon({
    paths: ICC_Centro}),

MASC_Centro: new google.maps.Polygon({
    paths: MASC_Centro }),

P_Onibus_ICC_Centro_Norte: new google.maps.Polygon({
    paths: P_Onibus_ICC_Centro_Norte }),

RU: new google.maps.Polygon({
    paths: RU }),

Centro_Convivencia: new google.maps.Polygon({
    paths: Centro_Convivencia }),

SubArea_ICC_Sul: new google.maps.Polygon({
    paths: SubArea_ICC_Sul }),

ICC_Sul: new google.maps.Polygon({
    paths: ICC_Sul }),

Estac_ICC_Sul: new google.maps.Polygon({
    paths: Estac_ICC_Sul }),

P_Onibus_ICC_Sul: new google.maps.Polygon({
    paths: P_Onibus_ICC_Sul }),

P_Onibus_ICC_Centro_Sul: new google.maps.Polygon({
    paths: P_Onibus_ICC_Centro_Sul }),

P_Onibus_ICC_Sul_FS: new google.maps.Polygon({
    paths: P_Onibus_ICC_Sul_FS })
};

if (google.maps.geometry.poly.containsLocation(local, poligonos["Area_ICC"]) ?
        true:
        false){
  nomeLocal = "Area_ICC";
  if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_ICC_Norte"]) ?
          true:
          false){
    nomeLocal = "SubArea_ICC_Norte";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["ICC_Norte"]) ?
            true:
            false){
      nomeLocal = "ICC_Norte";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_ICC_Norte"]) ?
            true:
            false){
      nomeLocal = "P_Onibus_ICC_Norte";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_ICC_Norte"]) ?
            true:
            false){
      nomeLocal = "Estac_ICC_Norte";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_ICC_Centro_RU"]) ?
          true:
          false){
        nomeLocal = "SubArea_ICC_Centro_RU";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["ICC_Centro"]) ?
            true:
            false){
          nomeLocal = "ICC_Centro";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["MASC_Centro"]) ?
            true:
            false){
          nomeLocal = "MASC_Centro";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_ICC_Centro_Norte"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_ICC_Centro_Norte";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["RU"]) ?
            true:
            false){
          nomeLocal = "RU";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Centro_Convivencia"]) ?
            true:
            false){
          nomeLocal = "Centro_Convivencia";
    }
  }else if (google.maps.geometry.poly.containsLocation(local, poligonos["SubArea_ICC_Sul"]) ?
        true:
        false){
      nomeLocal = "SubArea_ICC_Sul";
    if (google.maps.geometry.poly.containsLocation(local, poligonos["ICC_Sul"]) ?
            true:
            false){
          nomeLocal = "ICC_Sul";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["Estac_ICC_Sul"]) ?
            true:
            false){
          nomeLocal = "Estac_ICC_Sul";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_ICC_Sul"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_ICC_Sul";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_ICC_Centro_Sul"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_ICC_Centro_Sul";
    }else if (google.maps.geometry.poly.containsLocation(local, poligonos["P_Onibus_ICC_Sul_FS"]) ?
            true:
            false){
          nomeLocal = "P_Onibus_ICC_Sul_FS";
    }
  }
}
return(nomeLocal);
}