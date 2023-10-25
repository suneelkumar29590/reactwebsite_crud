import { useState } from "react";
import image from "./pab bottom-logo (1).jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Postajob=()=>{

const [postjobtitle,setpostjobtitle] =useState("");
const [postposition,setpostposition] =useState("");
const [postjobtype,setpostjobtype] =useState("");   
const [postexperience,setpostexperience] =useState("");   
const [postsalary,setpostsalary] =useState("");   
const [postskills,setpostskills] =useState("");   
const [postregion,setpostregion] =useState("");   
const [postlocation,setpostlocation] =useState("");   
const [postdeadline,setpostdeadline] =useState("");   
const [posteducation,setposteducation] =useState("");   
const [postdiscription,setpostdiscription] =useState("");    

const [data,setdata] =useState([]);
let navigate = useNavigate();
const userdata={
    postjobtitle:postjobtitle,
    postposition:postposition,
    postjobtype:postjobtype,
    postexperience:postexperience,
    postsalary:postsalary,
    postskills:postskills,
    postregion:postregion,
    postlocation:postlocation,
    postdeadline:postdeadline,
    posteducation:posteducation,
    postdiscription:postdiscription,
};
console.log(userdata);

const handlepost=(e)=>{
    e.preventDefault();
    if(postjobtitle && postposition && postjobtype && postexperience && postsalary && postskills && postregion && postlocation && postdeadline && posteducation && postdiscription !=="" ) {
        const headers = {
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkNWQ3NGNhNmZmZDVkNWMyMjVkNmJiIiwiaWF0IjoxNjkxNzQ0NTI3LCJleHAiOjE3Mjc3NDQ1Mjd9.jkgWOgy8JfmY2upTDUaxtaEPvGLSFfCxkFMOY2TFDXk",
        };
        axios.post("http://localhost:5016/companyposts",userdata,{headers})
        .then((response)=>{
            setdata(response.data);
            console.log(response.data);
            if (response.status === 200) {
                toast.success("Registration Successfull", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
               
            setTimeout(function () {
                navigate("/browse");
              }, 3000);
              }
        })
        .catch((error) => {

            toast.error("Already posted", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              console.log(error.message);

          });
    }else {
        toast.warning("Enter the Required Details");
      }
}

    return(
        <div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-8">
                    <nav class="navbar navbar-expand-sm navbar-dark mb-3">
        <div class="container d-flex flex-row ">
            <img src={image} alt="" width="200px" class=""/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                style={{backgroundColor:"black"}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav mx-5" style={{marginLeft:"auto"}}>
                    <li class="nav-item px-5">
                        <a class="nav-link " href="/dashboard" style={{color: "black"}}>Dashboard</a>
                    </li>
                    <li class="nav-item px-5">
                        <a class="nav-link dropdown-toggle" href="/search" style={{color: "black"}}>Search Candidates</a>
                    </li>
                    <li class="nav-item px-5">
                        <a class="nav-link dropdown-toggle" href="/byservices" style={{color: "black"}}>Buy services</a>
                    </li>
                    
                    <li class="nav-item ">
                        <i class="fa-solid fa-bell bellicon" style={{ color: "blue",fontSize:"20px" }}></i>
                    </li>
                    <li class="nav-item ">
                        <a href=""><i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                                style={{ color: "blue",fontSize:"30px" }}></i></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

                    </div>
                    <div className="col-md-1">

                    </div>

                </div>
            </div>
            

{/* ........ */}

<div className="container-fluid postback pt-5">
    <div className="row">
        <div className="col-md-2"></div>
    <div className="col-md-2">
          <div className="card shadow">
          
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontSize: "200px"}}></i>
                    <a href="/companyprofile"><button class="p-2 mb-1 profilebutton w-100">Company Profile</button></a>
                    <a href=""><button class="p-2 mb-1 profilebutton w-100" style={{backgroundColor:"#787182"}}>Post A Job</button></a>
                    <a href="/myjobs"> <button class="p-2 mb-1 profilebutton w-100 active h-25  ">My Jobs</button></a>
                                <a href="/changecompanypwd"><button class="p-2 mb-1 profilebutton w-100">Change Password</button></a>
                                    <a href="/logincompany"><button class="p-2 mb-1 profilebutton w-100">Log Out</button></a>
                
          </div>
        </div>
      
    <form className="col-md-6" onSubmit={handlepost}>
    <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
    <div class="card p-5 shadow">
                    <h5 class="profileh5">Post A Job</h5>
                    <hr/>   
                    
                    <div class="d-flex flex-row my-2">
                       
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Job Title</label><br/>
                            <input type="text" name="" id="" placeholder="Enter job title"
                                class="form-control w-100 p-2 profileselect my-2" style={{border: "1px solid #cfc6dc"}} onChange={(e) =>setpostjobtitle(e.target.value)} value={postjobtitle}/>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Position Available</label><br/>
                            <input type="text" name="" id="" placeholder="enter no of positions"
                                class="form-control w-100 p-2 profileselect my-2" style={{border: "1px solid #cfc6dc"}}  onChange={(e) =>setpostposition(e.target.value)} value={postposition}/>
                        </div>
                        
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Job type</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostjobtype(e.target.value)} value={postjobtype}>
                                <option value="">enter job type</option>
                                <option value="Work from office">Work from office</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Part-time">Part-time</option>
                                
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Experience</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostexperience(e.target.value)} value={postexperience}>
                                <option value="">select experience</option>
                                <option value="5years">5years</option>
                                <option value="6years">6years</option>
                                <option value="2years">2years</option>
                                <option value="4years">4years</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Maximum salary per annum</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostsalary(e.target.value)} value={postsalary}>
                                <option value="">enter maximum salary</option>
                                <option value="6 lac">6 lac</option>
                                <option value="3 lac">3 lac</option>
                                <option value="8 lac">8 lac</option>
                                <option value="4 lac">4 lac</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Technical skills</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostskills(e.target.value)} value={postskills}>
                                <option value="">press enter to add skills</option>
                                <option value="core java">core java</option>
                                <option value="React">React</option>
                                <option value="Angular">Angular</option>
                                <option value=".net">.net</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Region</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostregion(e.target.value)} value={postregion}>
                                <option value="">Select your Region</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Muslim">Muslim</option>
                                <option value="Christian">Christian</option>
                                <option value="others">others</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1"> locations</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostlocation(e.target.value)} value={postlocation}>
                                <option value="">press enter to add cities</option>
                                <option value="Vizag">Vizag</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bengulur">Bengulur</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Deadline</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2" onChange={(e) =>setpostdeadline(e.target.value)} value={postdeadline}>
                                <option value="">DD-MM-YYYY</option>
                                <option value="22/2/2021">22/2/2021</option>
                                <option value="14/5/2020">14/5/2020</option>
                                <option value="5/9/20018">5/9/2018</option>
                                <option value="31/12/2019">31/12/2019</option>

                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Education</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 v" onChange={(e) =>setposteducation(e.target.value)} value={posteducation}>
                                <option value="">Education required</option>
                                <option value="M.tech">M.tech</option>
                                <option value="B.tech">B.tech</option>
                                <option value="M.sc">M.sc</option>
                                <option value="B.sc">B.sc</option>
                            </select>
                        </div>
                    </div>
                  
                      
                            
                        
                       
                    
                    <h5 class="my-3">Job Discription</h5>
                    <textarea name="" id="" cols="5" rows="5" placeholder="Enter your Job Discription"  style={{border: "1px solid gray", borderRadius: "10px"}} class="mb-3 p-2 w-100" onChange={(e) =>setpostdiscription(e.target.value)} value={postdiscription} ></textarea>
                    
                    <div class="text-center">
                    <button class="w-25 mt-4 p-2 profilebutton9">Post A Job</button>
                </div>
                </div>
        </form>    

    </div>
