import { Link } from "react-router-dom";
import image from './pab bottom-logo (1).jpg';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Default = () => {
  const [type, settype] = useState("applicant");
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [isMobileValid, setIsMobileValid] = useState(true); // Track mobile validation
  const [isMobileStartValid, setIsMobileStartValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true); // Track password validation
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false); // Track password mismatch
  const [showPassword, setShowPassword] = useState(false);
  const [ReshowPassword, setReshowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    
  };
  const togglePasswordVisibility1 = () => {
    
    setReshowPassword(!ReshowPassword)
  };


  let navigate = useNavigate();
  const [data, setdata] = useState([]);

  const usersData = {
    type: type,
    fullname: fullname,
    email: email,
    mobilenumber: mobilenumber,
    password: password,
    confirmpassword: confirmpassword,
  };

  const isValidMobile = (mobile) => {
    // Ensure the mobile number is numeric and has 10 digits
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  };
  const isValidMobileStart = (mobile) => {
    // Ensure the mobile number starts with 6, 7, 8, or 9
    const mobileStartPattern = /^[6-9]/;
    return mobileStartPattern.test(mobile);
  };
  const isValidPassword = (password) => {
    // Ensure the password has at least 8 characters,
    // at least one special character, and at least one number
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleButtonClick = (type) => {
    settype(type);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const isMobileValid = isValidMobile(mobilenumber);
    const isMobileStartValid = isValidMobileStart(mobilenumber);
    const isPasswordValid = isValidPassword(password); // Validate password

    if (
      type &&
      fullname &&
      email &&
      isMobileValid &&
      isMobileStartValid && // Validate mobile number
      isPasswordValid && // Check if password is valid
      password === confirmpassword &&
      confirmpassword !== ""
    ) {
      axios
        .post("http://localhost:5016/signup/", usersData)
        .then((response) => {
          console.log(response.data);
          setdata(response.data);
          console.log(response.data);
          if (response.status === 200) {
            toast.success("Registration Successful", {
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
              navigate("/login");
            }, 3000);
          }
        })
        .catch((error) => {
          toast.error("Email already exists: please enter a valid email", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error);
        });
    } else {
      setIsPasswordMismatch(true);
      toast.warning("Enter the Required Details");

    }
  };

  const handleMobileChange = (mobile) => {
    setmobilenumber(mobile);
    // Check mobile number validity and set state accordingly
    setIsMobileValid(isValidMobile(mobile));
    setIsMobileStartValid(isValidMobileStart(mobile));
  };

  console.log(type);




  return (
    <div>

      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
          <img src={image} className="headerimage"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav menubar">
              <li class="nav-item">
                <a class="nav-link dropdown-toggle" href="browsejobs.html" style={{ color: "black" }}>Browse Jobs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link dropdown-toggle" href="job.html" style={{ color: "black" }}>Jobs</a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
      {/* .......... */}
      <div className="defaultbody">

        <div className="container mb-5 ">


          <div className="row">
            <div className="col-12 col-md-1"></div>
            <div className="col-12 col-md-6">
              <div className="card shadow mt-5 logincard">
                <div className="col-12 text-center">
                  <h2>Create an account</h2>
                  <p className="parastart">it only takes a couple of minutes to get started!</p>
                </div>
                <div className=" text-center reactbtngroup d-flex flex-row justify-content-center px-5">
                  <a href="./Login" className="w-100"><button className="w-100 reactloginbtn shadow p-2" style={{opacity:"0.5"}}>Login</button></a>
                  <button className="w-100 reactloginbtn shadow p-2">Signup<i class="fa-solid fa-circle-check "></i></button>
                </div>
                <div className=" text-center reactbtngroup mt-3 mb-3 d-flex flex-row justify-content-center px-5">
                  <button
                    className={`w-100 reactloginbtn shadow p-2 ${type === 'applicant' ? '' : 'inactive'}`}
                    onClick={() => handleButtonClick('applicant')}
                  >
                    Job seekers
                    <input type="radio" name="type" value="applicant" onChange={() => { }} checked={type === 'applicant'} />
                  </button>
                  <button
                    className={`w-100 reactloginbtn shadow p-2 ${type === 'recruiter' ? '' : 'inactive'}`}
                    onClick={() => handleButtonClick('recruiter')}
                  >
                    Recruiters
                    <input type="radio" name="type" value="recruiter" onChange={() => { }} checked={type === 'recruiter'} />
                  </button>
                </div>

                {/* <div className=" text-center reactbtngroup mt-3 mb-3 d-flex flex-row justify-content-center">
                
              <a href="./Default"> <button className=" reactloginbtn1 shadow">Job seekers<input type="radio" name="type" value="applicant" onChange={(e)=>settype(e.target.value)}></input></button></a>
                <a href="./Recruiter1"><button className=" reactloginbtn shadow">Recruiters <input type="radio" name="type" value="recruiter" onChange={(e)=>settype(e.target.value)}></input></button></a>
              </div> */}

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
                <form class="form p-5" onSubmit={onSubmitForm}>

                  <label for="" id="fullname" class="loginlabel">{type === "applicant" ? "FULLNAME" : "COMPANYNAME"}</label>
                  <input type="text" class=" form-control" placeholder={type === "applicant" ? "enter your fullname" : "enter your companyname"} id="input" onChange={(e) => setfullname(e.target.value)} value={fullname} />

                  <label for="" class="loginlabel" >Email ID</label>
                  <input type="email" class="form-control " placeholder="enter your Email ID" id="input" onChange={(e) => setemail(e.target.value)} value={email} />

                  <label for="" class="loginlabel">
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
                      onChange={(e) => handleMobileChange(e.target.value)}
                      value={mobilenumber}
                    />
                  </div>

                  {!isMobileStartValid && (
                    <p className="text-danger">Mobile number must start with 6, 7, 8, or 9.</p>
                  )}
                  {!isMobileValid && (
                    <p className="text-danger">Please enter a valid 10-digit mobile number.</p>
                  )}
                  <div className="input-with-icon">
                  <label for="" class="loginlabel">
                    Password
                  </label>
                  <input
                     type={showPassword ? 'text' : 'password'}
                    class="form-control"
                    placeholder="Minimum 8 characters, at least one special character, and one number"
                    id="input"
                    onChange={(e) => {
                      setpassword(e.target.value);
                      setIsPasswordValid(isValidPassword(e.target.value));
                    }}
                    value={password}
                  />
                  <i className="fa-solid fa-eye icon" onClick={togglePasswordVisibility}></i>
                  </div>
                  
      
     
    
                  {!isPasswordValid && (
                    <p className="text-danger">
                      Password must have at least 8 characters, at least one special character, and one number.
                    </p>
                  )}
                  
                  <div className="input-with-icon">
                  <label for="" class="loginlabel">
                    Confirm Password
                  </label>
                  <input
                     type={ReshowPassword ? 'text' : 'password'}
                    class="form-control"
                    placeholder="Entered same password"
                    id="input"
                    onChange={(e) => setconfirmpassword(e.target.value)}
                    value={confirmpassword}
                  />
                   <i className="fa-solid fa-eye icon" onClick={togglePasswordVisibility1}></i>
                  </div>
                  {isPasswordMismatch && (
                    <p className="text-danger">Password and Confirm Password do not match.</p>
                  )}

                  <div id="gender">
                    <b>Gender</b> <br /><input type="radio" name="type" /> male <input type="radio" name="type" /> female
                    <input type="radio" name="type" /> prefer not to say<br />
                  </div>
                  <i class="fa-solid fa-square-check greenbox"></i>
                  <label for="">I would like to get latest updates on whatsapp</label>

                  <p class="smallpara">By clicking Register,you agree to the terms and conditions & privacy  pabjobs.com
                  </p>
                  <button class="Registerbtn">Register Now</button>
                </form>

              </div>


            </div>

            <div className="col-12 col-md-1"></div>
            <div class=" col-12 col-lg-3 mt-5">
              <div class="card card1 shadow" >
                <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                  width="300px" height="300px" alt="" id="image" />
              </div>
              <div class="card1para">
                <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Build your profile and let
                  recruitrs find yon</span> <br />
                <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Get job posting delivered right
                  to your email</span> <br />
                <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Find a job and grow your
                  career</span>

              </div>
            </div>




          </div>

        </div>

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

              <div class="hrtag" style={{ marginleft: "50px", width: "190%" }}>
                <hr />
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
export default Default;


