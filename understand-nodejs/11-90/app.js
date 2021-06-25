var express = require("express");
var app = express();


app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + "/public"));


app.get('/', function (req, res) {
    res.render('index', { serverPeople: people });
})

var port = process.env.PORT || 3000;
var people = [
    {
        name: "John Doe"
    },
    {
        name: "Jane Doe"
    },
    {
        name: "Jim Doe"
    }
];


app.listen(port);


