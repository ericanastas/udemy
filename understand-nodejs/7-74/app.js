var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello from Express</h1></body></html>')
    //express automatically sets the mime type based on the content being sent
});


app.get('/person/:id', function (req, res) {
    res.send(`<html><body><h1>Person: ${req.params.id}</h1></body></html>`)
});


app.get('/api', function (req, res) {
    var obj = { firstName: "John", lastName: "Smith" };
    res.json(obj);
    //res.json() automatically converts the JS object to a JSON string
});

app.listen(port);

