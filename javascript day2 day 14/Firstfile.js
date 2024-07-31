//! Main topics : Operators,comments  and interpolation 

// ! Arithmetic operator:
//& + - / * ** %

// ! Assignment operator : 
//& = += -= *= /= %= **= 

// ! Comparision operator : 
//& == === < > <= >= != !==

//? == --> checks only the value:
// ? === --> checks the value and the datatype:
// ? <= checks whether it is less than or equal to 

//! Logical operator : 

//& &&  || 

// ? && (Logical And) works if two conditions are true then the output will be true: 

// ?  || (Logical OR) works if one of the two condition is true then output will be true: atleast one condition should be true

// ?  ! (Logical Not)  converts true values into false and false to true 

// ! Ternary operatore: 
// ? syntax : (condition)? true : false

// let number = 11; 

// let OddorEven = number%2===0 ?"Even ": "Odd";
// let EvenorOdd = number%2!==0? "Odd": "Even";

// let OddorEven1 = number%2==1 ? "Odd": "Even";
// let EvenorOdd1 = number%2!=1 ? "Even": "Odd";

// console.log("The number is "+OddorEven);
// console.log("The number is "+EvenorOdd);
// console.log("The number is "+OddorEven1);
// console.log("The number is "+EvenorOdd1);

//~ Example two :

// let a = 1090 ; 
// let b = 2000 ;

// let ans = (a>b)? `${a} is greater than ${b} `: `${b} is greater than ${a}`

// console.log(ans)

// ! Interpolation : expressing somejavascript code inside the string :

//* string representation ==>  ` ` '' " "

// let date = new Date().getDate()
// console.log("The today's date is "+date+' th of march')
// console.log(`The today's date is ${new Date().getDate()}th of march `)


// This code is for adding two numbers --> single line comments : 
// Imagine Complex code 
let a = 10 
let b = 20 
let c = a + b; 
console.log(`The sum is ${c}`);

/* this 
is 
the best 
course 
you 
--> Multiline comments : 
*/




