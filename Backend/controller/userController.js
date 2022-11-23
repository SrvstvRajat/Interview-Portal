const { Console } = require('console');
const userModel=require('../models/userModel')


module.exports.getAlluser=async function getAlluser(req,res){
    let allUser=await userModel.find();
    if(allUser)
    {
        console.log('user');
        res.json({
            message:'users found',
            data:allUser,
        })
    }
    else{
        console.log("Add atleast one User")
        res.json({
            message:"Please Add User",
        })
    }
}


module.exports.add=async function add(req,res){
    try{
        // console.log("User Added");
        let data=req.body;
        console.log(data)
        let user=await userModel.create(data);
        if(user)
        {
            res.json({
                message:"User Added",
                data:user
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