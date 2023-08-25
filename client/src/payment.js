import { Link } from "react-router-dom";
import React, { useState } from "react";

// import React, { useState } from 'react';
import image from "./pab bottom-logo (1).jpg";
import axios, { Axios } from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Payment(){

    
//payment Details
const [paymentname, setpaymentname] = useState("");
const [paymentemailid, setpaymentemailid] = useState("");
const [paymentmobile, setpaymentmobile] = useState("");
const [amount, setamount] = useState("");


const [data03, setdata03] = useState([]);
console.log(paymentname);
const paymentDetails = {
    paymentname: paymentname,
    paymentemailid: paymentemailid,
    paymentmobile: paymentmobile,
    amount: amount,
};
console.log(paymentDetails);
const onSubmitFormpaymentDetails = (e) => {
  e.preventDefault();

  if (
    paymentname &&
    paymentemailid &&
    paymentmobile &&
    amount !== ""
  ) {
    const headers = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkNWQ3NGNhNmZmZDVkNWMyMjVkNmJiIiwiaWF0IjoxNjkxNzQ0NTI3LCJleHAiOjE3Mjc3NDQ1Mjd9.jkgWOgy8JfmY2upTDUaxtaEPvGLSFfCxkFMOY2TFDXk",
    };
    axios
      .post("http://localhost:5016/PaymentDetails", paymentDetails, {
        headers,
      })
      .then((response) => {
        setdata03(response.data);

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
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    toast.warning("Enter the Required Details");
  }
};

    return(
        <div>
           <nav class="navbar navbar-expand-sm navbar-dark card shadow">
        <div class="container">
        <img src={image} className="headerimage"></img>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                style={{backgroundcolor:"black"}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav menubar">
                    <li class="nav-item">
                        <a class="nav-link" href="/home" style={{color:"black"}}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="/browse" style={{color:"black"}}>Browse Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="/jobs" style={{color:"black"}}>Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="#" style={{color:"black"}}>services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="payment.html" style={{color:"blue"}}>payments</a>
                    </li>
                    <li class="nav-item">
                        <i class="fa-solid fa-bell bellicon"></i>
                    </li>
                    <li class="nav-item">
                       <a href="/profile"> <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon" sty></i></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    {/* ......... */}
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
     
    <div class="container4 mt-5" >
        <div class="container2">
            <div class="row">
                <div class="col-12 col-md-1">

                </div>
                
                <div class=" col-md-10 maincard mb-5">
                    <div class="card mt-5 maincard1 d-flex flex-row shadow p-5">
                        <div class="col-md-6 ">
                       
                            <h1 class="container2heading mt-3">Payment Request</h1>

 
                            <form class="form" >
                                <label for="" id="fullname" class="loginlabel">Name</label>
                                <input type="text" class=" form-control" placeholder="enter your full name" id="input" value={paymentname} onChange={(e) =>
                                      setpaymentname(e.target.value)}/>
                                <label for="" class="loginlabel">Email ID</label>
                                <input type="email" class="form-control " placeholder="enter your Email ID" id="input" value={paymentemailid} onChange={(e) =>
                                      setpaymentemailid(e.target.value)}/>
                                <label for="" class="loginlabel">Mobile Number</label><br/>
                                <div class="d-flex flex-row">
                                    <select name="" id="number">
                                        <option value="">+91</option>
                                    </select>

                                    <input type="text" class="form-control " placeholder="Enter your mobile number"
                                        id="input" value={paymentmobile} onChange={(e) =>
                                            setpaymentmobile(e.target.value)}/>
                                </div>
                                <label for="" class="loginlabel">Amount</label>
                                <input type="password" class="form-control " placeholder="minimum 6 charactres"
                                    id="input" value={amount} onChange={(e) =>
                                        setamount(e.target.value)}/>




                                <button class="Registerbtn paybtn w-100 mt-4" onClick={onSubmitFormpaymentDetails}>Make Payment</button>
                            </form>
                            
                        </div>
                        <div class=" card1 col-md-3" style={{width: "300px"}}>
                            <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                                width="400px" height="300px" alt="" id="image" class="mt-5"/>
                        </div>

                    </div>
                </div>
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

          <div class="hrtag" style={{marginleft: "50px", width: "90%"}}>
            <hr/>
        </div>
            <div class="col-12 col-md-2">

            </div>
            <div class="col-12 col-md-3">
                <p>all rights resereved@2022PABJobs</p>
            </div>
            <div class="col-12 col-md-3">
                <p>Designed by<span class="perfex">@PerfexTechnologies</span></p>
            </div>
            <div class="col-12 col-md-4">
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

export default Payment;