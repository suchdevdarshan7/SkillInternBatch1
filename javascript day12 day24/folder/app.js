// https://fakestoreapi.com/products



const container =document.querySelector(".container");


function renderContent({title,image,price}){
    
    const html = `
          <div class="box">
            <h1>${title}</h1>
            <img src=${image} alt="">
            <h3>Price: $ ${price}</h3>
        </div> 
    `
    container.innerHTML = container.innerHTML + html;
    



    
}


async function fetchApi(){
    let response = await  fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    
    data.map((element)=>{
        console.log(element)
        renderContent(element)
    })
}

fetchApi()



















//! Fetch api using promise chaining: 
// function fetchApi(){
//     fetch("https://fakestoreapi.com/products")
//     .then((response)=> response.json()).then((data)=> console.log(data))
// }

// fetchApi()

// .json() --> Asynchrounously : 

//! Synchrounous 

// JSON.parse()
// JSON.stringify() --> stringfy will convert js object to json

