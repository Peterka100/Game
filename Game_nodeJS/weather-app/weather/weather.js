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
