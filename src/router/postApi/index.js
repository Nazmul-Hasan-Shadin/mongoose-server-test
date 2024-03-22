const express=require('express')
const { route } = require('../../app')
const postApi = require('../../api/postApi/postApi')
const router=express.Router()


router.post('/testpost',postApi)


module.exports=route