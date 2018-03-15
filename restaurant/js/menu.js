/*
    Author:Clayton Mansfield
    Class:ICT 4510
    Date: 2/20/18
    Description: This script will retrieve a JSON file, cache it, then immediately retrieve the cached info an display a menu.
*/
$(document).ready(function () {
    var menuData,
        menu = '',
        i;
    
    $.get("data/menu.json", function (dataFromServer) {
        localStorage.setItem("cachedData", JSON.stringify(dataFromServer));
        console.log('data stored');
    });
    
    menuData = JSON.parse(localStorage.getItem("cachedData"));
    
    console.log(menuData);
    console.log(menuData.appName.length);
    for (i = 0; i < menuData.appName.length; i++) {
        menu += "<div>" + "<p>" + menuData.appName[i] +  "</p>";
        menu += "<p>" + menuData.appDescription[i] + "</p>";
        menu += "<p>" + menuData.appPrice[i] + "</p>" + "</div>" + "<br>";
    }
    console.log(menu);
    for (i = 0; i < menuData.entreeName.length; i++) {
        menu += "<div>" + "<p>" + menuData.entreeName[i] +  "</p>";
        menu += "<p>" + menuData.entreeDescription[i] + "</p>";
        menu += "<p>" + menuData.entreePrice[i] + "</p>" + "</div>" + "<br>";
    }
    console.log(menu);
    document.getElementById("menu").innerHTML = menu;
});