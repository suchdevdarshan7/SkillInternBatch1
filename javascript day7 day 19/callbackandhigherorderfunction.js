function add(a,b){
    console.log(a+b)
}

// The function which accepts a function as a parameter is called as a higher order function
function HOF(add){
    add(10,20);
    console.log("Hello i am the higher order function")
}
HOF(add);

// The function which we are passing as a argument is called as a callback function: 