var firstName = "Jane";

(function () {
    var firstName = "John";
    console.log(firstName);

}());


console.log(firstName);

//John
//Jane




var firstName = "Jane";

(function () {
    var firstName = "John";
    console.log(firstName);

}(firstName));


console.log(firstName);

//John
//Jane