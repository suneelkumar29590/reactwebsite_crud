const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
   
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobilenumber:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
   
    confirmpassword:{
        type:String,
        require:true
    },
})

const userData=mongoose.model("userData",productSchema);
module.exports =userData;