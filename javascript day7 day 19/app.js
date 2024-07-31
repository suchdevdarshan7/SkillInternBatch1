// 6. splice methods: 

// let colors = ["Red","blue","green","yellow","pink","violet"];

// * Delete using splice method: 
// ? 1. Splice method is used to insert or delete elements in an array : 
// ? 2. It will return the deleted elements in an array 
// ? 3. It affects the original array : 

// console.log(colors)

// first argument from which index should i start: 
// second argument is how many elements should i delete in this array : 
// console.log(colors.splice(2,1));

// console.log(`The colors array after deleting is ${colors}`)


//* Insertion using the splice method:


// ? 1. Splice method is used to insert or delete elements in an array : 
// ? 2. It will return the empty array 
// ? 3. It affects the original array : 
// ? 4. We can add n number of arguments where n refers to infinite : 

// let colors = ["Red","blue","green","yellow","pink","violet"];

// console.log(`The colors array before splicing ${colors}`)
// console.log(colors.splice(3,0,"I am inserted","I am also inserted"));

// console.log(`The colors array after splicing ${colors}`)



// 7. slice method: 


// ? 1. Slice method is used to slice array into fragments : 
// ? 2. It will return the sliced elements in an array 
// ? 3. It will not affect the orginal array :
// ? 4. It will not consider the last element 
// ? 5. If we don't mention the last index it will go up to the last element of the array 

// let colors = ["Red","blue","green","yellow","pink","violet"];

// let slicedArray = colors.slice(1,4);

// console.log(colors)
// console.log(slicedArray)


// 8. reverse method:
//? 1. This method is used to reverse the array 
//? 2. It returns the reversed array :
//? 2. It affects the original array 

// let colors = ["Red","blue","green","yellow","pink","violet"];

// console.log(colors.reverse())

// console.log(colors)

// 9. Fill method
//? 1. To replace all the elements with a paticular element we use fill method
//? 2. It returns the array which is updated with the filled elements 
//? 3. It affects the original array: 


// let colors = ["Red","blue","green","yellow","pink","violet"];

// console.log(colors.fill("Skill Intern"))


// console.log(colors)


// 10. at method
// ? To access the elements we use the at method 
// ? No it will not affect the original array 
// ? It will return the element at the specified 


// let colors = ["Red","blue","green","yellow","pink","violet"];


// console.log(colors.at())
// console.log(colors[1]);


//! 11. includes()


// ? To check whether an element is present or not we use includes method 
// ? No it will not affect the original array 
// ? if the element is present in the array it will return true, 
// ? if the element is not present in the array then it will return false; 


// let colors = ["Red","blue","green","yellow","pink","violet"];

// const answer = colors.includes("indigo");

// console.log(answer)


// 12. indexOf();

// ? To get the index of an element  we use indexOf method 
// ? No it will not affect the original array 
// ? if the element is present in the array it will return its index, 
// ? if the element is not present in the array then it will return -1; 

// let colors = ["Red","blue","green","yellow","pink","violet"];

// console.log(colors.indexOf("skillIntern"))



