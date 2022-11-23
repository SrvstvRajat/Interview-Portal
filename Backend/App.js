const express=require('express');
const interviewRouter = require('./Routers/interviewRouter');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.listen(5000,()=>{
    console.log("Server Listening On Port 3000");
})
app.use(express.json());


const userRouter=require("./Routers/userRouter");
app.use('/user',userRouter);
app.use('/allInterviews',interviewRouter);