var fs = require('fs');

//Blocking
var greetSync = fs.readFileSync(__dirname + "/greet.txt", "utf-8");
console.log(greetSync);
//Hello World!

//Non-Blocking
fs.readFile(__dirname + "/greet.txt", function (err, data) {
    if (err) console.error(err);
    else console.log(data);

    //with no encoding data is a buffere
    //Buffer(13) [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 13, 10]
});


fs.readFile(__dirname + "/greet.txt", "utf-8", function (err, data) {
    if (err) console.error(err);
    else console.log(data);

    //Adding the encoding data is a string
    //Hello World!
});



