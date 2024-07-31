const fs = require('fs');
const http = require('http');
const port = 8000;

const server = http.createServer((req,res)=>{
    res.end("Hello world!")
})

server.listen(port,()=>{
    console.log(`The server is running in port ${port}`)
})
