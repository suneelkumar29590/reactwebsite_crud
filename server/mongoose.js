const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    typeofreg:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobilenumber:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
})

const userData=mongoose.model("userData",productSchema);
module.exports =userData;