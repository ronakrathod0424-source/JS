
const marvel_heros = ["iron man","thor","doctor strange","hulk"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)

//    console.log(marvel_heros);
// // output: [ 'iron man', 'thor', 'doctor strange', 'hulk', [ 'superman', 'batman', 'flash' ] ]
//    console.log(marvel_heros[5]); 
// // output: 'superman'


// marvel_heros.push(...dc_heros)

//    console.log(marvel_heros);
//    //output: ['iron man', 'thor', 'doctor strange', 'hulk', 'superman', 'batman', 'flash']
//    console.log(marvel_heros[5]);
//    // output: batman

//"Spread Operator"

// Many People Use this method  
   const all_heros = [...marvel_heros, ...dc_heros]
   console.log(all_heros);
// output: ['iron man', 'thor', 'doctor strange', 'hulk', 'superman', 'batman', 'flash']
   console.log(all_heros[6]);

   //isArray ,from ,of 4 interview questions 
   //data scraping, wan select data from the wabsite and store it in the array Many time in different format,
   // so we can use Array.from() method to convert it into array.
console.log(Array.isArray("OG"));// output: false
console.log(Array.from("OG"));// output: [ 'O', 'G' ]
console.log(Array.from({name: "OG"}));// output: []