// Initialize Leaflet map
var map = L.map('nymap').setView([40.681801312931455, -73.9571896025164], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var luigismarker = L.marker([40.68965691085725, -73.96537769031497]).addTo(map);

// Add a popup to the marker
luigismarker.bindPopup(`
    <b>Luigi's Pizza</b><br>Best pizza on Dekalb Ave<br>
    <img src="https://aurashktest.github.io/aurashktest/images/luigis.png" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var prattinstmarker = L.marker([40.69099831383163, -73.96332055134893]).addTo(map);


// Add a popup to the marker
prattinstmarker.bindPopup(`
    <b>Pratt Institute</b><br>Sculpture Garden and green space <br>
    <img src="https://aurashktest.github.io/aurashktest/images/pratt.jpg" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var ftgreeneparkmarker = L.marker([40.69271525220281, -73.97682542294763]).addTo(map);


// Add a popup to the marker
ftgreeneparkmarker.bindPopup(`
    <b>Ft Greene Park</b><br>Prison Ship Martrys Monument has good views of the city.<br>
    <img src="https://aurashktest.github.io/aurashktest/images/psm.jpg"  style="width: 100px; height: auto;">
`).openPopup();





// Load the GeoJSON line file
fetch('https://aurashktest.github.io/aurashktest/akdaytimeroute.geojson')
    .then(response => response.json())
    .then(geojson => {
        // Customize the style of the line
        var lineStyle = {
            color: 'red', // Change color as needed
            weight: 5, // Change weight as needed
            opacity: 0.7 // Change opacity as needed
        };

        // Add the GeoJSON line to the map
        L.geoJSON(geojson, {
            style: lineStyle
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON file:', error);
    });


    // Load the GeoJSON line file
fetch('https://aurashktest.github.io/aurashktest/akeveningroute.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the line
    var lineStyle = {
        color: 'blue', // Change color as needed
        weight: 5, // Change weight as needed
        opacity: 0.7 // Change opacity as needed
    };

    // Add the GeoJSON line to the map
    L.geoJSON(geojson, {
        style: lineStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});






// Load the GeoJSON polygon file
fetch('https://aurashktest.github.io/aurashktest/akeveningroutebuildings.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'black', // Fill color
        fillOpacity: 0.5, // Fill opacity
    };

    // Add the GeoJSON polygon to the map
    L.geoJSON(geojson, {
        style: polygonStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});





var categoryColors = {
    "1": "red",
    "2": "orange",
    "3": "yellow",
    "4": "green",
    "X": "gray" // Default color for other categories
};


// Function to set style based on category
function getFeatureStyle(feature) {
    var category = feature.properties.hurricane_; // Adjust property name
    var color = categoryColors[category] || "gray"; // Default color if category not found
    var fillOpacity = category === "X" ? 0 : 0.6; // Set fill opacity to 0 for "X" category
    return {
        fillColor: color,
        fillOpacity: fillOpacity,
    };
}


// Load the GeoJSON polygon file
fetch('https://aurashktest.github.io/aurashktest/hev.geojson')
.then(response => response.json())
.then(geojson => {
    // Add the GeoJSON polygons to the map with customized style
    L.geoJSON(geojson, {
        style: getFeatureStyle
    }).addTo(map);
})
.catch(error => {
    console.error('Error loading GeoJSON file:', error);
});
