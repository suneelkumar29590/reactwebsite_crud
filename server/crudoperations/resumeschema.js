const mongoose = require("mongoose");


 const resumeData6 = new mongoose.Schema({

  
 resumeheading: {
  type: String,
  require: true,
},
  // ........
  profileSummary: {
    type: String,
    require: true,
  },
// ..........
  KeySkills: {
    type: String,
    require: true,
  },
// ....
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
// ....
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
 
// ....
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
  // .....
  WorkSample: {
    type: String,
    require: true,
  },

//   ....

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
 
//  .......

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

    //   .............

    Patent: {
            type: String,
            require: true,
          },

        //   .....
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
  // .....
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

//  .......

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
 module.exports = mongoose.model("resumeData6", resumeData6);