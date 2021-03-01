function greet() {
    console.log("hello");
}

exports = greet();

console.log(exports);
console.log(module.exports);