var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var templateHtml = fs.readFileSync(__dirname + '/index.html', 'utf-8');
    var message = `Hello world, the time is now ${new Date()}`;
    var html = templateHtml.replace("{message}", message);
    res.end(html);
}).listen(8080, '127.0.0.1');