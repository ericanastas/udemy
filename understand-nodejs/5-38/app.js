var obj = {
    name: 'Jon Doe',
    greet: function () {
        console.log(`Hello ${this.name}`)
    }
};

obj.greet();
//Hello Jon Doe

obj.greet.call({
    name: "Jane Doe"
});
//Hello Jane Doe


obj.greet.apply({
    name: "Jane Doe"
});
//Hello Jane Doe

