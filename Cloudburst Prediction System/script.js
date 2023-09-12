// script.js
document.addEventListener("DOMContentLoaded", function () {
    // This is a sample code that shows the center of Uttarakhand. You can replace these coordinates.
    const uttarakhandCenter = [30.0668, 79.0193];

    // Initialize the map
    const map = L.map('map').setView(uttarakhandCenter, 7);

    // Add a base map layer (you can use different map providers like OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // You can add markers, polygons, or other features to the map as needed
    // For example, adding a marker for Dehradun:
    const dehradunCoordinates = [30.3165, 78.0322];
    L.marker(dehradunCoordinates).addTo(map)
        .bindPopup('Dehradun, Uttarakhand, India')
        .openPopup();

    // Add event listener for form submission
    document.getElementById('location-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get the selected district and station
        const selectedDistrict = document.getElementById('district').value;
        const selectedStation = document.getElementById('station').value;

        // Example: If "Dehradun" district and "Mussoorie" station are selected, zoom to Mussoorie's coordinates
        if (selectedDistrict === 'Dehradun' && selectedStation === 'Mussoorie') {
            const mussoorieCoordinates = [30.4591, 78.0667];
            map.setView(mussoorieCoordinates, 12); // Set the zoom level as needed
        }
    });
});
