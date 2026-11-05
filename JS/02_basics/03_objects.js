// wan you create a literal object, is not create a singleton object
 // because you can create multiple objects from the same literal object.
  //------------------------------if------------------------------
// if it's created using a constructor function, then it's a singleton object,
 // because you can create only one object from the constructor function. 


 // =======================================================================================
// singlenton


//constructor method   // object.create() method
 


//Object literal
const mysym = Symbol("key1");
//how use symbol as a key in an object // [] :""


const jsuser = {
  name: "OG",
  [mysym]: "mykey1",            //add Symbol
  age: 20,
  email: "ogisog@gmail.com",
  isLoggedIn: false,
}
//two ways to access the properties of an object
console.log(jsuser.name);

console.log(jsuser[mysym]);   
 // output: [Symbol(key1)]      //Symbol
 
console.log(jsuser["age"]);
// 🤔 but way we use this method. Because ↓

const jsuser2 = {
  name: "OG",
  "full name": "OG is OG",  //if the property name has space in it,we dont have to access it using dot notation,that's why we use.....
  age: 20,
}
// console.log(jsuser.full name);    // this will give an error because of the space in the property name
console.log(jsuser2["full name"]);


//===============================
//How to change the value of a property in an object
jsuser.age = 25;
console.log(jsuser.age); // output: 25
//===============================
//how to lock a Value or we want no one can change the value so.....
object.freeze(jsuser); // this will lock the object and no one can change the value.


