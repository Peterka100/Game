/*
var geocodeAddress = function (address) {
    return new Promise (function (resolve, reject) {
        const request = require
    });
    geocodeAddress('19146').then(function (location) {
        console.log(JSON.stringify(location,undefined,2))
    }, function(errorMessage) {
        console.log(errorMessage);
    })
};
*/

const request = require('request');

var geocodeAddress = function(address) {
    return new Promise(function(resolve, reject) {
        var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, function(error, response, body) {
        if (error) {
            reject('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address.');
    } else if (body.status === 'OK') {
        resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
});
});
};

geocodeAddress('08822').then(function(location) {
    console.log(JSON.stringify(location, undefined, 2));
}, function(errorMessage) {
    console.log(errorMessage);
});