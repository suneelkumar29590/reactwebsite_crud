import image from "./pab bottom-logo (1).jpg";

const Dashboard=()=>{
    return(
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
                                            <a class="nav-link " href="/dashboard" style={{ color: "#543281",fontWeight:"bold" }}>Dashboard</a>
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
                                            <a href="companyprofile"><i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
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

            {/* ......... */}
<div style={{backgroundColor:"#fbf7fd"}}>
            <div class="container pt-5">
        <div class="row">
            <div class="col-12 col-md-1">

            </div>

            <div class="col-12 col-md-6">
                <h3>Dashboard</h3>
                <p>Note: recruiter login costs 499 rupees +GST maximum 3 recruiter logins for package</p>
                <button class="p-2 px-3 mx-3 my-3  shadow dashbutton" style={{backgroundColor: "#2c0264",color: "white"}}>Data Base</button>
                <button class="p-2 px-3 mx-3 my-3 bg-white shadow dashbutton">Job Posting</button>
                <button class="p-2  mx-3 my-3 bg-white shadow dashbutton">Combo Products</button>

            </div>
            <div class="col-12 col-md-4">
                <div class="card d-flex flex-row py-4">

                    <i class=" fa-sharp fa-solid fa-circle-user bellicon " style={{color: "gray"}}></i>
                    <div>
                        <h5><b>Company Name</b></h5>
                        <p>IT & Software</p>
                        <p>www.Companyname.com</p>
                    </div>
                </div>
            </div>
</div>
</div>
<div class="container mt-3">
    <div class="row">


        <div class="col-12 col-md-1">

        </div>


   
    <div class="col-md-10">
        <div class="card px-5 shadow">
            <h5 style={{color: "#2c0264", marginTop: "15px"}}><b>Monthly Usage</b></h5>
            <hr/>
            <div class="row">
                <div class="card col-12 col-md-2 d-flex flex-row py-2 shadow">
                    <i class="fa-solid fa-download py-3 mx-1 Dashboardicon"></i>
                    <div class="mx-3">
                        <p>Excel Downloads <br/> <b>2000</b></p>

                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="card col-12 col-md-2 d-flex flex-row  py-2 px-2 shadow">
                    <i class="fa-solid fa-file-lines py-3 Dashboardicon1"></i>
                    <div class="mx-3">
                        <p>Profile Views<br/> <b>1000</b></p>

                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="card col-12 col-md-2 d-flex flex-row  py-2 px-2 shadow">
                    <i class="fa-solid fa-envelope py-3 Dashboardicon2"></i>
                    <div class="mx-3">
                        <p>Messages<br/> <b>100</b></p>

                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="card col-12 col-md-2 d-flex flex-row  py-2 px-2 shadow">
                    <i class="fa-solid fa-pen-to-square py-3 Dashboardicon3"></i>
                    <div class="mx-3">
                        <p>Job Postings<br/><b>69</b></p>

                    </div>
                </div>
            </div>
            <p class="dashboardpara mt-3">All the values updating since last month</p>


            <h5 style={{color: "#2c0264"}}><b>Daily Usage</b></h5>
            <hr/>
            <div class="row">
                <div class="card col-12 col-md-2 d-flex flex-row py-2 shadow">
                    <i class="fa-solid fa-download py-3 mx-1 Dashboardicon"></i>
                    <div class="mx-3">
                        <p>Excel Downloads <br/> <b>200</b></p>

                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="card col-12 col-md-2 d-flex flex-row  py-2 px-2 shadow">
                    <i class="fa-solid fa-file-lines py-3 Dashboardicon1"></i>
                    <div class="mx-3">
                        <p>Profile Views<br/> <b>150</b></p>

                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="card col-12 col-md-2 d-flex flex-row  py-2 px-2 shadow">
                    <i class="fa-solid fa-envelope py-3 Dashboardicon2"></i>
                    <div class="mx-3">
                        <p>Messages<br/> <b>25</b></p>

                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="card col-12 col-md-2 d-flex flex-row  py-2 px-2 shadow">
                    <i class="fa-solid fa-pen-to-square py-3 Dashboardicon3"></i>
                    <div class="mx-3">
                        <p>Job Postings<br/><b>00</b></p>

                    </div>
                </div>
            </div>
            <p class="dashboardpara mt-3">All the values updating since last month</p>
            
            <hr/>
            <div class="row bg-light py-2 " style={{borderRadius: "10PX"}} >
                <div class=" col-12 col-md-6">
                    <h5 style={{color: "#310868"}} ><b>Recruiter Profiles</b></h5>
                </div>
                <div class="col-md-3"></div>
                <div class="col-12 col-md-3">
                    <button class="mx-5 p-1 mb-2  bg-white"  style={{borderRadius: "10px", border: "none"}}>+Create Admin</button>
                </div>
            </div>
            <div class="row sana mx-5 px-5 py-2 mt-3 " style={{borderRadius: "10PX"}} >
                <div class="col-12 col-md-2">

                    <p >Name</p>
                    </div>
                    <div class="col-12 col-md-2">
                    <p class="px-3">Date</p>
                </div>
                <div class="col-12 col-md-2">
                    <p >Position</p>
                </div>
                <div class="col-12 col-md-2">
                    <p >Employee ID</p>
                </div>
                <div class="col-12 col-md-2">
                    <p>Action</p>
                </div>
                </div>
                <div class="card mx-5">
                    <div class="row sana1 py-3 px-4">
                    <div class="col-12 col-md-2">

                        <i class=" fa-sharp fa-solid fa-circle-user " style={{color: "gray", marginRight:"10px"}}></i><span >Ashokini</span>
                        </div>
                        <div class="col-12 col-md-2">
                        <p >July 07,2023</p>
                    </div>
                    <div class="col-12 col-md-2">
                        <p >HR Manager</p>
                    </div>
                    <div class="col-12 col-md-2">
                        <p >12346969</p>
                    </div>
                    <div class="col-12 col-md-2">
                        <button class="px-3 py-1 logindashboard">login</button>
                    </div>
                </div>

                </div>


                <div class="row bg-light py-2 mt-3" style={{borderRadius: "10PX"}} >
                    <div class="col-12 col-md-6">
                        <h5 style={{color: "#310868"}} ><b>HR Profiles</b></h5>
                    </div>
                    <div class="col-md-3"></div>
                    <div class="col-12 col-md-3">
                        <button class="mx-5 p-1 mb-2  bg-white"  style={{borderRadius: "10px", border: "none"}}>+Create Admin</button>
                    </div>
                </div>
                <div class="row sana mx-5 px-5 py-2 mt-3 " style={{borderRadius: "10PX"}} >
                    <div class="col-12 col-md-2">

                        <p >Name</p>
                        </div>
                        <div class="col-12 col-md-2">
                        <p class="px-3">Date</p>
                    </div>
                    <div class="col-12 col-md-2">
                        <p >Position</p>
                    </div>
                    <div class="col-12 col-md-2">
                        <p >Employee ID</p>
                    </div>
                    <div class="col-12 col-md-2">
                        <p>Action</p>
                    </div>
                    </div>
                    <div class="card mx-5 mb-5">
                        <div class="row sana1 py-3 px-4">
                        <div class="col-12 col-md-2">

                            <i class=" fa-sharp fa-solid fa-circle-user" style={{color: "gray", marginRight:"10px"}}></i><span >Ashokini</span>
                            </div>
                            <div class="col-12 col-md-2">
                            <p >July 07,2023</p>
                        </div>
                        <div class="col-12 col-md-2">
                            <p >HR Manager</p>
                        </div>
                        <div class="col-12 col-md-2">
                            <p >12346969</p>
                        </div>
                        <div class="col-12 col-md-2">
                            <button class="px-3 py-1 logindashboard">login</button>
                        </div>
                    </div>

                    </div>

            </div>


        </div>



    
</div>




    </div>
    </div>

    {/* ......... */}

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
export default Dashboard;