function greet(callback) {
    console.log("Hello");
    callback();
}


greet(function () {
    console.log("Callback was invoked");
})

//Hello
//Callback was invoked
