
let button = document.querySelector(".btn");


function demo(){
    document.body.style.backgroundColor = "black";
}


button.addEventListener('click',demo)


button.removeEventListener("click",demo)