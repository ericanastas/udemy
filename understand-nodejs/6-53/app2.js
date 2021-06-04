var fs = require('fs');
var zlib = require('zlib');

//Creates a transform stream that comrpessses data.
var gzip = zlib.createGzip();

var readableStream = fs.createReadStream(__dirname + "/greet.txt");
var copyStream = fs.createWriteStream(__dirname + "/greet-copy.txt",)
var compressedFileStream = fs.createWriteStream(__dirname + "/greet.txt.gz",)


readableStream.pipe(copyStream);

readableStream.pipe(gzip).pipe(compressedFileStream);

