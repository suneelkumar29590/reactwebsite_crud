const mongoose = require("mongoose");

const companyprofileData=new mongoose.Schema({

companyprofileName:{
    type:String,
    required:true,
},
companyprofileWeblink:{
    type:String,
    required:true,
},
companyprofileFoundedDate:{
    type:String,
    required:true,
},
companyprofileIndustryType:{
    type:String,
    required:true,
},
companyprofileDiscription:{
    type:String,
    required:true,
},
companyprofilePhone:{
    type:String,
    required:true,
},
companyprofileEmail:{
    type:String,
    required:true,
},
companyprofileCountry:{
    type:String,
    required:true,
},
companyprofileState:{
    type:String,
    required:true,
},
companyprofileCity:{
    type:String,
    required:true,
},
companyprofilePincode:{
    type:String,
    required:true,
},
companyprofileAddress:{
    type:String,
    required:true,
},
companyprofilelink:{
    type:String,
    required:true,
},
companyprofilelink1:{
    type:String,
    required:true,
},
companyprofilelink2:{
    type:String,
    required:true,
},
companyprofilelink3:{
    type:String,
    required:true,
},
companyprofilelink4:{
    type:String,
    required:true,
}

});






module.exports=mongoose.model("companyprofile",companyprofileData);