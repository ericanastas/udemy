
interface Stark{
    name:string;
    age?:number; //the ? makes the variable optional
}

function printName(stark : Stark)
{
    console.log(stark.name);
}

printName({name:"Eddard", age:12});
printName({name:"Catlyn"});
printName({label:"Eddard"}); //this failes the type script test