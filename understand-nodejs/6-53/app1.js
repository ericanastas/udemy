var fs = require('fs');

var readableStream = fs.createReadStream(__dirname + "/greet.txt");
var writeableStream = fs.createWriteStream(__dirname + "/greet-copy.txt",)

readableStream.pipe(writeableStream);

