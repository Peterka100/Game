const express = require('express');
const hbs = require('hbs');

var app = express();

// Mělo by to nasetovat cestu k adresaru, kde máme HTML stránky
app.set('view engine', 'hbs');

//Príprava templete
app.use(express.static(__dirname + '/public'));



//Nastavovaní jednotlivých route
app.get('/', function (req,res) {
//  res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'Biking',
            'Cities'
        ]
    });
});


app.get('/about', function (req,res) {
   res.render('about.hbs', {
       pageTitle: 'About Page',
       currentYear: new Date().getFullYear()
   });
});

app.get('/bad', function (req,res) {
   res.send({
      errorMessage: 'Unable to handle request'
   });
});

app.listen(3000, function () {
    console.log('Server i up on port 3000');
});