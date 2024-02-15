// Initialize Leaflet map
// Set the center of the map to the United States
const map = L.map('map').setView([39.9293, -98.5795], 5);

// Add a base layer, OpenStreetMap
L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">'
}).addTo(map);

// Add markers for Big 12 schools
var big12Schools = [
    { name: 'Baylor University', location: [31.5469, -97.1211] },
    { name: 'Iowa State University', location: [42.0264, -93.6484] },
    { name: 'University of Kansas', location: [38.9540, -95.2558] },
    { name: 'Kansas State University', location: [39.2058, -96.5736] },
    { name: 'University of Oklahoma', location: [35.2058, -97.4457] },
    { name: 'Oklahoma State University', location: [36.1284, -97.0733] },
    { name: 'Texas Christian University', location: [32.7092, -97.3689] },
    { name: 'Texas Tech University', location: [33.5779, -101.8552] },
    { name: 'University of Texas at Austin', location: [30.2849, -97.7341] },
    { name: 'West Virginia University', location: [39.6437, -79.9647] }
];

// Loop through each school and add marker to the map
big12Schools.forEach(function(school) {
    L.marker(school.location)
    .addTo(map)
    .bindPopup(school.name);
});