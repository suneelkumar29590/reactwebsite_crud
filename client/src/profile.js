import { Link } from "react-router-dom";
import image from "./pab bottom-logo (1).jpg";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios, { Axios } from "axios";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const [profieeditor, setprofieeditor] = useState("");
  const [rastram, setrastram] = useState("");
  const [presentstay, setpresentstay] = useState("");
  const [call, setcall] = useState("");
  const [box, setbox] = useState("");

  const [data, setdata] = useState([]);
  console.log(profieeditor);
  let navigate = useNavigate();

  const useData = {
    profieeditor: profieeditor,
    rastram: rastram,
    presentstay: presentstay,
    call: call,
    box: box,
  };
  console.log(useData);

  const [error, setErrorMessage] = useState([]);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const validateName = (value) => {
    if (!/^[A-Za-z ]+$/.test(value)) {
      setNameError("Name should only contain letters");
    } else {
      setNameError("");
    }
  };

  const validateMobileNumber = (value) => {
    if (!/^\d{10}$/.test(value)) {
      setMobileNumberError("Mobile number should be 10 digits");
    } else {
      setMobileNumberError("");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateName(newName);
  };

  const handleMobileNumberChange = (e) => {
    const newNumber = e.target.value;
    setMobileNumber(newNumber);
    validateMobileNumber(newNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !mobileNumberError && name && mobileNumber) {
      // Perform your submit logic here
      setErrorMessage("Form submitted successfully");
    } else {
      setErrorMessage("Form submission failed. Please check errors.");
    }

    if (profieeditor && rastram && presentstay && call && box !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkNWQ3NGNhNmZmZDVkNWMyMjVkNmJiIiwiaWF0IjoxNjkxNzQ0NTI3LCJleHAiOjE3Mjc3NDQ1Mjd9.jkgWOgy8JfmY2upTDUaxtaEPvGLSFfCxkFMOY2TFDXk",
      };
      axios
        .post("http://localhost:5016/profile", useData, { headers })
        .then((response) => {
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
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };

  // start

  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage1, setErrorMessage1] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedFormats = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 10 * 1024 * 1024; // 10MB

      if (allowedFormats.includes(file.type) && file.size <= maxSize) {
        setSelectedFile(file);
        setErrorMessage1("");
      } else {
        setSelectedFile(null);
        setErrorMessage1("Invalid file format or size exceeds 10MB.");
      }
    }
  };

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
      {/* card-Container */}

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              {/* <i
                class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3"
                style={{ fontsize: "200px" }}
              >
                {" "}
              </i> */}
              <div>
            
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/gif"
                  onChange={handleFileChange}
                />
                {errorMessage1 && <p>{errorMessage1}</p>}
                <div className="bird">
                  profile upload
                {selectedFile && (
                  
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Uploaded Image" className="bird1 w-100"
                  />
                 
                )}
                 </div>
              </div>

              <a href="profile.html">
                <button class="p-2 mb-1 profilebutton w-100 active h-25  bg-primary text-white">
                  Candidate Profile
                </button>
              </a>
              <a href="/resume">
                <button class="p-2 mb-1 profilebutton w-100">Resume</button>
              </a>
              <a href="">
                {" "}
                <button class="p-2 mb-1 profilebutton w-100">
                  Applied Jobs
                </button>
              </a>
              <a href="">
                <button class="p-2 mb-1 profilebutton w-100">Job Alerts</button>
              </a>
              <a href="">
                <button class="p-2 mb-1 profilebutton w-100">Saved Jobs</button>
              </a>
              <a href="">
                <button class="p-2 mb-1 profilebutton w-100">
                  Change Password
                </button>
              </a>
              <a href="/default">
                <button class="p-2 mb-1 profilebutton w-100">Log Out</button>
              </a>
            </div>
          </div>
          <div class="col-md-8 text-start">
            <div class="card p-3">
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
              <form onSubmit={handleSubmit}>
                <h5 class="profileh5 text-center">Basic Information</h5>
                <hr />

                <div>
                  <label className="profilename mb-1">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="form-control w-75 mb-2"
                    // value={name}
                    // onChange={handleNameChange}
                    style={{ border: "1px solid black" }}
                    onChange={(e) => setprofieeditor(e.target.value)}
                    value={profieeditor}
                  />
                  {nameError && <span className="error mes">{nameError}</span>}
                </div>
                <div>
                  <p class="profileh5">Experience</p>
                  <input type="radio" />
                  <label for="" class="m-2">
                    Fresher
                  </label>
                  <input type="radio" />
                  <label for="" class="m-2">
                    Experienced
                  </label>
                </div>

                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      State
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your State"
                      class="form-control w-100 p-2 profileselect"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setrastram(e.target.value)}
                      value={rastram}
                    />
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Current location
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Location"
                      class="form-control w-100 p-2 profileselect"
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setpresentstay(e.target.value)}
                      value={presentstay}
                    />
                  </div>
                </div>
                <div class="d-flex flex-row">
                  <div class="col-md-4">
                    <div>
                      <label className="profileh5 mb-1">Mobile Number:</label>
                      <input
                        type="text"
                        // value={mobileNumber}
                        // onChange={handleMobileNumberChange}
                        placeholder="Enter your mobile number"
                        className="form-control w-100 p-2 profileselect"
                        style={{ border: "1px solid black" }}
                        onChange={(e) => setcall(e.target.value)}
                        value={call}
                      />
                      {mobileNumberError && (
                        <span className="error mes">{mobileNumberError}</span>
                      )}
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                  <div class="col-md-4">
                    <label for="" class="profileh5 mb-1">
                      Email
                    </label>
                    <br />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Email Address"
                      class="form-control w-100 p-2 profileselect "
                      style={{ border: "1px solid black" }}
                      onChange={(e) => setbox(e.target.value)}
                      value={box}
                    />
                  </div>
                </div>

                {/* <h5 className="message-code">{error}</h5> */}

                <button type="submit" className="w-25 mt-4 p-2 profilebutton1">
                  Update Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ... */}
      <div className="container-fluid footer mt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-md-3">
              <img src={image} className="loginimg"></img>
              <p>
                we provide a direct access to the walk in opprtunities available
                on the site. results can be filtered on work experience ,venue
                ,from location ,empoyer type,and date range.{" "}
              </p>
              <p>Toll free Number: </p>
              <i class="fa-solid fa-phone"></i>
              <span>1800 833 9448</span>
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

            <div class="hrtag" style={{ marginleft: "50px", width: "90%" }}>
              <hr />
            </div>
            <div class="col-12 col-md-2"></div>
            <div class="col-12 col-md-3">
              <p>all rights resereved@2022PABJobs</p>
            </div>
            <div class="col-12 col-md-3">
              <p>
                Designed by<span class="perfex">@PerfexTechnologies</span>
              </p>
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
  );
}
export default Profile;
