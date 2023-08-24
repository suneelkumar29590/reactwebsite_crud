const mongoose = require("mongoose");

const profileData = new mongoose.Schema({
  profieeditor: {
    type: String,
     required: true,
  },
  rastram: {
    type: String,
    required: true,
  },
  presentstay: {
    type: String,
    required: true,
  },
  call: {
    type: String,
    required: true,
  },
  box: {
    type: String,
    required: true,
  },




});
module.exports = mongoose.model("profileData", profileData);