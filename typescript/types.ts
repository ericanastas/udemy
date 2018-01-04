//Sample Variables
var isDone : boolean =  false;
var age : Number = 123;
var taskType : string = "Hard";
var names : string[] = ["John","Sally", "Bob"];
var list : any[] = ["John","Sally", "Bob"];


//Invalid Sample Variable Assigments
taskType = 1;
isDone = "almost"
age = "old";
names = ["Eric", 213];
list = 2;



//Enum
enum Starks{
    Jon, Bran, Eddard, Catlyn
}

var cat : Starks = Starks.Catlyn;

//Function Return Value Types
function getName(): string{
    return false;
}


//Function Return Void
function getNothing(): void{
    return 1; //this fails because of return type
}