//This line specifies the other file this line should reference
/// <reference path= "timesTwo.ts"/>
var use = new Utility.useful;
console.log(use.timesTwo(5));

//The following command is used to combine these files into a single util.js file
//tsc util.ts timesTwo.ts --out util.js