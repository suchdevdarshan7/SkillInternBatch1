const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('<h1>Hello i am the response</h1>');
})

app.pos('/',(req,res)=>{
    console.log(req.body);
})

app.listen(port,()=>{
    console.log(`The server is running in port ${port}`)
})
