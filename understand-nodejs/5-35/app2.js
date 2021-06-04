var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = "Hello Word!";
}

//This sets up 
util.inherits(Greetr, EventEmitter);
//Greetr.prototype = EventEmitter.prototype;

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ", Data: " + data);
    this.emit('greet', data); //This is possible because Greetr is also an EventEmitter
}

let greetr1 = new Greetr();

greetr1.on('greet', function (data) {
    console.log("Greeter1 greeted! Data: " + data)
});

greetr1.greet("Foobar");
//Hello
//Greeter1 greeted
