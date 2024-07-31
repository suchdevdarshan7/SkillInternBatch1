// const heading = document.getElementById('heading');
// const paragraph = document.getElementsByClassName('class-selector');
// const headingElement = document.getElementsByTagName('h2');

// console.log(heading)
// console.log(paragraph)
// console.log(headingElement)

// const heading = document.querySelector('#heading');
// const heading2 = document.querySelector('.headingtwo');
// const heading3 = document.querySelector('h3');

// console.log(heading)
// console.log(heading2)
// console.log(heading3)


// const selectors = document.querySelectorAll('.demo');

// console.log(selectors)

// function ChangeColor(){
//     document.body.style.backgroundColor = "green";
// }

let button = document.querySelector('.btn');

function ChangeColor(){
     document.body.style.backgroundColor = "dodgerblue";
}

button.addEventListener('click',ChangeColor)

button.removeEventListener('click',ChangeColor)