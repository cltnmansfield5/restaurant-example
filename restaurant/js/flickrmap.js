/*
    Author:Clayton Mansfield
    Class:ICT 4510
    Date: 3/6/18
    Description: This script uses the flickr API to grab images of sushi and display them.
*/
function jsonFlickrFeed(json) {
    console.log(json);

    $.each(json.items, function (i, item) {
        $("<img />").attr("src", item.media.m).appendTo("#images");
    });
}

function handleButtonClick() {

    $.ajax({
        url: 'https://api.flickr.com/services/feeds/photos_public.gne',
        dataType: 'jsonp',
        data: { "tags": "Sushi", "format": "json" }
    });
}

window.onload = function () {
    handleButtonClick();
};