</div>
{/* .......... */}
<div className="container-fluid footer mt-5">
        <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src={image} className="loginimg"></img>
            <p>we provide a direct access to the walk in opprtunities available on the site. results can be filtered on work experience ,venue ,from location ,empoyer type,and date range. </p>
            <p>Toll free Number: </p>
            <i class="fa-solid fa-phone"></i><span>1800 833 9448</span>



          </div>
          <div className="col-md-1"></div>
          
          <div className="col-12 col-md-2">
            <h3>For Employers</h3>
            <p>{">"}Company profile</p>
            <p>{">"}Post a job</p>
            <p>{">"}My jobs</p>


          </div>
          <div className="col-md-1"></div>
          
          <div className="col-12 col-md-2">
            <h3>Jobs</h3>
            <p>{">"}All jobs</p>
            <p>{">"}company jobs</p>
            <p>{">"}Category jobs</p>
            <p>{">"}Locational jobs</p>
            <p>{">"}Designation jobs</p>
            <p>{">"}Skill jobs</p>


          </div>
          <div className="col-md-1"></div>
          <div className="col-12 col-md-2">
            <h3> Browse Jobs</h3>
            <p>{">"}Companies</p>
            <p>{">"}Browse jobs</p>
            <p>{">"} jobs</p>
            <h3>Information</h3>
            <p>{">"}Terms & Conditions </p>
            <p>{">"}Privacy Policy</p>
            <p>{">"}Fraud Alert</p>


          </div>

          <div class="hrtag" style={{marginleft: "50px", width: "190%"}}>
            <hr/>
        </div>
            
            <div class="col-12 col-md-3">
                <p>all rights resereved@2022PABJobs</p>
            </div>
            <div class="col-12 col-md-2">

</div>
            <div class="col-12 col-md-3">
                <p>Designed by<span class="perfex">@PerfexTechnologies</span></p>
            </div>
            <div class="col-12 col-md-2">

</div>
            <div class="col-12 col-md-2">
                <i class="fa-brands fa-linkedin footicon px-1"></i>
                <i class="fa-brands fa-instagram footicon px-1"></i>
                <i class="fa-brands fa-facebook footicon px-1"></i>
                <i class="fa-brands fa-twitter footicon px-1"></i>
            </div>

        </div>
        </div>

           </div>
        </div>
    )
}

export default Postajob;