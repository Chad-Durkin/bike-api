var Bike = require('./../js/bike.js').bikeModule;
var allBikes = new Array();
var displayBikes = function(bike, year) {
    if(bike.year == year)
    {
    $('.showBike').append("<li>" + "Year: " + bike.year + " Title: " + bike.title + " " + bike.serial + " " + bike.frame_colors + " " + bike.stolen_location + "</li>");
    // allBikes.push(bike);
    }
    else if(year == ""){
        $('.showBike').append("<li>" + "Year: " + bike.year + " Title: " + bike.title + " " + bike.serial + " " + bike.frame_colors + " " + bike.stolen_location + "</li>");
    }
};


$(document).ready(function() {
    var currentBikeObject = new Bike();
    $('#bikeSearch').click(function() {
        event.preventDefault();
        $('.showBike').empty();
        var city = $('#city').val();
        $('#city').val("");
        var distance = $('#distance').val();
        $('#distance').val("");
        var displayNumber = $('#display').val();
        $('#display').val("");
        var year = $('#year').val();
        console.log(year);
        $('#year').val("");
        currentBikeObject.searchBike(distance, city, displayNumber, year, displayBikes);
    });
});
