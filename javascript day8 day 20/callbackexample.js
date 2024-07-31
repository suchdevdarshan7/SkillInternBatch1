
// ! callback 

function higherOrderFunction(cb){
    cb();
    console.log("I am a higher order Function")
}

function callback(){
    console.log("Hi i am a callback function ")
}

function greet(){
    console.log("Hello welcome to this course!")
}

higherOrderFunction(callback);

higherOrderFunction(greet)