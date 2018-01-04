class Person {
    name:String;

    constructor(name: string){
        this.name = name;
    }

    dance(){
        console.log(this.name+" is dancing.");
    }
}

var bran = new Person("Bran");
bran.dance();



class AwesomePerson extends Person{

    dance(){
        super.dance();
        console.log(this.name+" is so awesome!");
    }
}


var rob = new AwesomePerson("Rob");
rob.dance();