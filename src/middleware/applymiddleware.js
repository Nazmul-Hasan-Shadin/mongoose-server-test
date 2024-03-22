const cors= require('cors')
const express=require('express')

const applayMiddleware= (app)=>{
    app.use(cors({
        origin: '*'
    }))

    app.use(express.json())
}

module.exports= applayMiddleware