require('dotenv').config();
const express =require('express');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/login',(req,res)=>{
    res.send("login page");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})
