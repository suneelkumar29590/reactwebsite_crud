const mongoose = require("mongoose");

const browseData = new mongoose.Schema({
  companyname: {
    type: String,
     required: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  experience: {
    type: String,
    required: true,
  },
  
  salary: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  
  no_of_applications: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("lastData", browseData);