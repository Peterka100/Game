const request = require('request');

var getWeather = function (lat, lng, callback) {
    request({
        url: `https://api.darksky.net/forecast/d952ca7f505fbf828c35bb1196ede40f/${lat},${lng}`,
        json: true
    },function (error, response, body) {
        if(error){
            callback("Unable to connect to Forecast.io server.");
        }else if (response.status.code === 400) {
            callback('Unable to fetch weather.');
        }else if (response.status.code === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;


