var util = require('util');

function Person() {
    this.firstName = 'Jon';
    this.lastName = 'Doe';
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

function PoliceMan() {
    Person.call(this);
    this.badgeNumber = "1234";
}

util.inherits(PoliceMan, Person);

var cop = new PoliceMan();
console.log(`badgeNumber: ${cop.badgeNumber}`);
//1234

cop.greet()
//"Hello undefined undefined" if `Person.call(this)` is ommited above
//"Hello Jon Doe" if `Person.call(this) is included above