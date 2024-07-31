
// let isEvenOrOdd = (number%2==0)?"Even":"Odd";

// console.log(isEvenOrOdd)
// If block 

// let number = 5; 
// // ! only if the condition is satisfied then if block will work : 

// if(number%2==0){
//     console.log("Even");
// }
// // ! if the condition does not match then it will go to the else block

// else{
//     console.log("Odd")
// }

// ! 3 numbers ==> largest number 

// let a = 200000; 
// let b = 10000; 
// let c = 1000; 

// if(a>b && a>c){
//     console.log(`${a} is the largest number!`)
// }
// else if(b>a && b>c){
//     console.log(`${b} is the largest number`)
// }
// else{
//     console.log(`${c} is the largest number`)
// }

//? Write a javascript program to check whether a number is negative, positive or zero.

// let number = `somename`; 

// if(number===0){
//     console.log("The number is zero")
// }
// else if(number>0){
//     console.log(`The number ${number}  is positive`);
// }
// else if(number<0){
//     console.log(`The number  ${number} is negative`)
// }
// else{
//     console.log(`Invalid input`);
// }


// ? Write a javascript program to check whether a number is divisible by 5 and 11 or not

let number = 35;

if(number%5==0 && number%11==0){
    console.log("The number is divisble by both 11 and 5 ")
}

else{
    console.log("The number is not divisble by 11 and 5")
}