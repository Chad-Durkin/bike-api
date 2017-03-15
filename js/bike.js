var apiKey =  require('./../.env').apiKey;

Bike = function() {
};

Bike.prototype.searchBike = function (distance, city, displayNumber, year, displayBikes) {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=' + displayNumber + '&location=' + city + '&distance=' + distance + '&stolenness=proximity&access_token=' + apiKey).then(function(response) {
            response.bikes.forEach(function(bike) {
                displayBikes(bike, year);
            });
        }).fail(function(error) {
            $('.showBike').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
