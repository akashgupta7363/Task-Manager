

const getAllTasks=(req,res)=>{
   res.send('All Tasks')
}
const postNewTask=(req,res)=>{
   res.send('posting new tasks')
}
const updateTask=(req,res)=>{
   res.send('updating tasks')
}
const deleteTask=(req,res)=>{
   res.send('deleting tasks')
}
const viewTask=(req,res)=>{
   res.send('viewing single tasks')
}




module.exports={
   getAllTasks,postNewTask,deleteTask,viewTask,updateTask
}