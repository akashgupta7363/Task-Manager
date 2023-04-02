const mongoose=require('mongoose');




const dbConnect=(url)=>{
   return mongoose
   .connect(url)
}





module.exports= dbConnect;