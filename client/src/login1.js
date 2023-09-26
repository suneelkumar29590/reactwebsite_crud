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


const Login1=()=>{
  let navigate = useNavigate();

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    
  };

    console.log(email);




    //   const onSubmitBtn=(e)=>{
    //     e.preventDefault();
    // if(email && password !== ''){
    //     axios.post("http://localhost:5016/login",usersData)
    //     .then(response=>{
    //         if(response.status === 200){
    //             let jwtToken = response.data.token
    //             localStorage.setItem("token",jwtToken)

    //             toast.success("Login successfully", {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "colored",
    //                   });

    //                   setTimeout(function(){
    //                     navigate('/home')
    //                    }, 3000)
                        
    //         }
    //     })
    //     .catch((error) =>{
    //         console.log(error.response.data);
    //         window.alert(error.response.data)
    //     })
        

    // }
    // else{
    //     toast.warning("Enter the Required Details");
    // }
    //   }

   

    const onSubmitBtn = (e) => {
      e.preventDefault();
  
      if (email && password !== "") {
       
        const usersData = { email, password };
  
        axios
          .post("http://localhost:5016/login", usersData)
          .then((response) => {
            if (response.status === 200) {
              let jwtToken = response.data.token;
              localStorage.setItem("token", jwtToken);
  
              toast.success("login Successfully!", {
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
                navigate("/Home");
              }, 3000);
            }
          })
          .catch((error) => {
            if (error.response) {
              if (error.response.status === 401) {
                if (error.response.data.message === "Email not found") {
                  toast.error("Enter valid email", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                } else if (error.response.data.message === "Incorrect password") {
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
              
            <label for="" class="loginemail">Email ID</label>
            <input type="text" name="" id="" class="logininput w-100 form-control" placeholder="enter your email ID" style={{border: "1px solid blue",height:"40px",}} onChange={(e) => setemail(e.target.value)}
          value={email} />
          
          <br></br>
          <div className="input-with-icon1">
            <label for="" class="loginpassword">password</label>
           <input  type={showPassword ? 'text' : 'password'} name="" id=""  class="logininput w-100 form-control" placeholder="enter your password" style={{border: "1px solid blue",height:"40px"}}  onChange={(e) => setpassword(e.target.value)}
          value={password}/> 
           <i className="fa-solid fa-eye icon1" onClick={togglePasswordVisibility}></i>
          </div>
         
            <p>Enter password that you received on your phonenumber </p>
            <a href="./home" class=""><button class="loginbutton w-100 " style={{height:"40px"}}>Login</button></a>
            </form>
            <a href="/mblotp"  className="loginforgot"><h6 class="loginh4">Login via OTP</h6></a>
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
export default Login1;