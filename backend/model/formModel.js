const mongoose=require('mongoose');

const formSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:[5,'Title must be at least 5 characters long']
    },
    description:{
        type:String,
        required:true,
        trim:true,
        minlength:[10,'Description must be at least 10 characters long']
    },
});

const Form=mongoose.model('Form',formSchema);

module.exports=Form;