// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // An array containing each coumtries names and location
  var countries = [{
    location: [48.52,2.2],
    name: "France",
    
  },
  {
    location: [-15.47,-47.55],
    name: "Brasil",
    
  },
  {
    location: [50.5,4.2],
    name: "Belgium",
    
  },
  {
    location: [51.3,-0.1],
    name: "United kingdom",
    
  },
  {
    location: [51.3,-0.1],
    name: "United kingdom",
    
  },
  {
    location: [52.31,13.24],
    name: "Germany",
    
  },
  {
    location: [14.4,-17.26],
    name: "senegal",
    
  },
  {
    location: [30.03,31.15],
    name: "Egypt",
    
  },
  {
    location: [ 46.03,14.31],
    name: "Slovenia",
    
  },
  {
    location: [51.3,-0.1],
    name: "United kingdom",
    
  }];
  
  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < countries.length; i++) {
    var country = countries[i];
    console.log(country)
    L.marker(country.location)
      .bindPopup("<h1>" + country.name + country.location )
      .addTo(myMap);
}
