
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //This is syncronous meaning the javascript will stop and wait for the HTML buffer to fill
    //var html = fs.readFileSync(__dirname + '/index.html');

    //Instead createReadStream() and pipe() directly to the response
    //res is a writeable stream
    //this will cause data to be sent a chunck at a time
    //buffer stays small
    fs.createReadStream(__dirname + '/index.html').pipe(res);


}).listen(8080, '127.0.0.1');
