function include(file_path){
  var j = document.createElement("script");
  j.type = "text/javascript";
  j.src = file_path;
  document.body.appendChild(j);
}

include ("/static/js/area_icc.js");
include ("/static/js/area_pat_pjc_ipol_cic.js");
include ("/static/js/area_bce_reitoria.js");
include ("/static/js/area_prc_colina_face.js");

var nomeLocal;
var map;

function getNomeLocal(local){    
    
    //ICC
    nomeLocal  = nomeLocal_icc(local); 
    if (nomeLocal != "") return(nomeLocal);      
    
    //PAT_PJC_IPOL_CIC_ATHOSBULCAO
    nomeLocal = nomeLocal_pat_pjc_ipol_cic(local);
    if (nomeLocal != "") return(nomeLocal);
      
    //BCE_REITORIA
    nomeLocal = nomeLocal_bce_reitoria(local);
    if (nomeLocal != "") return(nomeLocal);
    
    //PRC_COLINA_FACE
    nomeLocal = nomeLocal_prc_colina_face(local);
    if (nomeLocal != "") return (nomeLocal);

  return (nomeLocal);    
}

function initMap() {
  
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
  var UNB_Polygon = new google.maps.Polygon({
    paths: UNB_Coords    });

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
        "Local inválido! Somente ocorrências dentro da UnB - Campus Darcy Ribeiro";
         
    document.getElementById("mensagem").innerHTML = mensagem;
    
    nomeLocal = getNomeLocal (local);
    document.getElementById("localidade").value = nomeLocal; 
    document.getElementById("exibe_localidade").innerHTML = nomeLocal;
      
    if (pertence){
      if (marcador){
        marcador.setPosition(local);
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
        //document.getElementById("localidade").value = nomeLocal;

      } else {          
        document.getElementById("latitude").value = e.latLng.lat();
        document.getElementById("longitude").value = e.latLng.lng();
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
  });
}
