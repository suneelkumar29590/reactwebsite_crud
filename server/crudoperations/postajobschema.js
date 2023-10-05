const mongoose = require("mongoose");

const postajob=new mongoose.Schema({

postjobtitle:{
    type:String,
    required:true,
},
postposition:{
    type:String,
    required:true,
},
postjobtype:{
    type:String,
    required:true,
},
postexperience:{
    type:String,
    required:true,
},
postsalary:{
    type:String,
    required:true,
},
postskills:{
    type:String,
    required:true,
},
postregion:{
    type:String,
    required:true,
},
postlocation:{
    type:String,
    required:true,
},
postdeadline:{
    type:String,
    required:true,
},
posteducation:{
    type:String,
    required:true,
},
postdiscription:{
    type:String,
    required:true,
}


});






module.exports=mongoose.model("postajob",postajob);