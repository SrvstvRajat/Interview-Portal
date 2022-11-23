const mongoose=require('mongoose');
const db_link='mongodb+srv://rajatsri24:12345@cluster0.vutxesw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link)
.then(function(db){
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
})


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
})

const userModel=mongoose.model('userModel',userSchema);


// (async function createUser(){
//     let user={
//         name:'Rajat Kumar Srivastava',
//         email:'rajatk24srivastava@gmail.com'
//     };
//     let data=await userModel.create(user);
//     console.log(data);
// })();





module.exports=userModel;




// module.exports=