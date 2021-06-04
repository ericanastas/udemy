var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

module.exports = function (app) {

    //GET a person by id
    app.get('/api/person/:id', function (req, res) {

        res.json({
            id: req.params.id,
            firstName: "John",
            lastName: "Smith",
        });

    });

    //POST saves a new person
    app.post('/api/person', jsonParser, function (req, res) {

        //save the person
        var person = req.body;

    });

    //DELETE deletes the person by id
    app.delete('/api/person/:id', function (req, res) {

        var id = req.params.id;
        //delete the person
    });



}