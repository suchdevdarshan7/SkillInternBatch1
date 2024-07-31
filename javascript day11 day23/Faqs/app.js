const paragraph = document.querySelector('p');

const boxes = document.querySelectorAll('.box');

boxes.forEach(element=> element.addEventListener("click",function(){
    element.classList.toggle('active');
}))