

function Emitter() {
    this.events = {};
}

//Subscibe to event
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || []; //init array property if it does not already exist
    this.events[type].push(listener); //Add function to the array
};

//Emit and event when something happened
Emitter.prototype.emmit = function (type) {

    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports = Emitter;