var apiBikeKey =  require('./../.env').apiBikeKey;
var apiBikeKey =  require('./../.env').appIDBike;

Bike = function() {
};

Bike.prototype.searchBike = function (distance, city) {
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=' + distance + '&stolenness=all').then(function(response) { displayBikes(city, response.bikes.length);}).fail(function(error) {
        $('.showBike').text(error.responseJson.message);
    });
};

exports.bikeModule = Bike;
