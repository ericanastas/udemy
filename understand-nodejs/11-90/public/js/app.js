//Sets up Angular module name TestApp
angular.module('TestApp', []);

//Adds a MainController controller function
angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.people = clientPeople;
}