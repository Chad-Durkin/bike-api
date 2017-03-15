var Bike = require('./../js/bike.js').bikeModule;
var displayBikes = function(city, bikeCount) {
    $('.showBike').text("There are " + bikeCount + " bikes that match your search criteria for the surrounding area of " + city + ".");
}

$(document).ready(function() {
    var currentBikeObject = new Bike();
    $('#bikeSearch').click(function() {
        var city = $('#city').val();
        $('#city').val("");
        var distance = $('#distance').val();
        currentBikeObject.searchBike(distance, city);
    });
});
