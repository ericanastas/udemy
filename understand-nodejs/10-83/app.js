const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:Zy83vp5YEchqig9@cluster0.0nm1x.mongodb.net/udemy-learn-nodejs?retryWrites=true&w=majority";

mongoose.connect(uri);

//Schema is a function constructor
var Schema = mongoose.Schema;

//Create the schema
var personSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String
})

//Person is essentially a function constructor in that it generates objects
var Person = mongoose.model('Person', personSchema);

//Create a new Person instance
var john = Person({
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St'
})

//Save the new person
john.save(function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log("Person saved!");
    }

})

//Find and list all Persons
Person.find({}, function (err, users) {

    if (err) throw err;

    for (var user of users) {
        console.log("User: " + user.firstName);
    }

});