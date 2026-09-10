// primitive data
// 7 types :-string ,number ,boolean ,null ,undefined ,symbol ,bigint.

//string :- sequence of characters 
  const a = 10;

//number :- numeric value
const b = 20;
const c = 20.5;

//boolean :- true or false
const isloggedin = true;

//null :- empty value
const outsideTemp = null;

//undefined :- value is not assigned
let myname;

//symbol :- unique value
const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2); // false 
//is not equal because symbol is unique value.

//bigint :- large integer value
const bigIntValue = 1234567890123456789012345678901234567890n;
//bigint is used for large integer values that exceed the range of the number type in Js.



// non-primitive (reference) datatypes :-array ,object ,function.

//Array :- ordered collection of values
// syntax :- const myArray =[.....];
const myArray2 =[1,2,3,4,5];

//Objet :- collection of key-value pairs
// syntax :- const myObject = {key1:value1 , key2:value2 , key3:value3};
let myobject ={
    name : "OG",
    age : 20,
}

//function :- block of code that can be executed when called
// syntax :- function myFunction(){...}
function myFunction(){
    console.log("Hello World");
}   



//how to check the data type
// syntax :- console.log(typeof(variableName));
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(isloggedin));
console.log(typeof(outsideTemp));
console.log(typeof(myname));
console.log(typeof(id));
console.log(typeof(bigIntValue));
console.log(typeof(myArray2));
console.log(typeof(myobject));
console.log(typeof(myFunction));




// https://262.ecma-international.org/5.1/#sec-11.4.3