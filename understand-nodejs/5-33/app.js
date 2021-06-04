var Emitter = require('./emitter');

var emtr = new Emitter();
emtr.on("greet", function () {
    console.log("Hello there!");
})


emtr.on("greet", function () {
    console.log("Hola!");
})

emtr.emmit("greet");