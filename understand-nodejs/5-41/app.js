var EventEmitter = require('events');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello Word!";
    }

    greet(data) {
        console.log(this.greeting + ", Data: " + data);
        this.emit('greet', data);
    }
}

let greetr1 = new Greetr();

greetr1.on('greet', function (data) {
    console.log("Greeter1 greeted! Data: " + data)
});

greetr1.greet("Foobar");
//Hello World!, Data: Foobar
//Greeter1 greeted! Data: Foobar
