class Person {
    //constructor acts like a function constructor
    //Added values to each object created
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //methods added to the body of the class are automatically added to the prototype
    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

let john = new Person("John", "Doe");
john.greet();
//Hello John Doe

let jane = new Person("Jane", "Doe");
jane.greet();
//Hello Jane Doe

console.log(john.__proto__ === jane.__proto__);
//true