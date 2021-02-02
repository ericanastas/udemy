function changeNum(b) {
    b = 2;
}

var a = 1;
changeNum(a);
console.log(a);
//1

function changeObj(j) {
    j.name = "bar";
}

var obj = { name: "foo" };

changeObj(obj);
console.log(obj.name);
//bar