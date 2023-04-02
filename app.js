const express=require('express');
const app=express();
const routes=require('./router/tasks')
app.use(express.json());


app.get('/hello',(req,res)=>{
   res.send('Task Manager')
})
app.use('/api/v1/tasks',routes)


const port=3000;
app.listen(port,console.log(`The server is listening on Port ${port}`));
