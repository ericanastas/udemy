var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello Word!";
    }

    greet(data) {
        console.log(this.greeting + ", Data: " + data);
        this.emit('greet', data);
    }
}