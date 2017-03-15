var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bike) {
    $('.showBike').append("<li>" + bike.title + " " + bike.serial + " " + bike.year + " " + bike.frame_colors + "</li>");
};


$(document).ready(function() {
    var currentBikeObject = new Bike();
    $('#bikeSearch').click(function() {
        event.preventDefault();
        var city = $('#city').val();
        $('#city').val("");
        var distance = $('#distance').val();
        $('#distance').val("");
        currentBikeObject.searchBike(distance, city, displayBikes);
    });
});
