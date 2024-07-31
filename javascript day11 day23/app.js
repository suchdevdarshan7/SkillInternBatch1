
// button.innerHTML
// button.innerText 
// button.textContent

// button.innerHTML = `<h1>Hello <span>Javascript</span></h1>`

// button.innerText = `I am a good boy <h1>click me to become good boy</h1>`

// button.textContent = `<h1>I am a good boy</h1>`

//! Imperative :

// const button = document.createElement('button');
// button.textContent = "Click me";
// document.body.append(button);

// const buttonClick = document.createElement('button')
// buttonClick.textContent = "Click me twice";
// document.body.append(buttonClick)


// ! Destructring Arrays : 

// let colors = ['red','blue','green','yellow','pink','grey','dodgerblue'];

// let [firstColor, , , secondColor] = colors;

// console.log(firstColor);
// console.log(secondColor)

// ! Destructring Objects : 

// let object = {
//     name: "Teja",
//     course:"Web development",
//     age:"20"
// }

// let {name:darshan,course,age} = object;

//! Implicit return :

// let functionDemo = (el) => el**2 ;
// let functionDemo2 = el => el**2 ;


// const ans = functionDemo(10);
// const answer = functionDemo2(10);

// console.log(ans)
// console.log(answer)

//! Explicit return :

// let functionDemo = (element)=>{
//     return element**2;
// }

// const ans = functionDemo(10);

// console.log(ans)


// function demo(){
//     console.log(arguments)
// }

// demo("Darshan","something","trainer");


// let demo = ()=>{
//     console.log(arguments)
// }

// demo("Hi","i","am","good","boy")


//! Important 

//rest and spread ...

// Rest parameter 
// Spread operator :

// let arr = [1,2,3,4,5];

// console.log(...arr)

function demo(a,b,...e){
    console.log(a,b)
    console.log(...e)
}

demo(1,2,3,4,34,35,34,2134);




