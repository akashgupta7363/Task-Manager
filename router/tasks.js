const express=require('express');
const router=express.Router();
const { getAllTasks,postNewTask,deleteTask,viewTask,updateTask } = require('../conrollers/tasks');

router.route('/').get(getAllTasks).post(postNewTask)
router.route('/:id').patch(updateTask).get(viewTask).delete(deleteTask)


module.exports=router 