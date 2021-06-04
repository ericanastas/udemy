var express = require("express");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

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

//Query string is access from req.query
app.get('/person/:id', function (req, res) {
    res.render("person", {
        ID: req.params.id,
        age: req.query.age
    });
});

//Parse HTTP POST Form data using bodyParser
app.post('/person', urlencodedParser, function (req, res) {
    //express HTTP method functions can be passed multiple callback functions
    res.send('Thank you for the form data!');

    //urlencodedParser adds the body object
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

//Parse JSON data send to 
app.post('/personjson', jsonParser, function (req, res) {

    res.send("Thank you for the JSON data!");

    //jsonParser callback adds the body object
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});



//start listening for requests
app.listen(port);
