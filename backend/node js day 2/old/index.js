const fs = require('fs');
const http = require('http')
const os = require('os');
const crypto = require('crypto')


const server = http.createServer((req,res)=>{
    if(req.url==='/' && req.method==="GET"){
        res.end("<h1>Hello i am get request</h1>")
    }
    else if(req.url==='/' && req.method==="POST"){
        res.end("<h1>Hello i am post request </h1>")
    }
  
})

server.listen(3000,()=>{
    console.log("The server is running in port 3000");
})