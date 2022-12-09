const express=require('express')
const app=express()
require("dotenv").config()
app.get("/",(req,res)=>{
    res.send("helloo")
})


app.get("/name",(req,res)=>{
    res.send(`my name is ${process.env.name}`)
})
app.listen(9000,()=>{
    console.log("listening9000....")
})