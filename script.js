// Initialize Leaflet map
// Set the center of the map to the United States
const map = L.map('map').setView([39.9293, -98.5795], 5);

// Add a base layer, OpenStreetMap
L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">'
}).addTo(map);

