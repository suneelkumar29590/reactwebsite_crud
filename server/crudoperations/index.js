const express=require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose=require("mongoose"); // IMPORTING MONGOOSE
const cors=require("cors"); // IMPORTING CORS
const userData=require("./mongoose")

const app=express()
app.use(express.json())  // ACCEPTING JSON FORMAT DATA AND PARSING TO LOCAL USER




//mongo db conncetion WITH NODEJS
mongoose.connect("mongodb+srv://suneelkumar29590:UfuEaPytFV46FbTr@cluster0.37lou9p.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>console.log("db connected"))
.catch((err)=>console.log(err.message))



// main api
app.get("/",(req,res)=>{
    res.send("hello world")
})




// SIGNUP API

app.post("/signup",async(req,res)=>{

    
console.log(req.body)
    // res.send("hello db")
    try{
       

const user = await userData.findOne({email: req.body.email})   // mongo db condition
console.log(user)

if(!user  ){  // or if(user === undefined)
    
    // user not found excutes below code

    
const newUser={
               
    "typeofreg":req.body.typeofreg,
    "fullname":req.body.fullname,
    "email":req.body.email,
    "password":req.body.password,
    "mobilenumber":req.body.mobilenumber,
    "gender": req.body.gender

}

        const userDetails =await userData.create(newUser)   //  POSTING TO COLLECTION OR MODEL
        console.log(userDetails)
        
        res.status(200).send("user created successfully")
        

}else{

    // if user mail id is founded send below response
    res.status(400).json("user already registered")
    
}
    }catch(e){
        console.log(e.message)
         return res.status(500).json("message: e.message")

    }
//    const user=req.body
//    console.log(user)
})


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



app.listen(5009,()=>{

    console.log("server running")
})


