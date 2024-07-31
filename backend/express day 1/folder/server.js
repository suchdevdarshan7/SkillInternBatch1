const express = require('express');
const fs = require('fs')
const app = express()
const html = fs.readFileSync('./frontend/index.html',"utf8");
const cors = require('cors');

app.use(cors())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send(html);
})
app.get('/style.css',()=>{
    res.send(css);
})
app.listen(3000,()=>{
    console.log("The server is running in port 3000")
})