

const button = document.querySelector('.btn');

button.addEventListener("click",(e)=>{
    console.log(e)
})

document.body.addEventListener('keyup',(e)=>{
    if(e.key==='r'){
        document.body.style.backgroundColor = "green";
    }
    
    if(e.key==='e'){
        document.body.style.backgroundColor = "red";
        
    }
    if(e.key==='a'){
        document.body.style.backgroundColor = "orange";
    }
})
