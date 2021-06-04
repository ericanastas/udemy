var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {


    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + `/index.html`).pipe(res)
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        //remember the 
        var obj = {
            firstName: "John",
            lastName: "Doe"
        }

        //Stringify converts the object into a string
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');