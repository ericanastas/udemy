class Stark {
    name: string = "Brandon"; //this sets a default property
    static castle: string = "Winterfell";
    saying: string;

    constructor(){
        this.saying = "Winterfell!"; //sets a default property in the constructor
    }


    //Classes Method
    hello(person:string){
        console.log("Hello "+ person);
    }

}

//Create a new Stark instance
var ned = new Stark();

//Set Properties
ned.name = "Ned";
ned.saying = "Winter is comming"; 

//Read Property
console.log(Stark.castle);

//Call Method
ned.hello("Catyln");
