var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function (app) {



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



}