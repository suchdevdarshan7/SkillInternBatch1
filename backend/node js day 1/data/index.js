const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Web development course is very good')
})

server.listen(8000,()=>{
    console.log("The server is running in port 8000");
});







// fs.writeFileSync("./test.txt","I am a good boy","utf-8")

// fs.writeFile("./data.txt","I am the data file",'utf-8',(err,data)=>{
//     if(err){
//         console.log("There was error in the program ")
//         return;
//     }
//     console.log("Data written succesfully....")
// })


// const data = fs.readFileSync('./data.txt','utf-8');

// console.log("The file inside the data.txt is "+data)

// console.log("Loading....")
