const express=require('express');
const { getAlluser,add } = require('../controller/userController');
const userRouter=express.Router();


userRouter
.route('/add')
.post(add);

userRouter
.route('')
.get(getAlluser);


module.exports=userRouter;