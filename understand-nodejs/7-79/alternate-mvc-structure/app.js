var express = require("express");
var app = express();

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

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

apiController(app);
htmlController(app);


//start listening for requests
app.listen(port);
