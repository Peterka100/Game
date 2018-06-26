const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

//Priprava partials - tj. footer pro vsechny stranky, nebo header
hbs.registerPartials(__dirname + '/views/partials');

// Mělo by to nasetovat cestu k adresaru, kde máme HTML stránky
app.set('view engine', 'hbs');

//Príprava templete
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    var now = new Date().toString();
    var log = `${now}: ${req.method}  ${req.url}`;
    console.log(log);
    //uložení do souboru
    fs.appendFile ('server.log', log + '\n', function (err) {
       if(err){
           console.log('Unable to append to server.log')
       }
    });

    next();
});

app.use(function(req, res, next){
   res.render('maintenance.hps');
});

//registrace helpru
hbs.registerHelper('currentYear', function () {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', function (text) {
   return text.toUpperCase();
});

//Nastavovaní jednotlivých route
app.get('/', function (req,res) {
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my Website'
    })
//  res.send('<h1>Hello Express!</h1>');
//    res.send({
//        name: 'Andrew',
//        likes: [
//            'Biking',
//            'Cities'
//        ]
//    });

});


app.get('/about', function (req,res) {
   res.render('about.hbs', {
       pageTitle: 'About Page'
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