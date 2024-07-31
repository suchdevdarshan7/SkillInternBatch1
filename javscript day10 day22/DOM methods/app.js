//! Dom methods in javascript : 

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()


// ? document.getElementById()

// let heading = document.getElementById("heading");

// console.log(heading)


// ? document.getElementsByClassName() 

// let description = document.getElementsByClassName('demo');
// HTML Collection which is a impure array 


// ? document.getElementsByTagName()

// let headings = document.getElementsByTagName('h1');
// console.log(headings)
// HTML Collection which is a impure array 


// ? document.querySelector() --> first element will only be selected

// let heading = document.querySelector('#heading');
// let demos = document.querySelector('.demo');

// console.log(heading)
// console.log(demos)

// ? document.querySelectorAll('.demo');
// ? Node list of all the elements

let buttons = document.querySelectorAll('.btn')
console.log(buttons)

buttons.forEach((element,index,array)=>{
    element.disabled = true;
    element.style.cursor = "not-allowed";
    element.style.display = "none";

})



