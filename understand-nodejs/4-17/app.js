


//function statment
function greet() {
    console.log("hi");
}

//this function is passed another function
function logGreeting(fn) {
    fn();
}

//logGreeting is passed greet() function
logGreeting(greet);


var greetEs = function () { console.log("hola"); }

logGreeting(greetEs);

//logGreeting is called with a function expression
logGreeting(function () {
    console.log("Hello")
});

//Outut
//hi
//hola
//hello


