const form = document.querySelector('form');
const username = document.querySelector('.username')
const password = document.querySelector('.password')

let DataOfUser = {};


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const userName = username.value;
    const passWord = password.value;


    if(userName==='' || password ===''){
        alert("The username and password must be filled")
        return;
    }
    else  if (passWord.length<5 ){
        alert("Your password is small")
        return;
    }
    else if(passWord.length>10){
        alert("Your password is too large ")
        return;
    }
    else{

        DataOfUser = {userName,passWord};
        console.log(DataOfUser)
        console.log("Form submitted")
    }


})