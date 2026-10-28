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



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MEMORY:-
//   stack (Primitive) ,Heap (Non-Primitive)

// stack :- stores primitive data types and function calls
let myYTname = "OG";

let anotherYTname = myYTname;
anotherYTname = "OG2";

console.log(anotherYTname);
console.log(myYTname);

//note :- when we assign a primitive data type to another variable , it creates a copy of the original variable in the stack memory.
//         So when we change the value of the new variable , it does not change the value of the original variable.
// -----------------------------------------------------------------------------------------------------------------------------------

// heap :- stores non-primitive data types (array , object , function)
let myArray = [1,2,3,4,5];

let anotherArray = myArray;
anotherArray.push(6);

console.log(myArray);
console.log(anotherArray);

let myObject2 = {
    name : "OG",
    age : 20,
}
let anotherObject = myObject2;
anotherObject.name = "OG2";

console.log(myObject2);
console.log(anotherObject);

//note :- when we assign a non-primitive data type to another variable , it creates a reference to the original variable in the heap memory.
//          So when we change the value of the new variable , it also changes the value of the original variable.

