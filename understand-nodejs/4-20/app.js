function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
}

var john = new Person("John", "Smith");

var joe = Person("Joe", "Smith");

john.greet();
//Hello John Smith

joe.greet();
//Hello Joe Smith

