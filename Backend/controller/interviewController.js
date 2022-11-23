const interviewModel=require('../models/interviewModel')


module.exports.getAllinterviews=async function getAllinterviews(req,res){
    let allnterviews=await interviewModel.find();
    if(allnterviews)
    {
        console.log('interviews Scheduled');
        res.json({
            message:'interviews found',
            data:allnterviews,
        })
    }
    else{
        console.log("Add atleast one User")
        res.json({
            message:"Please schedule",
        })
    }
}


module.exports.createInterview=async function createInterview(req,res){
    try{
        // console.log("User Added");
        let data=req.body;
        console.log(data)
        let interview=await interviewModel.create(data);
        if(interview)
        {
            res.json({
                message:"Interview Scheduled",
                data:interview
            })
        }
        else{
            res.json({
                message:"error"
            })
        }
    }
    catch(err)
    {
        res.json({
            message:err.message,
        })
    }
}