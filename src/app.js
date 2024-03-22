const express = require('express');
const applayMiddleware = require('./middleware/applymiddleware');
const connectToDatabase = require('./db/connectDb');
const app= express()
const port = 3000;



const testpostApi=require('./api/postApi/postApi')


applayMiddleware(app)



// here use all api route

app.use(testpostApi)





app.get('/health',(req,res)=>{
   res.send('server is running')
})


app.all('*',(req,res,next)=>{
    const error= new Error(`the reqsueted url ${req.url} is invaild`)
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(404).json({message:err.message})
})


connectToDatabase()

app.listen(port,()=>{
    console.log(`server is runnning at ${port} bro`)
})

module.exports=app