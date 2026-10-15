const score = 400
// console.log(score);

// how to explicitly define i want a number data type.
const balance = new Number(300)
// console.log(balance);

// toString() method is used to convert a number to a string.
// Method:- console.log(balance. ());
// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));

const totalBalance = 100000
// console.log(totalBalance.toLocaleString());  //this method convert a number in to ( US ) format
//console.log(totalBalance.toLocaleString('en-IN'));  //this method convert a number in to ( India ) format  
 
// +++++++++++++++++++++++++++++ Math Object +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));

// all time useful method is Math.
console.log(Math.round(4.7));

// to round up a number.
console.log(Math.ceil(4.2));
// to round down a number.
console.log(Math.floor(4.7));
// in array Lowest value.
console.log(Math.min(0, 150, 30, 20, -8, -200));
//to round random number.
console.log(Math.random());
console.log(Math.random()*10);// to round random number between 0 to 10.
console.log((Math.random()*10) +1);// to round random number between 1 to 10.
console.log(Math.floor((Math.random()*10)+1));// to rounded random number between 1 to 10.

// how to get random number between 10 to 20.
const min =10
const max = 20

console.log(Math.random() * (max - min + 1));// to get random number between 0 to 20.
console.log(Math.random() * (max - min + 1) + min);// to get random number between 10 to 20.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// to get rounded random number between 10 to 20.