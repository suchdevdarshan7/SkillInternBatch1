//& Hoisting: 
// console.log(a)
// var a = 10 ; 

// Undefined
//! Before declaration and initialization if we try to access a variable using var keyword then it is called as hoisting 

// & Temporal dead zone : 

console.log(a,b);

let a = 10 ; 
const b = 100; 

// Uncaught ReferenceError: Cannot access 'a' before initialization

//! Before declaration and initialization if we try to access a variable using let and const  keyword then it is called as temporal dead zone