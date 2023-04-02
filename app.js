const dbConnect =require('./db/connect');
const express=require('express');
const app=express();
const routes=require('./router/tasks')
app.use(express.json());
require('dotenv').config()



app.get('/hello',(req,res)=>{
   res.send('Task Manager')
})
app.use('/api/v1/tasks',routes)


const port=3000;
const start =async ()=>{
   try {
      await dbConnect(process.env.MONGO_URI)
      app.listen(port,console.log(`The server is listening on Port ${port}`));

   } catch (error) {
      console.log(error)
   }
}  
start();