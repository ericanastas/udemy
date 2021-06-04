//creates an array buffer that contains 8 bytes
var buffer = new ArrayBuffer(8);

//Typed arrays wrap the data in the buffer
//Array buffer contains 64 bits = 8x8bytes
//thus can contain two 32 bit numbers
var view = new Int32Array(buffer);

view[0] = 123;
view[1] = 456;

console.log(view);
//Int32Array(2) [123, 456]