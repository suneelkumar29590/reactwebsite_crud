const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
   
   otp:{
    type:String,
    require:true,
},
 
mbl:{
    type:String,
    require:true,
},





})

const otpData=mongoose.model("otpData",productSchema);
module.exports =otpData;