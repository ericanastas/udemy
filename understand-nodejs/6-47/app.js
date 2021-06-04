var buf = new Buffer('Hello', 'UTF-8');
console.log(buf);
//Buffer(5) [72, 101, 108, 108, 111]

console.log(buf.toString()); //convert back to string
//Hello

console.log(buf.toJSON()); //convert to JSON representation 
///{type: 'Buffer', data: Array(5)}


console.log(buf[2]);
//108

buf.write("foo");


console.log(buf.toString());
//foolo




