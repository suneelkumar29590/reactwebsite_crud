const express=require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose=require("mongoose"); // IMPORTING MONGOOSE
const cors=require("cors"); // IMPORTING CORS
const jobsData=require('../crudoperations/userdetails1')


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

app.get("/allusers", async(req,res)=>{
    const allusers =await jobsData.find({})
    res.status(200).send(allusers)
})


// specific user
// app.get("/user/:id", async(req,res)=>{
//     const{id}=req.params
// const user=await userData.findOne({_id: id})
// if(!user){
//     res.status(400).json("user not found")
// }
// res.status(200).json(user) 
// })



// //   UPDATE

// app.put("/user/:id",async(req,res)=>{
//     const{id}=req.params
   
//     const user=await userData.findByIdAndUpdate(id, req.body)
//     if(!user){
//         res.status(400).json("user not found")
//     }
//     res.status(200).json("user data updated successful") 
    
// })


// // delete

app.delete("/user/:id",async(req,res)=>{
    const{id}=req.params
    const deleteUser=await jobsData.findByIdAndDelete(id)
    if(!deleteUser){
        res.status(404).json("user not found")
    }
    res.status(200).json("user data deleted successful") 
    


})



app.listen(3009,()=>{

    console.log("server running")
})



