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

// let myCreateDate = new Date ( "4-4-2004" );
// console.log(myCreateDate.toDateString());




// let newDate = new Date();
// console.log(newDate.getMonth() + 1); // +1 because 0 is January, 1 is February, and so on.

// // how to get moth
// console.log(`${newDate.getDay()} and the date is ${newDate.getDate()}`); // string interpolation

// let myoldBirthday = new Date("2004-05-04"); // yyyy-mm-dd
// console.log(myoldBirthday.toLocaleString());
let myBirthday = new Date("04-05-2004"); // mm-dd-yyyy
console.log(myBirthday.toLocaleString());




// let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(myBirthday.getTime());


// how to get date,time,month,year,day,hours,minutes,seconds,milliseconds.......
// let newdate =new Date()
// console.log(newdate.getMonth());
// console.log(newdate.getDate());
// console.log(newdate.getFullYear());
// console.log(Math.floor(newdate.getTime() / 1000)); //output in seconds.


// this is called string interpolation and 
// useing padStart() method to add leading zeros to the hours and minutes if they are less than 10.
// console.log(`${String(newdate.getHours()).padStart(2, "0")}:${String(newdate.getMinutes()).padStart(2, "0")}`);
//output :- 09:05 in this format.


//how to get international date format using toLocaleString() method. 
let newDate = new Date();
console.log(newDate.toLocaleString('en-US', {
    // how to get all properties ctrl + space bar
    weekday: "long",
    year: 'numeric',
    month: 'long',
}));
