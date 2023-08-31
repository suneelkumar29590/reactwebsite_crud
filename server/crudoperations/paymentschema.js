const mongoose = require("mongoose");

const resumeData13 = new mongoose.Schema({
  paymentname: {
    type: String,
    require: true,
  },
  paymentemailid: {
    type: String,
    require: true,
  },
  paymentmobile: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData13", resumeData13);