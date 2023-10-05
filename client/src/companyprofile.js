import { useState } from "react";
import image from "./pab bottom-logo (1).jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Companyprofile = () => {
    const [companyprofileName,setcompanyprofileName] = useState("");
    const [companyprofileWeblink,setcompanyprofileWeblink] = useState("");
    const [companyprofileFoundedDate,setcompanyprofileFoundedDate] = useState("");
    const [companyprofileIndustryType,setcompanyprofileIndustryType] = useState("");
    const [companyprofileDiscription,setcompanyprofileDiscription] = useState("");
    const [companyprofilePhone,setcompanyprofilePhone] = useState("");
    const [companyprofileEmail,setcompanyprofileEmail] = useState("");
    const [companyprofileCountry,setcompanyprofileCountry] = useState("");
    const [companyprofileState,setcompanyprofileState] = useState("");
    const [companyprofileCity,setcompanyprofileCity] = useState("");
    const [companyprofilePincode,setcompanyprofilePincode] = useState("");
    const [companyprofileAddress,setcompanyprofileAddress] = useState("");
    const [companyprofilelink,setcompanyprofilelink] = useState("");
    const [companyprofilelink1,setcompanyprofilelink1] = useState("");
    const [companyprofilelink2,setcompanyprofilelink2] = useState("");
    const [companyprofilelink3,setcompanyprofilelink3] = useState("");
    const [companyprofilelink4,setcompanyprofilelink4] = useState("");

    const [data,setdata]=useState([]);
    console.log(data)
    const userdata={
        companyprofileName:companyprofileName,
        companyprofileWeblink:companyprofileWeblink,
        companyprofileFoundedDate:companyprofileFoundedDate,
        companyprofileIndustryType:companyprofileIndustryType,
        companyprofileDiscription:companyprofileDiscription,
        companyprofilePhone:companyprofilePhone,
        companyprofileEmail:companyprofileEmail,
        companyprofileCountry:companyprofileCountry,
        companyprofileState:companyprofileState,
        companyprofileCity:companyprofileCity,
        companyprofilePincode:companyprofilePincode,
        companyprofileAddress:companyprofileAddress,
        companyprofilelink:companyprofilelink,
        companyprofilelink1:companyprofilelink1,
        companyprofilelink2:companyprofilelink2,
        companyprofilelink3:companyprofilelink3,
        companyprofilelink4:companyprofilelink4,
    
    }

    console.log(userdata)

    const handlecompany=(e)=>{
        e.preventDefault();
        if(
            companyprofileName &&
            companyprofileWeblink &&
            companyprofileFoundedDate &&
            companyprofileIndustryType &&
            companyprofileDiscription &&
            companyprofilePhone &&
            companyprofileEmail &&
            companyprofileCountry &&
            companyprofileState &&
            companyprofileCity &&
            companyprofilePincode &&
            companyprofileAddress &&
            companyprofilelink &&
            companyprofilelink1 &&
            companyprofilelink2 &&
            companyprofilelink3 &&
            companyprofilelink4 !==""

        ){
            const headers = {
                token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkNWQ3NGNhNmZmZDVkNWMyMjVkNmJiIiwiaWF0IjoxNjkxNzQ0NTI3LCJleHAiOjE3Mjc3NDQ1Mjd9.jkgWOgy8JfmY2upTDUaxtaEPvGLSFfCxkFMOY2TFDXk",
            };
            axios.post("http://localhost:5016/companyprofile",userdata,{headers})
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
                    setTimeout(function () {}, 3000);
                  }
            })
            .catch((error) => {
                toast.error("Company mail already exit:please enter valid mail", {
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
    return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-md-1">

                    </div>
                    <div className="col-md-8">
                        <nav class="navbar navbar-expand-sm navbar-dark mb-3">
                            <div class="container d-flex flex-row ">
                                <img src={image} alt="" width="200px" class="" />
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                                    style={{ backgroundColor: "black" }}>
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse " id="collapsibleNavbar">
                                    <ul class="navbar-nav mx-5" style={{ marginLeft: "auto" }}>
                                        <li class="nav-item px-5">
                                            <a class="nav-link " href="/dashboard" style={{ color: "black" }}>Dashboard</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link dropdown-toggle" href="/search" style={{ color: "black" }}>Search Candidates</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link dropdown-toggle" href="/byservices" style={{ color: "black" }}>Buy services</a>
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
            {/*...........  */}

            <div className="container-fluid postback pt-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="card shadow">

                            <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{ fontSize: "200px" }}></i>
                            <a href=""><button class="p-2 mb-1 profilebutton w-100" style={{ backgroundColor: "#787182" }}>Company Profile</button></a>
                            <a href="/postajob"><button class="p-2 mb-1 profilebutton w-100" >Post A Job</button></a>
                            <a href="/myjobs"> <button class="p-2 mb-1 profilebutton w-100 active h-25  ">My Jobs</button></a>
                            <a href="/changecompanypwd"><button class="p-2 mb-1 profilebutton w-100">Change Password</button></a>
                            <a href="/logincompany"><button class="p-2 mb-1 profilebutton w-100">Log Out</button></a>

                        </div>
                    </div>
                    <div class="col-md-6" >
                <form class="card p-5 shadow" onSubmit={handlecompany}>
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
                    <h5 class="profileh5">Company Profile</h5>
                    <hr/>
                    <label for="" class="profilename mb-1">Name</label>
                    <input type="text" placeholder="Enter your company nmae" class="form-control w-75 mb-2"
                        style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileName(e.target.value)} value={companyprofileName}/>
                    

 
                  
                        
                    
                    <div class="row my-2">
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Web link</label><br/>
                            <input type="text" name="" id="" placeholder="Enter your website link"
                                class="form-control w-100 p-2 profileselect" style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileWeblink(e.target.value)} value={companyprofileWeblink}/>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Founded Date</label><br/>
                            <input type="date" name="" id="" placeholder="DD-MM-YYYY"
                                class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileFoundedDate(e.target.value)} value={companyprofileFoundedDate}/>
                        </div>
                        
                    </div>
                    <div class="col-md-4 my-2">
                        <label for="" class="profileh5 mb-1">Industry Type</label><br/>
                        <input type="text" name="" id="" placeholder="Enter your industry type"
                            class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileIndustryType(e.target.value)} value={companyprofileIndustryType}/>
                    </div>
                     <h5>Comapany Discription</h5>
                   <textarea name="" id="" cols="5" rows="5" placeholder="Enter your company discription" style={{border: "1px solid blue", borderRadius: "10px"}} class="p-2 w-75 bg-light" onChange={(e) =>setcompanyprofileDiscription(e.target.value)} value={companyprofileDiscription}></textarea>

                    <div class="my-2">
                        <h5>Contact Information</h5>
                        <hr/>
                        <div class="row py-3">
                            <div class="col-12 col-md-4">
                                <label for="" class="profileh5 mb-1">Phone</label><br/>
                                <input type="text" name="" id="" placeholder="Enter your company phone number"
                                    class="form-control w-100 p-2 profileselect" style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilePhone(e.target.value)} value={companyprofilePhone}/>
                            </div>
                            <div class="col-md-1">
    
                            </div>
                            <div class="col-12 col-md-4">
                                <label for="" class="profileh5 mb-1">Email</label><br/>
                                <input type="text" name="" id="" placeholder="enter company mail address"
                                    class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileEmail(e.target.value)} value={companyprofileEmail}/>
                            </div>
                            
                        </div>
                        <div class="row py-3">
                            <div class="col-12 col-md-4">
                                <label for="" class="profileh5 mb-1">Country</label><br/>
                                <input type="text" name="" id="" placeholder="Enter country "
                                    class="form-control w-100 p-2 profileselect" style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileCountry(e.target.value)} value={companyprofileCountry}/>
                            </div>
                            <div class="col-md-1">
    
                            </div>
                            <div class="col-12 col-md-4">
                                <label for="" class="profileh5 mb-1">State</label><br/>
                                <input type="text" name="" id="" placeholder="enter state"
                                    class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileState(e.target.value)} value={companyprofileState}/>
                            </div>
                            
                        </div>
                        <div class="row py-3">
                            <div class="col-12 col-md-4">
                                <label for="" class="profileh5 mb-1">City</label><br/>
                                <input type="text" name="" id="" placeholder="Enter city name"
                                    class="form-control w-100 p-2 profileselect" style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofileCity(e.target.value)} value={companyprofileCity}/>
                            </div>
                            <div class="col-md-1">
    
                            </div>
                            <div class="col-12 col-md-4">
                                <label for="" class="profileh5 mb-1">Pincode</label><br/>
                                <input type="text" name="" id="" placeholder="enter pincode"
                                    class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilePincode(e.target.value)} value={companyprofilePincode}/>
                            </div>
                        
                            
                        </div>
                       
                    </div>
                    <h5 class="my-3">Address</h5>
                    <textarea name="" id="" cols="5" rows="5" placeholder="Enter company address -floor/plot/appartment/colony "  style={{border: "1px solid blue", borderRadius: "10px"}} class="mb-3 p-2 w-75" onChange={(e) =>setcompanyprofileAddress(e.target.value)} value={companyprofileAddress}></textarea>
                    <div >
                        <h5>Social media links</h5>
                        <hr/>
                        <div class="d-flex flex-row my-4">
                            <div class="col-md-4">
                                <div class="d-flex flex-row ">
                                <img src="https://static.vecteezy.com/system/resources/previews/009/097/186/original/blue-color-white-background-linkedin-design-logo-sign-symbol-free-vector.jpg" alt="" width="30px" class="mx-2"/><input type="text" name="" id="" placeholder="enter linkedin account link"
                                    class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilelink(e.target.value)} value={companyprofilelink}/>
                                </div> 
                            </div>
                            <div class="col-md-1">
    
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex flex-row ">
                               <img src="https://storage.needpix.com/rsynced_images/twitter-2672572_1280.jpg" alt="" width="30px" class="mx-2"/><input type="text" name="" id="" placeholder="enter twitter account link"
                                    class="form-control w-100 p-2 profileselect "style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilelink1(e.target.value)} value={companyprofilelink1}/>
                                </div>
                            </div>
                           
                            
                        </div>
                        <div class="d-flex flex-row my-4">
                            <div class="col-md-4">
                                <div class="d-flex flex-row ">
                                <img src="https://cdn.pixabay.com/photo/2017/08/20/10/30/facebook-2661207_640.jpg" alt="" width="30px" class="mx-2"/><input type="text" name="" id="" placeholder="enter facebook account link"
                                    class="form-control w-100 p-2 profileselect" style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilelink2(e.target.value)} value={companyprofilelink2}/>
                                    </div>
                            </div>
                            <div class="col-md-1">
    
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex flex-row ">
                                    <img src=" https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" width="30px" class="mx-2"/><input type="text" name="" id="" placeholder="enter google instagram link"
                                         class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilelink3(e.target.value)} value={companyprofilelink3}/>
                                     </div>
                            </div>
                        
                            
                        </div>
                        <div class="col-md-4">
                            <div class="d-flex flex-row ">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" width="30px" class="mx-2"/> <input type="text" name="" id="" placeholder="enter google account link"
                                class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}} onChange={(e) =>setcompanyprofilelink4(e.target.value)} value={companyprofilelink4}/>
                                </div>
                        </div>
                    </div>
                    <div class="text-center">
                    <button class="w-25 mt-4 p-2 profilebutton9">Update Details</button>
                </div>
                </form>
            </div>
           


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
export default Companyprofile;