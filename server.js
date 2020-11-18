// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/home');
});

// about page
app.get('/llpregistration', function(req, res) {
    res.render('pages/llpregistration');
});
//comingsoon page
app.get('/:abc', function(req, res) {
    res.render('pages/comingsoon');
});

app.listen(3000 || process.env.PORT);
console.log('3000 is the magic port');