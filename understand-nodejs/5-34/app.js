var Emitter = require('events'); //Loads the built in event emitter object
var config = require('./config');

var emtr = new Emitter();
emtr.on(config.events.GREET, function () {
    console.log("Hello there!");
})

emtr.on(config.events.GREET, function () {
    console.log("Hola!");
})

emtr.emit(config.events.g;

