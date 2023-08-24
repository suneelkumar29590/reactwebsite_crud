const express=require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose=require("mongoose"); // IMPORTING MONGOOSE
const cors=require("cors"); // IMPORTING CORS
const userData=require("./mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const middleware=require("./middleware")
const browseData=require("./userdetails")
const jobsData=require('./userdetails1')
const profileData = require("./userdetailsprofile")
const resumeData =require("./userresumedetails")
const resumeData1=require("./userresumedetails")
const resumeData2=require("./userresumedetails")
const resumeData3=require("./userresumedetails")
const resumeData4=require("./userresumedetails")
const resumeData5=require("./userresumedetails")
const resumeData6=require("./userresumedetails")
const resumeData7=require("./userresumedetails")
const resumeData8=require("./userresumedetails")
const resumeData9 = require("./userresumedetails")
const resumeData10=require("./userresumedetails")
const resumeData11=require("./userresumedetails")
const resumeData12=require("./userresumedetails")

const app=express()
app.use(express.json())  // ACCEPTING JSON FORMAT DATA AND PARSING TO LOCAL USER

app.use(cors({origin: "*"}))


//mongo db conncetion WITH NODEJS
mongoose.connect("mongodb+srv://suneelkumar29590:UfuEaPytFV46FbTr@cluster0.37lou9p.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>console.log("db connected"))
.catch((err)=>console.log(err.message))



// main api
app.get("/",(req,res)=>{
    res.send("hello world")
})




// SIGNUP API


app.post("/signup/", async(req,res)=>{

    try{
        
    const{type,fullname,email,mobilenumber,password, confirmpassword}=req.body
 

// checking user whether it is exist or not

    const isUserExist=await userData.findOne({email: email});
    if (isUserExist){
       return res.send("user already registered")
    }
    const isUserExist1=await userData.findOne({mobilenumber: mobilenumber});
    if (isUserExist1){
       return res.send("mobilenumber already registered")
    }

    if(password !==  confirmpassword){
       return res.send("password not matched")
    }


const hashedpassword=await bcrypt.hash(password, 10)   //generating encrypted password for user

let newUser = new userData({
    type,
    fullname,
    email,
    mobilenumber,
    password:hashedpassword,
    confirmpassword:hashedpassword
})
newUser.save();       //saving to mongodb collections
res.send("user created succesfully");

    }catch(e){
        console.log(e.message)
        res.send("internal server error")
    }

    
})

// app.post("/signup",async(req,res)=>{

    
// console.log(req.body)
//     // res.send("hello db")
//     try{
       

// const user = await userData.findOne({email: req.body.email})   // mongo db condition
// console.log(user)

// if(!user  ){  // or if(user === undefined)
    
//     // user not found excutes below code

    
// const newUser={
               
    
//     "fullname":req.body.fullname,
//     "email":req.body.email,
//     "mobilenumber":req.body.mobilenumber,
//     "password":req.body.password,
//     "confirmpassword": req.body.confirmpassword

// }

//         const userDetails =await userData.create(newUser)   //  POSTING TO COLLECTION OR MODEL
//         console.log(userDetails)
        
//         res.status(200).send("user created successfully")
        

// }else{

//     // if user mail id is founded send below response
//     res.status(400).json("user already registered")
    
// }
//     }catch(e){
//         console.log(e.message)
//          return res.status(500).json("message: e.message")

//     }
// })


// login api
// app.post("/login", async(req,res)=>{
//     const {email,password} = req.body
//     const isUserExist= await userData.findOne({email})

//     if(!isUserExist){
//         res.status(200).send("user created successfully")
           
// const newUser={
    
//     "email":req.body.email,
//     "password":req.body.password
    
// }
//         const userDetails =await userData.create(newUser)   //  POSTING TO COLLECTION OR MODEL
//         console.log(userDetails)
        
        
//     }else{
//         res.status(400).json("not matched") 
//     }
   
// })

// login api
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const isUserExist = await userData.findOne({ email });

  if (isUserExist) {
    const ispasswordmatched = await bcrypt.compare(
      password,
      isUserExist.password
    ); //compare to two passwords
    if (ispasswordmatched) {
      let payload = {
        user: isUserExist.id,
      };
      jwt.sign(
        payload,
        "jwtpassword",
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } else {
      return res.send("password not matched");
    }
  }
});



// GET all users API

app.get("/allusers", async(req,res)=>{
    const allusers =await userData.find({})
    res.status(200).send(allusers)
})


// specific user
app.get("/user/:id", async(req,res)=>{
    const{id}=req.params
const user=await userData.findOne({_id: id})
if(!user){
    res.status(400).json("user not found")
}
res.status(200).json(user) 
})



//   UPDATE

app.put("/user/:id",async(req,res)=>{
    const{id}=req.params
   
    const user=await userData.findByIdAndUpdate(id, req.body)
    if(!user){
        res.status(400).json("user not found")
    }
    res.status(200).json("user data updated successful") 
    
})


// delete

app.delete("/user/:id",async(req,res)=>{
    const{id}=req.params
    const deleteUser=await userData.findByIdAndDelete(id)
    if(!deleteUser){
        res.status(404).json("user not found")
    }
    res.status(200).json("user data deleted successful") 
    


})



// // browsejobs API

app.post("/browsejobs",async(req,res)=>{
  try {
      const {
        companyname,
        contactnumber,
         email,
        description,
        state,
        country,
        salary,
        role,
        experience,
        no_of_applications}=req.body;

  
      let newUser = new browseData({
          companyname,
          contactnumber,
          email,
          description,
          state,
          country,
          salary,
          role,
          experience,
          no_of_applications,
      });

      const isUserExist = await browseData.findOne({ email: email });
      if (isUserExist) {
        return res.send("user already registered");
      }
      
        newUser.save(); //saving to mongodb collections
        res.send("user created succesfully");

      
       
     
     
    }
     catch (e) {
      console.log(e.message);
      res.send("internal server error");
    }
  });

  
// delete

app.delete("/browsejobs/:id",async(req,res)=>{
  const{id}=req.params
  const deleteUser=await browseData.findByIdAndDelete(id)
  if(!deleteUser){
      res.status(404).json("user not found")
  }
  res.status(200).json("user data deleted successful") 
  


})
// specific user

app.get("/browsejobs/:id", async(req,res)=>{
  const{id}=req.params
const user=await browseData.findOne({_id: id})
if(!user){
  res.status(400).json("user not found")
}
res.status(200).json(user) 
})

  
  
     



// GET all users API

app.get("/allbrowse", async(req,res)=>{
  const allusers =await browseData.find({})
  res.status(200).send(allusers)
})



// // jobs API

app.post("/jobs",async(req,res)=>{
  try {
      const {
          location,
          companyname,
          description,
        state,
        country,
        experience,
        salary}=req.body;

  
      let newUser = new jobsData({
          location,
          companyname,
          description,
          state,
          country,
          experience,
          salary,
      });
      const isUserExist = await jobsData.findOne({ companyname: companyname });

      if (isUserExist) {
          return res.send("user already registered");
        }
      
        newUser.save(); //saving to mongodb collections
        res.send("user created succesfully");

      
       
     
     
    }
     catch (e) {
      console.log(e.message);
      res.send("internal server error");
    }
  });
  
  
     



// // GET all users API

app.get("/alljobs", async(req,res)=>{
  const allusers =await jobsData.find({})
  res.status(200).send(allusers)
})



// profile api 


app.post("/profile",middleware,async(req,res)=>{
  try {
      const {
        profieeditor,
        rastram,
        presentstay,
        call,
        box,
        }=req.body;
      let newUser = new profileData({
        profieeditor:profieeditor,
        rastram: rastram,
        presentstay :presentstay,
        call: call,
        box:box,
        
      });

      const isUserExist = await profileData.findOne({ box: box });
      if (isUserExist) {
        return res.send("user already registered");
      }
      
        newUser.save(); //saving to mongodb collections
        res.send("user created succesfully");

      
       
     
     
    }
     catch (e) {
      console.log(e.message);
      res.send("internal server error");
    }
  });


  //resume heading post
app.post("/resumeheding1", middleware, async (req, res) => {
  try {
    const { resumeheading } = req.body;

    let newUser = new resumeData({
      resumeheading: resumeheading,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//profileSummaryDetails
app.post("/profileSummary", middleware, async (req, res) => {
  try {
    const { profileSummary } = req.body;

    let newUser = new resumeData1({
      profileSummary: profileSummary,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


//keySkills
app.post("/keySkills", middleware, async (req, res) => {
  try {
    const { KeySkills } = req.body;

    let newUser = new resumeData2({
      KeySkills: KeySkills,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//EmploymentDetails
app.post("/EmploymentDetails", middleware, async (req, res) => {
  try {
    const {
      TotalExperience,
      CurrentCTC,
      YourDesignation,
      YourOrganizationCategory,
      Type,
      StartedWorkingFrom,
      WorkedTill,
      Describe,
    } = req.body;

    let newUser = new resumeData3({
      TotalExperience: TotalExperience,
      CurrentCTC: CurrentCTC,
      YourDesignation: YourDesignation,
      YourOrganizationCategory: YourOrganizationCategory,
      Type: Type,
      StartedWorkingFrom: StartedWorkingFrom,
      WorkedTill: WorkedTill,
      Describe: Describe,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


//EducationDetails
app.post("/EducationDetails", middleware, async (req, res) => {
  try {
    const { Degree, University, Year } = req.body;

    let newUser = new resumeData4({
      Degree: Degree,
      University: University,
      Year: Year,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

// Project Details

app.post("/ProjectDetails", middleware, async (req, res) => {
  try {
    const { ProjectTitle, Description, GitHubLink } = req.body;

    let newUser = new resumeData5({
      ProjectTitle: ProjectTitle,
      Description: Description,
      GitHubLink: GitHubLink,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


//WorkSample
app.post("/workSample", middleware, async (req, res) => {
  try {
    const { WorkSample } = req.body;

    let newUser = new resumeData6({
      WorkSample: WorkSample,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


//Research Details

app.post("/ResearchDetails", middleware, async (req, res) => {
  try {
    const { ResearchTitle, Authors, PublicationDate } = req.body;

    let newUser = new resumeData7({
      ResearchTitle: ResearchTitle,
      Authors: Authors,
      PublicationDate: PublicationDate,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//PresentationDetails
app.post("/PresentationDetails", middleware, async (req, res) => {
  try {
    const { PresentationTittle, Speaker, PresentationDate } = req.body;

    let newUser = new resumeData8({
      PresentationTittle: PresentationTittle,
      Speaker: Speaker,
      PresentationDate: PresentationDate,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//Patent
app.post("/PatentDetails", middleware, async (req, res) => {
  try {
    const { Patent } = req.body;

    let newUser = new resumeData9({
      Patent: Patent,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});
// Certification
app.post("/CertificationDetails", middleware, async (req, res) => {
  try {
    const { CertificationName, Organization, Date } = req.body;

    let newUser = new resumeData10({
      CertificationName: CertificationName,
      Organization: Organization,
      Date: Date,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


//Desired career Profile
app.post("/careerProfile", middleware, async (req, res) => {
  try {
    const {
      DesireIndustry,
      Preferedlocation,
      designation1,
      Expectedctcsalary,
      Desiredshift,
      Employmenttype,
    } = req.body;

    let newUser = new resumeData11({
      DesireIndustry: DesireIndustry,
      Preferedlocation: Preferedlocation,
      designation1: designation1,
      Expectedctcsalary: Expectedctcsalary,
      Desiredshift: Desiredshift,
      Employmenttype: Employmenttype,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});

//Personal Details
app.post("/PersonalDetails", middleware, async (req, res) => {
  try {
    const { DateOfBirth, MaritalStatus, Age, Languages, Gender, Address } =
      req.body;

    let newUser = new resumeData12({
      DateOfBirth: DateOfBirth,
      MaritalStatus: MaritalStatus,
      Age: Age,
      Languages: Languages,
      Gender: Gender,
      Address: Address,
    });

    newUser.save(); //saving mongodb collections
    return res.send("user Created Successfully");
  } catch (e) {
    console.log(e.message);
    res.send("Inernal server error");
  }
});


app.listen(5016,()=>{

    console.log("server running")
})


