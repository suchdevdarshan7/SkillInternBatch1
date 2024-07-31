import fs from 'fs'
import http from 'http'
let port = 8000;

const html = fs.readFileSync('./index.html','utf8'); 
const form = fs.readFileSync('./views/form.html',"utf-8")
const PageNotFound = fs.readFileSync('./views/pageNotFound.html','utf-8')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(html)
    }
    else if(req.url==='/form'){
        res.end(form)
    }
    else{
        res.end(PageNotFound);
    }
})

server.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})