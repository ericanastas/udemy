var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    //remember the 
    var obj = {
        firstName: "John",
        lastName: "Doe"
    }

    //Stringify converts the object into a string
    res.end(JSON.stringify(obj));

}).listen(8080, '127.0.0.1');