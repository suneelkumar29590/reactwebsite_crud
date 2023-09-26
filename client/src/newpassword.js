import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import image from './pab bottom-logo (1).jpg';
import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';

const Newpassword = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get(`email`);
    const [latestpassword, setlatestpassword] = useState('');
    
    console.log("Received Email:", email);
  useEffect(() => {
    if(email){
    fetchLatestpassword(email);
    }else {
      // Handle the case where no email parameter is provided
      navigate('/');
    }
  }, [email,navigate]);

  const fetchLatestpassword = async (email) => {
    try {
      const response = await axios.get(`http://localhost:5016/allusers/${email}`);
      console.log("API Response:", response); 
      console.log(response.data.password);
      setlatestpassword(response.data.password)
      // if (response.data.length > 0 ) {
      //   const latestpassword = response.data.password; // Get the last OTP from the array
      //   console.log();
      //   setlatestpassword(latestpassword);
        
      // }else{
      //   setlatestpassword('No password found for this email.');
      // }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(latestpassword)

  

  return (
    <div>
    <nav class="navbar navbar-expand-sm navbar-dark card shadow">
    <div class="container">
      <img src={image} className="headerimage"></img>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
        style={{ backgroundcolor: "black" }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav menubar">
          <li class="nav-item">
            <a class="nav-link" href="/home" style={{ color: "black" }}>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              href="/browse"
              style={{ color: "black" }}
            >
              Browse Jobs
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              href="/jobs"
              style={{ color: "black" }}
            >
              Jobs
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              style={{ color: "black" }}
            >
              services
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              href="/payment"
              style={{ color: "black" }}
            >
              payments
            </a>
          </li>
          <li class="nav-item">
            <i class="fa-solid fa-bell bellicon"></i>
          </li>
          <li class="nav-item">
            <a href="/profile">
              {" "}
              <i
                class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
                style={{ color: "blue" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  {/* ........ */}
  <div class="container mt-5" >
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="card shadow logincard1 p-3" style={{borderRadius: "20px"}}>
                <div class="loginheader">
                    <h2 class="loginheader1">Login</h2>
                    <p class="loginpara">It only takes a couple of minutes to get started!</p>
                </div>
               
        <form>
        
                <div class="otpmain">
                   
                <label for=""  class="loginlabel mb-3">password</label><br/>
                {/* <div class="d-flex flex-row mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your mobile number"
                      id="input"
                      value={latestpassword}
                     
                    />
                  </div> */}
                  <h2 className='latestpassword'>{latestpassword}</h2>
                        <span class="text-primary">you will receive an password successfully </span>
                    </div>
                   
                
               
                <Link to="/loginone"><a href="" class="text-center"><button class="loginbutton w-100 p-1 mt-3">Login</button></a></Link>
                </form>
                
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

    {/* ..... */}

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
  );
};

export default Newpassword;
