const mongoose=require('mongoose');
const db_link='mongodb+srv://rajatsri24:12345@cluster0.vutxesw.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db_link)
.then(function(db){
    console.log('interview db connected');
})
.catch(function(err){
    console.log(err);
})


const interviewSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    date:{
        type:Date,
        default:Date.now,
        // required:true,
    }
})

const interviewModel=mongoose.model('interviewModel',interviewSchema);




module.exports=interviewModel;
