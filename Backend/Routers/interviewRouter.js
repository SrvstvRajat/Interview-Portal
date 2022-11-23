const express=require('express');
const { getAllinterviews,createInterview } = require('../controller/interviewController');
const interviewRouter=express.Router();


interviewRouter
.route('/create')
.post(createInterview);

interviewRouter
.route('')
.get(getAllinterviews);


module.exports=interviewRouter;