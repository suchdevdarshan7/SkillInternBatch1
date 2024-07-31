const express = require('express');
const app = express();



app.get('/',(req,res,next)=>{
    console.log("The middleware is working !")
    res.send("hi")
    next()
},(req,res,next)=>{
    console.log("I am also middleware!")
})

app.get('/',(req,res)=>{
    console.log("The second middleware is running!")
})

app.listen(3000,()=>{
    console.log("The server is running in port 3000")
})