const name = "nik";
const repoCount = "100";

// old way of concatenation
// console.log(name + repoCount + "value");

// string interpolation
//  Syntax: `${variableName}`
// note :- we can use backticks (``) to create a template literal and use ${} to insert variables into the string.
console.log(`hello my name is ${name} and repo count is ${repoCount}`);

// string object
const gameName = new String('call of duty')

console.log(gameName[5]);

console.log(gameName.__proto__);

// string methods

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log (gameName.charAt(6));
console.log(gameName.indexOf('duty'));