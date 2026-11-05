//singleton and // literal object
const user1 = new Object();  //this is singleton object.
const user2 = {}             //this is literal object. or non singleton object.

console.log(user1);
console.log(user2);

const user3 = {}
    user3.name = "OG";
    user3.age = 25;
    user3.Subscription = true;
    
     console.log(user3);

const user4 = {
    email: "og@gamil.com",
    fullname : {
        fistname: "OG",
        lastname: "isOG"
    }
}
console.log(user4.fullname.lastname); //this is how we access the nested object property.

const obj1= {1: "a", 2: "b"}
const obj2= {3: "c", 4: "d"}

//   const obj3= Object.assign({}, obj1, obj2)        // merge two objects into one object.

// but Easy way to do! 😎spread operator
     const obj3={...obj1, ...obj2} 
 console.log(obj3);


 console.log(Object.keys(user3)); 
 console.log(Object.values(user3));
 console.log(Object.entries(user3));

 //=========================================================================================================
 // How to check if a value doesn't exist.
 console.log(user3.hasOwnProperty('name'));

 