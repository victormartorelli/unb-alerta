var map;
var pontos = {
0: {lat: -15.765230, lng: -47.868261},
1: {lat: -15.766304, lng: -47.867874},
2: {lat: -15.765023, lng: -47.867832},
3: {lat: -15.765602, lng: -47.871222},
4: {lat: -15.764487, lng: -47.871522},
5: {lat: -15.764776, lng: -47.871436}
}

function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -15.763606, lng: -47.869636},
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var markers = [];
  for (i=0; i <6; i++){
    var marker = new google.maps.Marker({
      position: pontos[i],
      map: map,
    });
    markers.push(marker);
  }
  
  var options = {
    imagePath: '../../static/images/m'
  };
  
  var markerCluster = new MarkerClusterer(map, markers, options);
}

