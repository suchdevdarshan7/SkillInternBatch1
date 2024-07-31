//? Objects: 

// const object = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }

// console.log(object);


// ? what are the different ways to create an object: 

// ? Create
//! Object literals : 

// const object = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }

// ! Object constructor 

// const object =new Object({name:"someone"});

// console.log(object)

//! Object constructor function :

// function demo(a,b,c){
//     this.a  = a;
//     this.b = b; 
//     this.c = c;
// }

// const object = new demo("somename",12,"male");
// console.log(object)


// function skillintern(student,course,fees){
//     this.student = student ;
//     this.course = course;
//     this.fees = fees;
// }

// const ObjectVariable = new skillintern("Ajay","Web Development", 1400);

// console.log(ObjectVariable);

// ! CRUD Operations: 


// ? Read 

// console.log(object.studentName);
// console.log(object["gender"])

// ? Update 


//  const object = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }
// console.log(`The age before updating is ${object.age}`)

// object.age = 22;

// console.log(`The age after updating is ${object.age}`)


// ? Delete:  


// console.log(`The age before deleting is ${object.age}`)

// delete object.age;

// console.log(`The age after deleting is ${object.age}`)
