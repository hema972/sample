const express=require('express')
const router=express.Router()//predefined express.Routers it set to router
const {register,login}=require('../controller/authcontroller')//norm export use -> {} module.export use-> ()
router.post('/register',register)//to get from frontend we use post
router.post('/login', login);
module.exports=router 