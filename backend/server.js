const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const cors = require('cors')  
const connectDB=require('./config/DB')
app.use(express.json())
app.use(cors())

connectDB()
app.use('/api/auth',require("./routes/authrouters"))
app.use('/api/task', require("./routes/taskroutes")) 
app.get('/api',(req,res)=>{
    res.send('Hello from Express framework')
})

app.listen(5000,()=>{
    console.log('Server running on 5000')
})

//in json file in script staart if we write node --watch we dont have to give reload again it automatically restart server --