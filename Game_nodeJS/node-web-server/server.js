const express = require('express');

var app = express();

app.get('/', function (req,res) {
//  res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'Biking',
            'Cities'
        ]
    })
});

app.listen(3000);