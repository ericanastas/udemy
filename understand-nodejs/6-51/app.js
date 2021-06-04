var fs = require('fs');

var readableStream = fs.createReadStream(__dirname + "/greet.txt", {
    encoding: 'utf-8', // tells the stream to decode the data into a string
    highWaterMark: 1024 //changes the buffer size
});

var writeableStream = fs.createWriteStream(__dirname + "/greet-copy.txt", {
    encoding: "utf-8",
})

//Just 
readableStream.on("data", function (chunk) {

    //this may be called multiple times if the buffer
    //is smaller then the file

    console.log(chunk.length);
    console.log(chunk);

    writeableStream.write(chunk);

});

