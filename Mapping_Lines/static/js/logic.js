// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1974292, -97.6663058],
    [43.677223, -79.630556],
    [40.6441666667, -73.7822222222],
    [40.7972401, -73.1003215]
  ];

  // Create a polyline using the line coordinates and make the line blue.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: 6,
  }).addTo(map);


// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
// });

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         color: 'orange',
//         weight: 4,
//         radius: city.population/200000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
