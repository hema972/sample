const Task = require("../models/task");
exports.createTask = async (req, res) => {
  try {
    const task=await Task.create({
      title:req.body.title,
      description:req.body.description,
      status:req.body.status,
      user:req.user.id
    })

    res.status(201).json({
      message: "Task created successfully",
      task
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
exports.getAllTask=async(req,res)=>
{
  try{
    const tasks=await Task.find({user:req.user.id})
    
    res.json(tasks)
  }
  catch(error){
    res.status(500).json(error)
  }
}
exports.getTaskById=async(req,res)=>{
  try{
    const task=await Task.findOne({
      _id:req.params.id,
      user:req.user.id
    })
    console.log(req.params.id,req.user.id)
    if(!task)
    {
      res.status(404).json({msg:"Task not exist"})
    }
    res.json(task)
  }
  catch(error)
  {
    res.status(500).json(error)
  }
}
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
      },
      { new: true }
    )

    if (!task) {
      return res.status(404).json({ msg: "Task not exist" })
    }

    res.json({ msg: "Task updated successfully", task })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
exports.deleteTask=async(req,res)=>
{
  try{
    const task=await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id})
    
    if (!task) {
      return res.status(404).json({ msg: "Task not exist" })
    }

    res.json({ msg: "Task deleted successfully", task })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
 