
//Object Properties and methdos
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';

console.log(obj[prop]);


//Functions and arrays
var arr = [];

arr.push(function () {
    console.log("Hello 1");
});
arr.push(function () {
    console.log("Hello 2");
});
arr.push(function () {
    console.log("Hello 3");
});

arr.forEach(function (f) {
    f();
});