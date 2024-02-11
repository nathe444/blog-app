const express = require('express');
const app =express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const authRoute = require('./routes/auth');
const usersRoute= require('./routes/users');
const postsRoute= require('./routes/posts');
const categoriesRoute = require('./routes/categories');
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(console.log('connected to MongoDb')).catch((err)=>console.log(err.message));


const storage = multer.diskStorage({
  destination:(req , file , callBack) =>{
    callBack(null,"images");
  },
  filename:(req , file , callBack)=>{
    callBack(null , req.body.name);
  }
});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single('file'),(req,res)=>{
  res.status(200).json("The file has been uploaded");
})

app.use("/api/auth", authRoute); 
app.use("/api/users", usersRoute);
app.use("/api/posts" ,postsRoute );
app.use("/api/categories",categoriesRoute);

app.listen('5000' , ()=>{
  console.log('server started on port 5000');
})