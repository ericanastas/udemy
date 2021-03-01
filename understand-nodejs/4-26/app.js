//Function is returned and can be called directoy
let greet1 = require("./greet1");
greet1();

//Function is added as a property of the exports object
let greet2a = require("./greet2");
greet2a.greet();

let greet2 = require("./greet2").greet;
greet2();


let greet3a = require("./greet3");
greet3a.greet();

let greet3b = require("./greet3");
console.log(greet3a === greet3b);
//true because require caches the values returned


let greet4 = require("./greet4");

let greet4a = new greet4();
let greet4b = new greet4();

console.log(greet4a === greet4b); //false




let greet5 = require("./greet5");
greet5.greet();



