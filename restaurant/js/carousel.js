/*
    Author:Clayton Mansfield
    Class:ICT 4510
    Date: 3/6/2018
    Description: This script runs the slick carousel
*/
$(document).ready(function () {
    $('.carousel').slick({
        
    });
});
$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});