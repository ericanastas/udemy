//function statment
function greet() {
    console.log("hi");
}

function logGreeting(fn) {
    fn();
}

logGreeting(function () {
    console.log("Hello")
});

