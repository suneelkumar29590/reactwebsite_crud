import { Link } from "react-router-dom";
import image from './pab bottom-logo (1).jpg';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Default=()=>{
  

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");


 
  let navigate = useNavigate();
  const [data, setdata] = useState([]);

  console.log(fullname);

  const usersData = {
    
    fullname: fullname,
    email: email,
    mobilenumber: mobilenumber,
    password: password,
    confirmpassword: confirmpassword
  };

  console.log(usersData);

 

  const onSubmitForm = (e) => {
    e.preventDefault();
    if ( 
      fullname &&
      email &&
      mobilenumber &&
      password &&
      confirmpassword !== ""
    ) {

      axios.post("http://localhost:5010/signup/", usersData)
        .then((response) =>{
          console.log(response.data);
          setdata(response.data);
          console.log(response.data)
          if (response.status === 200) {
            
            toast.success("Registration Successfull", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored"
            });
            
           
              setTimeout(function(){
                navigate('/login')
               }, 3000)
            
          }
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
     else {

      toast.warning("Enter the Required Details");
     
    }
  };

  

  
    return(
      <div>

        <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
        <img src={image} className="headerimage"></img>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                style={{backgroundcolor:"black"}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav menubar">
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="browsejobs.html" style={{color:"black"}}>Browse Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="job.html" style={{color:"black"}}>Jobs</a>
                    </li>
                    

                </ul>
            </div>
        </div>
    </nav>
        {/* .......... */}
        <div className="defaultbody">

      <div className="container mb-5 ">
     

        <div className="row">
          <div className="col-12 col-md-5">
            <div className="card shadow mt-5 logincard">
              <div className="col-12 text-center">
              <h2>Create an account</h2>
              <p className="parastart">it only takes a couple of minutes to get started!</p>
              </div>
              <div className=" text-center reactbtngroup">
                <a href="./Login"><button className="w-25 reactloginbtn shadow mx-1">Login</button></a>
                <button className="w-25 reactloginbtn shadow ">Signup<i class="fa-solid fa-circle-check "></i></button>
              </div>
              <div className=" text-center reactbtngroup mt-3 mb-3">
                
              <a href="./Default"> <button className="w-25 reactloginbtn1 shadow">Job seekers<input type="radio" name="type" value="applicant"></input></button></a>
                <a href="./Recruiter1"><button className="w-25 reactloginbtn shadow">Recruiters <input type="radio" name="type" value="recruiter" ></input></button></a>
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
              <form class="form p-5" onSubmit={ onSubmitForm}>
                
                        <label for="" id="fullname" class="loginlabel">fullname</label>
                        <input type="text" class=" form-control" placeholder="Enter your full name" id="input" onChange={(e) => setfullname(e.target.value)} value={fullname}/>

                        <label for=""  class="loginlabel" >Email ID</label>
                        <input type="email" class="form-control " placeholder="enter your Email ID" id="input"  onChange={(e) => setemail(e.target.value)} value={email}/>
                       
                        <label for=""  class="loginlabel" >Mobile Number</label><br/>
                        <div class="d-flex flex-row">
                            <select name="" id="input" className="mx-1">
                                <option value="" >+91</option>
                            </select>

                            <input type="text" class="form-control " placeholder="Enter your mobile number" id="input" onChange={(e) => setmobilenumber(e.target.value)} value={mobilenumber}/>
                        </div>
                        <label for=""  class="loginlabel" >Password</label>
                        <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input"  onChange={(e) => setpassword(e.target.value)} value={password}/>

                        <label for=""  class="loginlabel" >confirm Password</label>
                        <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input"  onChange={(e) => setconfirmpassword(e.target.value)} value={confirmpassword}/>

                        <div id="gender">
                           <b>Gender</b> <br/><input type="radio" name="type"/> male <input type="radio" name="type"/> female
                            <input type="radio" name="type"/> prefer not to say<br/>
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
          <div class=" col-12 col-lg-4 mt-5">
                <div class="card card1 shadow" >
                    <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                        width="400px" height="300px" alt="" id="image"/>
                </div>
                <div class="card1para">
                    <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Build your profile and let
                        recruitrs find yon</span> <br/>
                    <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Get job posting delivered right
                        to your email</span> <br/>
                    <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Find a job and grow your
                        career</span>

                </div>
            </div>




        </div>
    
      </div>
      <div className="container-fluid footer">
        <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src={image} className="loginimg"></img>
            <p>we provide a direct access to the walk in opprtunities available on the site. results can be filtered on work experience ,venue ,from location ,empoyer type,and date range. </p>
            <p>Toll free Number: </p>
            <i class="fa-solid fa-phone"></i><span>1800 833 9448</span>



          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-2">
            <h3>For Employers</h3>
            <p>{">"}Company profile</p>
            <p>{">"}Post a job</p>
            <p>{">"}My jobs</p>


          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-2">
            <h3>Jobs</h3>
            <p>{">"}All jobs</p>
            <p>{">"}company jobs</p>
            <p>{">"}Category jobs</p>
            <p>{">"}Locational jobs</p>
            <p>{">"}Designation jobs</p>
            <p>{">"}Skill jobs</p>


          </div>
          <div className="col-12 col-md-3">
            <h3> Browse Jobs</h3>
            <p>{">"}Companies</p>
            <p>{">"}Browse jobs</p>
            <p>{">"} jobs</p>
            <h3>Information</h3>
            <p>{">"}Terms & Conditions </p>
            <p>{">"}Privacy Policy</p>
            <p>{">"}Fraud Alert</p>


          </div>

        </div>
        </div>

           </div>
      </div>
      </div>
    )
}
export default Default;


