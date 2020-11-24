var data = geoData;
console.log(data);

var playerData = players;
console.log(playerData);


var initialLayer=L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
})

// Creating map object

var myMap = L.map("map", {
  center: [51.505, -0.09],
  zoom: 3
});

initialLayer.addTo(myMap);

baseLayer = new L.LayerGroup();
console.log(data.features.length);

for (var i = 0; i < data.features.length; i++) {
  
  console.log(data.features[i]);
  var playerHtml = '';
  var countryCode = data.features[i].id;
  console.log(data.features[i].id);
  for (var x = 0; x < playerData.length; x++) {
    if (countryCode === playerData[x].UN_Code) {
      playerHtml= playerHtml + "<br>" + playerData[x].Player;
    }
  }

  if (playerHtml > '') {
    L.marker(data.features[i].geometry.coordinates.reverse())
        .bindPopup("<h1>" + data.features[i].properties.city + ", " + data.features[i].properties.country + "</h1>" + playerHtml)
        .addTo(myMap);
  }
}

