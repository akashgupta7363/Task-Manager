const Task=require('../models/tasks')

const getAllTasks=(req,res)=>{
   res.json(req.body)
}
const postNewTask= async (req,res)=>{
   try {
      const task= await Task.create(req.body)
      res.status(201).json({task})
      
   } catch (error) {
      res.status(500).json({msg : error})
   }
}
const viewTask=(req,res)=>{
   res.json({id : req.params.id})
}
const updateTask=(req,res)=>{
   res.send('updating tasks')
}
const deleteTask=(req,res)=>{
   res.send('deleting tasks')
}




module.exports={
   getAllTasks,postNewTask,deleteTask,viewTask,updateTask
}