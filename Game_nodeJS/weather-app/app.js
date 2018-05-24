/*

const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');




const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);


geocode.geocodeAddress(argv.address, function(errorMessage, results){
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results,undefined,2));
    }
    });

weather.getWeather(results.latitude, results.longitude, function(errorMessage, weatherResults) {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});

*/
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


geocode.geocodeAddress(argv.address, function(errorMessage, results) {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, function(errorMessage, weatherResults){
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
}
});
}
});

/*
const request = require('request');
request({
    url: 'https://api.darksky.net/forecast/d952ca7f505fbf828c35bb1196ede40f/39.9396284,-75.18663959999999',
    json: true
},function (error, response, body) {
    if(error){
        console.log("Unable to connect to Forecast.io server.");
    }else if (response.status.code === 400) {
        console.log('Unable to fetch weather.');
    }else if (response.status.code === 200) {
        console.log(body.currently.temperature);
    }
});

*/


// console.log(argv);
// console.log(encodedAddress);
/*
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        //  url: 'http://www-csas.csint.cz/webapi/v1/info/branches?web-api-key=dd3c4d08-6c39-411a-a37d-0fbea365fc1e',
        json: true
},
    function (error, response, body) {
        if(error){
           console.log("Unable to connect to Google servers.");
        } else if (body.status === 'ZERO_RESULTS') {
           console.log("Unable to find that address.");
        } else  if (body.status === 'OK') {
           console.log(`Address: ${body.results[0].formatted_address}`);
           console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
           console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
 //       console.log('body: ', JSON.stringify(body, undefined, 2));
 //       console.log('error: ', error);
 //       console.log('response: ', JSON.stringify(response, undefined, 2));
 //         console.log(`Address: ${body.results[0].formatted_address}`);
 //         console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
 //         console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
*/