const mongoose = require("mongoose");

const jobsData = new mongoose.Schema({
  location: {
    type: String,
     required: true,
  },
  company: {
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
  }

});
module.exports = mongoose.model("jobsdata", jobsData);