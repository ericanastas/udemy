var EventEmitter = require('events');
var util = require('util');

function Greetr() {

    //This runs the EventEmitter function on the object being created
    //This is like running a `super` constructor in other languages
    EventEmitter.call(this);

    this.greeting = "Hello Word!";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
    console.log(this.greeting + ", Data: " + data);
    this.emit('greet', data);
}

let greetr1 = new Greetr();

greetr1.on('greet', function (data) {
    console.log("Greeter1 greeted! Data: " + data)
});

greetr1.greet("Foobar");
//Hello
//Greeter1 greeted
