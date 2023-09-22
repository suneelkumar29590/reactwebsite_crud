import image from './pab bottom-logo (1).jpg';
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [mobilenumber, setmobilenumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mobilenumber) {
      // Make an API request to send a reset password link to the mobile number
      axios.post("http://localhost:5016/reset-password", { mobilenumber })
        .then((response) => {
          if (response.status === 200) {
            // Handle success, show a success message
            toast.success("Password reset instructions sent to your mobile number.", {
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
        })
        .catch((error) => {
          // Handle errors, show appropriate error messages
          toast.error("Mobile number is not valid.", {
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
        });
    } else {
      toast.warning("Enter your mobile number.");
    }
  };    
    return(
        <div>
  <nav class="navbar navbar-expand-sm navbar-dark card shadow mb-5">
        <div class="container">
          <img src={image} className="headerimage"></img>
         
        </div>
      </nav>
    {/* ........... */}
            <div class="container" >
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card shadow logincard1 p-3" style={{borderRadius: "20px"}}>
                <div class="loginheader">
                    <h2 class="loginheader1">Forgotten Password?</h2>
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
        <form onSubmit={handleSubmit}>
                <div class="otpmain">
                <label for=""  class="loginlabel mb-3">Mobile Number</label><br/>
                <div class="d-flex flex-row mb-3">
                    <select name="" id="input" className="mx-1">
                      <option value="">+91</option>
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your mobile number"
                      id="input"
                      value={mobilenumber}
                    onChange={(e) => setmobilenumber(e.target.value)}
                    />
                  </div>
                        <span class="text-primary">you will receive an Password on this number </span>
                    </div>
                
               
                <a href="" class="text-center"><button class="loginbutton w-100 p-1 mt-3">Submit</button></a>
                </form>
                <h6 class="loginh4">Login via Email</h6>
                <p class="text-center">(or)</p>
                <a href="" className="signgoogle"> <span class="logingoogle"><button class="loginbutton2 shadow p-2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU" alt="" class="googleimg"/>Sign in with Google</button></span></a>
                <a href="" style={{textAlign: "center"}}><button class="Register1 shadow d-md-none">Register for free</button></a>
                </div>
            </div>
    
            <div class="col-12 col-md-1">
    
            </div>
            <div class="col-12 col-md-4 d-none d-md-block" >
                <div class="card shadow logincard2" style={{borderRadius: "20px"}}>
                    <h2 class="pabjobheading">New to pabjobs?</h2>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt=""/>
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
                <a href="/default"><button class="Register ">Register for free</button></a>
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
    )
}

export default ForgotPassword;