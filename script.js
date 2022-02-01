var map = L.map('mapid').setView([37.7, -122.4], 10);

//load tile layer
var Stamen_Terrain = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  $.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
    var policeIcon = L.icon({
      iconUrl: 'https://www.vectorkhazana.com/assets/images/products/Back-The-Blue-Police.jpg',
      iconSize: [30,30]
    });
L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: policeIcon});
        marker.bindPopup(feature.properties.description + '<br/>' + feature.properties.title + '<br/>');
        return marker;  
}
}).addTo(map);
});

           
