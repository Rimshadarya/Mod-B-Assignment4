// Question 1

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const stringArray = array.map(element => String(element));
// console.log(stringArray);   //// Answer is: ["42","true","hello, world!", "[object Object]",false",  "3.14",  "Javascript is fun!" ]

// Question2

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const numbers = array.filter(item => typeof item === "number");
// console.log(numbers);     //Answer: [42, 3.14]

// Question3

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// array.forEach(item => {
//     console.log(typeof item);
// });      // Answer is: number,boolean,string,object,boolean,number,string
  
// Question4

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const sum = array.reduce((acc, item) => {
//     return typeof item === "number" ? acc + item : acc;
//   }, 0);
  
//   console.log(sum);  //Answer is 45.14

// Question5

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const firstBoolean = array.find(item => typeof item === "boolean");
// console.log(firstBoolean); // Answer is true

// Question6


//const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
//const firstObjectIndex = array.findIndex(item => typeof item === "object");
 //console.log(firstObjectIndex); // Output: 3

// Question7

 //const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
 //const containsNumber = array.some(element => typeof element === 'number');
 //console.log(containsNumber); // true

// Question8

// const array = [42, true, "hello, world!", { name: "john", age: 25, isStudent: false }, false, 3.14, "Javascript is fun!"];
// const allStrings = array.every(element => typeof element === 'string');
// console.log(allStrings); // false
 
 