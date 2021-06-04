var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

//static middeware built into express
app.use('/assets', express.static(__dirname + '/public'));

//sets up ejs
app.set('view engine', 'ejs');

//custom middleware logging function
app.use('/', function (req, res, next) {
    console.log("Request Url: " + req.url);
    next();
});

app.get('/', function (req, res) {
    res.render("index");

});

app.get('/person/:id', function (req, res) {
    res.render("person", {
        ID: req.params.id
    });
    //looks in the /views folder (by default) for a file mmatching the provided name, with the extension set above (ejs)
});

app.listen(port);
