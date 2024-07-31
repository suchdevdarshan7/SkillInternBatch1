const express = require('express');

const app = express();

app.use(express.json())

const products = [
    {
        id:1,
        course: "Python Development",
    },
    {
        id: 2,
        course:" Web Development",
    },
    {
        id: 3,
        course: "Ethical Hacking ",
    },
    {
        id: 4,
        course: "Data Science"
    }

]

app.get('/api/courses',(req,res)=>{
    console.log(products)
    res.send(products)
})

app.post('/api/courses',(req,res)=>{
    products.push(req.body);
    console.log(products)
    res.send(products)
})

app.put(){

}

app.delete(){

}


app.listen(3000,()=>{
    console.log("The server is running in port 3000");
})