/*
    Author:Clayton Mansfield
    Class:ICT 4510
    Date: 1/24/18
    Description: This script will find the user's location, use computeDistance.js to compute the distance from that point and then display both of those pieces of information.
*/

function getMyLocation() {
    if (navigator.geolocation) {
       
    } else {
        alert('No location support.');
    }
}

getMyLocation();