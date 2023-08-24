const mongoose = require("mongoose");

const resumeData = new mongoose.Schema({

 resumeheading: {
  type: String,
  require: true,
},



});
module.exports = mongoose.model("resumeData", resumeData);

// // start

const resumeData1 = new mongoose.Schema({

  profileSummary: {
    type: String,
    require: true,
  },
 
 
 
 });
 module.exports = mongoose.model("resumeData1", resumeData1);

// // start

 const resumeData2 = new mongoose.Schema({

  KeySkills: {
    type: String,
    require: true,
  },
 
 
 });
 module.exports = mongoose.model("resumeData2", resumeData2);

//  // start

 const resumeData3 = new mongoose.Schema({
  TotalExperience: {
    type: String,
    require: true,
  },
  CurrentCTC: {
    type: String,
    require: true,
  },
  YourDesignation: {
    type: String,
    require: true,
  },
  YourOrganizationCategory: {
    type: String,
    require: true,
  },
  Type: {
    type: String,
    enum: ["yes", "no"],
    require: true,
  },
  StartedWorkingFrom: {
    type: String,
    require: true,
  },
  WorkedTill: {
    type: String,
    require: true,
  },
  Describe: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData3", resumeData3);

//  // start


 const resumeData4 = new mongoose.Schema({
  Degree: {
    type: String,
    require: true,
  },

  University: {
    type: String,
    require: true,
  },

  Year: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData4", resumeData4);

// // start

 const resumeData5 = new mongoose.Schema({
  ProjectTitle: {
    type: String,
    require: true,
  },
  Description: {
    type: String,
    require: true,
  },
  GitHubLink: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData5", resumeData5);

//  // start

 const resumeData6 = new mongoose.Schema({
  WorkSample: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData6", resumeData6);

//  // start
 
 const resumeData7 = new mongoose.Schema({
  ResearchTitle: {
    type: String,
    require: true,
  },
  Authors: {
    type: String,
    require: true,
  },
  PublicationDate: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData7", resumeData7);

// // start


 const resumeData8 = new mongoose.Schema({
  PresentationTittle: {
    type: String,
    require: true,
  },
  Speaker: {
    type: String,
    require: true,
  },
  PresentationDate: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData8", resumeData8);

// // start

 const resumeData9 = new mongoose.Schema({
  Patent: {
    type: String,
    require: true,
  }
 
 });
 module.exports = mongoose.model("resumeData9", resumeData9);

// // start

 const resumeData10 = new mongoose.Schema({
  CertificationName: {
    type: String,
    require: true,
  },
  Organization: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData10", resumeData10);

//  // start

 const resumeData11 = new mongoose.Schema({
  DesireIndustry: {
    type: String,
    require: true,
  },
  Preferedlocation: {
    type: String,
    require: true,
  },
  designation1: {
    type: String,
    require: true,
  },
  Expectedctcsalary: {
    type: String,
    require: true,
  },
  Desiredshift: {
    type: String,
    require: true,
  },
  Employmenttype: {
    type: String,
    require: true,
  },

 
 });
 module.exports = mongoose.model("resumeData11", resumeData11);

//  // start


 const resumeData12 = new mongoose.Schema({
  DateOfBirth: {
    type: String,
    require: true,
  },
  MaritalStatus: {
    type: String,
    require: true,
  },
  Age: {
    type: String,
    require: true,
  },
  Languages: {
    type: String,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
 
 });
 module.exports = mongoose.model("resumeData12", resumeData12);