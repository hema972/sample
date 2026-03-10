const express = require("express");
const router = express.Router();
const {createTask,getAllTask, getTaskById , updateTask , deleteTask} = require("../controller/taskcontroller")
const {protect}=require('../middleware/authmiddleware') 
router.post('/create', protect,createTask);
router.get('/getTask',protect,getAllTask)
router.get('/getTask/:id',protect,getTaskById) //: means id dynamically changes
router.put('/updateTask/:id',protect,updateTask)
router.delete('/deleteTask/:id', protect, deleteTask)
module.exports = router;    