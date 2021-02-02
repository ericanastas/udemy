var greet = require('./greet.js');

greet();




var person = {
    firstName: "john",
    lastName: "Doe",
    greet: function () {
        console.log("hello, " + this.firstName);
    }

};

person.greet();

console.log(person.firstName);
console.log(person["firstName"]);