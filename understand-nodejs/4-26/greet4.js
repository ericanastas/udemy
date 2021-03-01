function Greetr() {

    this.greeting = "Hello 3";
    this.greet = function () {
        console.log(this.greeting);
    }
}


module.exports = Greetr;