
const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
        //  url: 'http://www-csas.csint.cz/webapi/v1/info/branches?web-api-key=dd3c4d08-6c39-411a-a37d-0fbea365fc1e',
        json: true
},
    function (error, response, body) {
        console.log('body: ', JSON.stringify(body, undefined, 2));
        console.log('error: ', error);
        console.log('response: ', JSON.stringify(response, undefined, 2));
});

