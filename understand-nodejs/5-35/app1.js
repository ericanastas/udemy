let person = {
    first: '',
    last: '',
    greet: function () {
        console.log("Hello I am " + this.first + " " + this.last);
    }
}


let jon = Object.create(person);
jon.first = "Jon";
jon.last = "Smith"

jon.greet();
//Hello I am Jon Smith