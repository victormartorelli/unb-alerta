var map;
function initMap() {

  // ==============================================================
  // O parâmetro "libraries=geometry" no script que chama o mapa
  // possibilita a inserção dos polígonos, enquanto o método
  // containsLocation desta biblioteca possibilita a detecção
  // se um ponto está ou não dentro do polígono em questão
  // ==============================================================

  // Aqui declaramos os pontos que servem como
  // vértices do polígono que delimita a área desejada
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

// Caso deseje exibir o polígono, descomentar as linhas
// de comando do objeto abaixo.
var ICCPolygon = new google.maps.Polygon({
  // Coordenadas do seu objeto
  paths: ICCCoords       //,
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

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -15.763606, lng: -47.869636},
          zoom: 17,
  });

  // Descomentar para exibir o polígono
  //ICCPolygon.setMap(map);
   
   // Detectando o click e decidindo a cor e mensagem,  
   // de acordo com a posição em relação ao polígono 
   google.maps.event.addListener(map, 'click', function(e) {
    var resultColor =
        google.maps.geometry.poly.containsLocation(e.latLng, ICCPolygon) ?
        'red':
        'green';
   
    var pertence =
        google.maps.geometry.poly.containsLocation(e.latLng, ICCPolygon) ?
        "Ocorrência dentro do ICC" :
        "Ocorrência fora do ICC ";
         
    var local = e.latLng;
    document.getElementById("resultado").innerHTML = pertence;
    
    // Inserindo o marcador
    new google.maps.Marker({
      position: e.latLng,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: resultColor,
        fillOpacity: .2,
        strokeColor: 'white',
        strokeWeight: .5,
        scale: 10
      }
    });
  });
}