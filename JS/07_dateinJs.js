//Date
// let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getSeconds());

let myCreateDate = new Date ( "4-4-2004" );
console.log(myCreateDate.toDateString());




let newDate = new Date();
console.log(newDate.getMonth() + 1); // +1 because 0 is January, 1 is February, and so on.

// how to get moth
console.log(`${newDate.getDay()} and the date is ${newDate.getDate()}`); // string interpolation