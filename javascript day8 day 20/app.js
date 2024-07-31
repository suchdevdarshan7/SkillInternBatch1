//! 13. lastIndexof()

// ? it is used to search from the last index
// ? it does not affect the original array 
// ? it returns the index of the element if present else it will return -1

// const colors = ["Red","blue","green","yellow","white","pink","violet"];

// console.log(colors.lastIndexOf("element"));

// console.log(isPresent)

// ! Higher order methods: 

// ~ 1. find();
// const colors = ["Red","blue","green","yellow","white","pink","violet"];


// colors.find((element,index,array) => {
//   console.log(`The array holds element ${element} , index ${index} and  the array ${array}`)
// }
// )

// ? this method is used to check whether an item is present or not 
// ? it does not affect the original array : 
// ? it will give the element if the condition matches else it will give undefined
// ? it will check only for one element 

//     const numbers = [10,20,30,40,50];
//     let element = numbers.find(callback)

//     function callback(element,index,array){
//     return (element>20) ? index : -1 ;
//     }

// console.log(element)


// ! 14. findIndex()

// ? this method is used to check whether an item is present or not 
// ? it does not affect the original array : 
// ? it will give the index of the element if the condition matches else it will give -1
// ? it will check only for one element 


// const colors = ["Red", "blue", "green", "yellow", "white", "pink", "violet"];
// const numbers = [10, 20, 30, 40, 50];

// const CheckNumbers = numbers.findIndex((element,index,array)=>{
//     return element>20;
// })

// console.log(CheckNumbers)
// const IndexOfColor = colors.findIndex((element, index, array) => {
//     return element === "element";
// })

// console.log(IndexOfColor)

// ! 14. sort()

// ? this method is used to sort an array 
// ? it affects the original array : 
// ? it will return the sorted array 

// & -------------------- Homework --------------------
// & what will happen if i sort strings ! 

// let numbers = [20,349,3492,692345,214,23496,2394];

// let sortedNumbers = numbers.sort((a,b)=>{
//     // return a - b; // Ascending order small to big 
//      return b - a // Descending order big to small 
// })
// console.log(numbers)
// console.log(sortedNumbers)

//! 15. map()
// ? map method is used to iterate over the array and perform some calculations
//? it will return an new array of updated values
//? map method will not affect the original array :  


// let numbers = [1,2,3,4,5];
// // !           1 4 9 16 25

// let updatedArray = numbers.map((element,index,array)=>{
//     return element === 2 
// })

// console.log(`The number array is ${numbers}`)
// console.log(`The updatedArray array is ${updatedArray}`)

//! 16. forEach()

// ? foreach() method is used to only to iterate over the array 
//? it will always return undefined
//? map method will not affect the original array :  

// let numbers = [1, 2, 3, 4, 5];

// const updatedNumbers = numbers.forEach((element,index,array)=>{
//     console.log(element)
//     // return undefined;
// })

// console.log(updatedNumbers)


//! 17. filter()


// ? filter() method is used to only filter the array based on the condition
//? it will always return a new array of filtered elements
//? filter method will not affect the original array :  


// let numbers = [1,2,2,3,3,4,54,6,7,563,4,234];

// let filteredArray = numbers.filter((e)=>{
//     return e > 18;
// })

// console.log(filteredArray)


// ! 18. flat()

// ?  flat() method is used to flatten the array or remove the nesting of array ! 
//? it will always return a new array of which is flattened
//? flat() method will not affect the original array :

// let sampleArray = [1,2,3,4,[1,2,3,[1,2,4,[4,523,42]]]]

// console.log(sampleArray)

// console.log(sampleArray.flat(1))
// console.log(sampleArray.flat(2))
// console.log(sampleArray.flat(3))

// console.log(sampleArray)

// ! 19. flatmap() 

//  let sampleArray = [1,2,3,4,[1,2,3,[1,2,4,[4,523,42]]]]

// let updatedArray = sampleArray.flatMap((element,index,array)=>{
//     return element ** 2 
// })

// console.log(updatedArray)


//! 20. join()

// ? join() method is used to join the element of the array 

//? it will return a string 
//? filter method will not affect the original array

// const colors = ["Red","blue","green","yellow","white","pink","violet"];

// console.log(colors.join());

// console.log(colors)


let numbers = [1,2,3,4,5,7];

let updatedArray = numbers.map((el,idx,arr) => el+2)

console.log(updatedArray)
