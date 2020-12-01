// Map objet
const API_KEY = "pk.eyJ1IjoiYmxoYXdraW5zIiwiYSI6ImNraTUzejRlZTJjeW8yeG5tcXU4N3VoN3QifQ.C4HGhvHqNcz8tTn0NnrZAw";
var myMap = L.map("map", {
    center: [25.09, 20.71],
    zoom: 2
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
        location: [48.52, 2.2],
        name: "France",
        players:'2'
    },
    {
        location: [-15.47, -47.55],
        name: "Brasil",
        players:'3'
    },
    {
        location: [50.5, 4.2],
        name: "Belgium",
        players:'1'
    },
    {
        location: [51.3, -0.1],
        name: "Surrey",
        players:'4'
    },
    {
        location: [51.5, 0.01],
        name: "Greenwich",
        players:'2'
    },
    {
        location: [52.31, 13.24],
        name: "Germany",
        players:'3'
    },
    {
        location: [14.4, -17.26],
        name: "senegal",
        players:'2'
    },
    {
        location: [30.03, 31.15],
        name: "Egypt",
        players:'2'
    },
    {
        location: [46.03, 14.31],
        name: "Slovenia",
        players:'1'
    },
    {
        location: [51.6, 0.06],
        name: "London",
        players:'5'
    }
];
//Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < countries.length; i++) {
    var country = countries[i];
    console.log(country)
    L.marker(country.location)
      .bindPopup("<h1>" + country.name +"</h1> <hr> <h3>Number of players " + country.players )
      .addTo(myMap);
    }