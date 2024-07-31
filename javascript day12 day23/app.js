
//! Synchornous nature --> it will execute line by line : 

// console.log("hi")

// console.log("Welcome")

// console.log("hello")

// ! Asynchornous nature --> It will not execute line by line 

// console.log("Hello!")

// setTimeout(() => {
//     console.log("Welcome")
// }, 2000);

// console.log("Hi")



//! Settimeout()


// setTimeout(()=>{
//     console.log("Hello Welcome to javascript course")
// },5000);

// setInterval()

// setInterval(()=>{
//     console.log("Hello welcome to javascript ")
// },1)


// Stack has overflowed : 

//? clearInterval:

// let count = 0 ; 


// let interval = setInterval(() => {
//     count++;
//     console.log(count)

//     if(count===10){
//         clearInterval(interval)
//     }


// }, 1000);




// ! JSON and JSON parse and JSON stringify

// const jsonString = `{
// "name":"John Doe",
// "age":30,
// "hobbies":["reading","traveling","coding"],
// "address":{"street":"123 Main St","city":"Anytown","country":"USA"}
// }`;

// console.log(jsonString)

// const data = JSON.parse(jsonString)

// const convertToJson = JSON.stringify(data);

// console.log(data)

// console.log(convertToJson)

// ! Promise : 


// const Guy = new Promise((selected,rejected)=>{
    
//     // selected("You are selected !")

//     rejected("You are rejected")

// }).then((result)=>{
//     console.log(result)
// }).catch((rejected)=>{
//     console.log(rejected)
// }).finally(()=>{
//     console.log("if selected also no problem rejected also no pblm")
// })

// console.log(Guy)


// const YoutoYourFriend = new Promise((beHonestKeepItSecret,leakTheSecret)=>{
//     // beHonestKeepItSecret("I will never betray my friend")

//     leakTheSecret("You are not my friend anymore !")
// }).catch((message)=>{
//     console.log(message)
// })


// let Promise1 = new Promise((res , rej)=>{
    
//     setTimeout(()=>{
//         resolved("I am resolved!")
//         console.log(Promise1)
//     },2000)
// })


// console.log(Promise1)

// function fetchApi(){
//     let response = fetch('https://fakestoreapi.com/products')
//     let data = response.then((data)=>{
//         return data.json()
//     })

//     let finalData = data.then((apiData)=>{
//         console.log(apiData)
//     })
// }

// fetchApi();

const container = document.querySelector('.container');

function renderContent(element){

    const html = `
    <div class="box">
            <h1>
                ${element.title}
            </h1>
            <img src=${element.image} alt="">
        </div>
    `

    container.innerHTML += html;
    
}


const fetchApi = ()=>{

    fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=> {
        data.map((element)=>{
            renderContent(element)
        })
    })
}

fetchApi()