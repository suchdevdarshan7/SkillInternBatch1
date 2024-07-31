//! Object methods:


//? Object.keys method

// ! giving all the key of the object in an array :

// console.log(Object.keys(StudentDetail));

// ? Object.values()

// ! giving all the  values of the object  in an array :
// console.log(Object.values(StudentDetail))

//? Object.seal()

// ! Object. seal method we can utilize all the object key and values but we cannot delete anything

// Object.seal(StudentDetail);

// delete StudentDetail.studentName 

// console.log(StudentDetail)

//? Object.isSealed()

// ! Object.isSealed() method is used to check whether the object is sealed or not : 


// console.log(Object.isSealed(StudentDetail)) 


//? Object.freeze()

//! Object.freeze() method is used to freeze the object (only reading ) (no updation deletion)

//  const StudentDetail = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }


// Object.freeze(StudentDetail);

// StudentDetail.studentName = "Yamuna";

// delete StudentDetail.age

// console.log(StudentDetail)


//!Object.isFrozen()

//? whether the object is frozen or not !

// console.log(Object.isFrozen(StudentDetail))

//! ObjectName.hasownproperty('property_name')
// ! whether the object has the property or not 

//  const StudentDetail = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }


// console.log(StudentDetail.hasOwnProperty('birthday'))


//! Object.assign()


//  const BasicDetail = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }

// const AdvanceDetails = {
//     dept: "Computer Science",
//     cgpa: 9.6,
//     native: "Dubai",
// }

// const StudentDetails = Object.assign(BasicDetail,AdvanceDetails);

// console.log(StudentDetails)

// !  Object.hasOwn()

//  const BasicDetail = {
//     studentName: "Devendran",
//     age: 19,
//     gender: "Male",
//     clg: "Xyz college"
// }


// console.log(Object.hasOwn(BasicDetail,"surname"))


// const number = [1,2,3,34,46,7];
// for(let i = 0 ; i<number.length;i++){
//     console.log(number[i])
// }

 const BasicDetail = {
    studentName: "Devendran",
    age: 19,
    gender: "Male",
    clg: "Xyz college"
}

for (const key in BasicDetail) {
    console.log(BasicDetail[key]);
}
