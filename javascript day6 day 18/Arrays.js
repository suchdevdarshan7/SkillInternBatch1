// const a = 10 ; 

// a = 340; 


// console.log(a)

// Array --> it is the collection of homogenous and heterogenous data: 

// const data = ['hello','programming','web','coders',true,21349,82.54];
            //      0         1          2       3     4    5    6  

// console.log(data[4])
//  console.log(data) 

// let size = data.length; //  7 
// console.log(size)
// Last index will be always arrays size -1 
// console.log(data[size-1])
// let Abilash = ["Student","cse",500,false];
// let marksAbilash = [80,70,90,87,49];

// console.log(data[size])


// ! 1. Arrayname.length : 
// let arr = [1,2,3,34,5,4,7,456];

// let size = arr.length; 

// console.log(size)

//! 2.push();
// ? 1. when we try to use the push method what will happen is in the last index the element will be added 
// ? 2. It will return the updated size of the array 
//? 3. It will affect the original array ;


// let arr = ['1',2,456,234];
// console.log(arr)
// console.log(arr.length)

// console.log(arr.push("Darshan"));

// console.log(arr)

//!  3. pop()
// ? 1. when we try to use the pop method what will happen is in the last element will be removed 
// ? 2. It will return the last removed element
//? 3. It will affect the original array ;

// let arr = ['1',2,456,234];

// console.log(`The array before popping is ${arr}`)
// console.log(arr.pop());
// console.log(`The after before popping is ${arr}`)

// ! 4.shift();

// ? 1. when we try to use the shift method what will happen is in the first element will be removed 
// ? 2. It will return the first removed element
//? 3. It will affect the original array ;


// let colors =["red","green","blue","yellow","pink"];

// console.log(`The colors array before shifting ${colors}`)
// console.log(colors.shift());
// console.log(`The colors array after shifting ${colors}`)


// ! 5.unshift method: 
// ? 1. when we try to use the unshift method what will happen is in the first index the element will be added 
// ? 2. It will return the updated size of the array 
//? 3. It will affect the original array ;


let colors =["red","green","blue","yellow","pink"];

console.log(`The array before unshifting is ${colors}`)
console.log(colors.unshift('indigo'))
console.log(`The array after unshifting is ${colors}`)