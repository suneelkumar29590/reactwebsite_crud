import { Link } from "react-router-dom";
import image from './pab bottom-logo (1).jpg';
import React from "react";
import Form from 'react-bootstrap/Form';
// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';


const Mblotp=()=>{
  let navigate = useNavigate();

    const [mbl, setmbl] = useState("");


    const onSubmitBtn = (e) => {
      e.preventDefault();
  
      if (mbl !== "") {
       
        const usersData = { mbl };
  
        axios
          .post("http://localhost:5016/generate-otp", usersData)
          .then((response) => {
            if (response.status === 200) {
              toast.success("Otp sent successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
  
           
              setTimeout(function () {
                navigate("/otp");
              }, 3000);
            }
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status === 401) {
                if (error.response.data.message === "otp not sent") {
                  toast.error("otp not sent", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else if (error.response.data.message === "network error") {
                  toast.error("Incorrect password", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                }
              } else {
                toast.error("An error occurred on the server. Please try again later.", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            } else {
              toast.error("An error occurred. Please check your network connection and try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              console.error(error);
            }
          });
      } else {
        toast.warning("Enter the Required Details");
      }
    };
    return(
      <div>

<nav class="navbar navbar-expand-sm bg-white navbar-dark container">
  <div class="container-fluid">
    <img src={image} className="headerimage"></img>
    <button class="navbar-toggler loginbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav login1">
        <li class="nav-item ">
          <a class="nav-link login2" href="#">LOGIN</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link login2" href="#">JOB SEEKER</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link login2" href="#">RECRUITER</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  <div className="logincontainer ">      
<div class="container py-5 mb-5 ">
    <div class="row">
    <div class="col-12 col-md-1">

</div>
        <div class="col-12 col-md-5">
            <div class="card shadow logincard1 p-4" style={{borderRadius: "30px"}}>
            <div class="loginheader">
                <h2 class="loginheader1">Login</h2>
                <p class="loginpara">It only takes a couple of minutes to get started!</p>
            </div>
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
            theme="light"
            />
            {/* Same as */}
            <ToastContainer />

            <form  onSubmit={onSubmitBtn}>
              
           
            <label for="" class="loginlabel mb-2">
                    Mobile Number
                  </label>
                  <br />
                  <div class="d-flex flex-row">
                    <select name="" id="input" className="mx-1">
                      <option value="">+91</option>
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your mobile number"
                      id="input"
                      onChange={(e) => setmbl(e.target.value)}
                        value={mbl}
                    />
                  </div>
                  <p className="text-primary mt-2">You will receive otp on this number</p>
                  <a href="./home" class=""><button class="loginbutton w-100 " style={{height:"40px"}}>Get otp</button></a>
            </form>
            <a href=""  className="loginforgot"><h6 class="loginh4">Login via Email</h6></a>
            <p class="text-center">(or)</p>
           <a href="./home" className="signgoogle"> <span class="logingoogle"><button class="loginbutton2 shadow p-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU" alt="" class="googleimg"/>Sign in with Google</button></span></a>
        
            </div>
        </div>

        <div class="col-12 col-md-1">

        </div>
        <div class="col-12 col-md-3 d-none d-md-block" >
            <div class="card shadow logincard2 text-center" style={{borderRadius: "20px"}}>
                <h2 class="pabjobheading ">New to pabjobs?</h2>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" width={300} height={200}/>
            </div>
            <div class="loginspan1">
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Build your profile and let
                    recruitrs find yon</span> <br/>
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Get job posting delivered right
                    to your email</span> <br/>
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Find a job and grow your
                    career</span><br/>
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Find a job and grow your
                        career</span>         
            </div>
            <Link to="/Default">
           <button class="Register shadow">Register for free</button>
           </Link>
        </div>
    </div>
</div>


{/* ........ */}

 
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



           </div>
    )
}
export default Mblotp;