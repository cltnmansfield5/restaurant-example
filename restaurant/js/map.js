/*
    Author:Clayton Mansfield
    Class:ICT 4510
    Date: 1/24/18
    Description: This script will create the Google map.
*/
var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12
    });
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Come Eat!');
            infoWindow.open(map);
            map.setCenter(pos);
        },
            function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        alert('Cannot use location.');
    }
}

 