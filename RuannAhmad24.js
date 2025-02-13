// Initialize Leaflet map
var map = L.map('nymap').setView([40.66140537730797, -73.9692881951236], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);





// Add a marker to the map for New York City
var librarymarker = L.marker([40.67224035309829, -73.96812008180129]).addTo(map);

// Add a popup to the marker
librarymarker.bindPopup(`
    <b>Brooklyn Public Library</b><br>The coolest library<br>
    <img src="https://RuannAhmad.github.io/RuannAhmad/images/library.jpeg" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var prospectmarker = L.marker([40.661395018170026, -73.96955171319219]).addTo(map);


// Add a popup to the marker
prospectmarker.bindPopup(`
    <b>Prospect Park</b><br>Have a relaxed walk with the best views <br>
    <img src="https://RuannAhmad.github.io/RuannAhmad/images/prospect_park.jpeg" style="width: 100px; height: auto;">
`).openPopup();




// Add a marker to the map for New York City
var simpsonmarker = L.marker([40.68325565579792, -73.97363200871627]).addTo(map);


// Add a popup to the marker
simpsonmarker.bindPopup(`
    <b>The Simpson Restaurant</b><br>best ambience Great music, great food, great vibes, great location, great service.<br>
    <img src="https://RuannAhmad.github.io/RuannAhmad/images/simpson.jpeg"  style="width: 100px; height: auto;">
`).openPopup();

var cuylermarker = L.marker([40.68565534495099, -73.9719183858434]).addTo(map);


// Add a popup to the marker
cuylermarker.bindPopup(`
    <b>Cuyler Gore Park</b><br>best ambience aGreat music, great food, great vibes, great location, great service.<br>
    <img src="https://RuannAhmad.github.io/RuannAhmad/images/cuyler.jpeg"  style="width: 100px; height: auto;">
`).openPopup();


var museummarker = L.marker([40.67091523673895, -73.96351566802403]).addTo(map);


// Add a popup to the marker
museummarker.bindPopup(`
    <b>Brooklyn Museum</b><br>The museum is New York City's second largest and contains an art collection with around 500,000 objects.<br>
    <img src="https://RuannAhmad.github.io/RuannAhmad/images/museum.jpeg"  style="width: 100px; height: auto;">
`).openPopup();



// Load the GeoJSON line file
fetch('https://RuannAhmad.github.io/RuannAhmad/rmdaytimeroute.geojson')
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
fetch('https://RuannAhmad.github.io/RuannAhmad/rmeveningroute.geojson')
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
fetch('https://RuannAhmad.github.io/RuannAhmad/rmmorningroutebuildings.geojson')
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


fetch('https://RuannAhmad.github.io/RuannAhmad/rmeveningroutebuildings.geojson')
.then(response => response.json())
.then(geojson => {
    // Customize the style of the polygon
    var polygonStyle = {
        fillColor: 'blue', // Fill color
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
fetch('https://RuannAhmad.github.io/RuannAhmad/hev.geojson')
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
