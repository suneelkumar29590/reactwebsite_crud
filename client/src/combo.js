import image from "./pab bottom-logo (1).jpg";

const Combo=()=>{
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

            {/* ....... */}
            <section class="buttons-container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-6">
                
                   <a href="/byservices"> <button class="transparent-btn col-lg-3">Data Base</button></a>
                    <a href="/jobPosting"><button class="transparent-btn shadow col-lg-3">Job Posting</button></a>
                   <a href=""> <button class="database-btn  shadow col-lg-3">Combo Products</button></a>
                
            </div>
        </div>
    </section>
    <section class="home-page-content">
        <div class="row mb-5 pt-5">
            <div class="col-lg-3"></div>
          
            <div class="col-lg-2 shadow text-center freeJobPostingCard pt-3 pb-4 p-3" style={{backgroundColor: "white", borderRadius: "5px"}}>
                <h5 style={{fontWeight: "bold",color: "#470493",fontFamily: "Arial"}}>3 Months Plan</h5>
                <div>
                    <p style={{fontWeight: "bold"}}><i class="fa-solid fa-indian-rupee-sign"></i> 2499+GST</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p class="monthlyLimitHeading m-0">Monthly Limit</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 300 Excel Downloads</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 1500 Profile Views</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 150 SMS</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 10 Job Posts</p>
                </div>
                <div class="col-lg-6"><hr/></div>
                <div style={{textAlign: "left"}}>
                    <p class="monthlyLimitHeading m-0">Daly Limit</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 250 Excel Downloads</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 1000 Profile Views</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 50 SMS</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 10 Job Posts</p>
                </div>
                
                
                <button class=" col-lg-12 transparent-btn-2 mt-3">Buy Now</button>
            </div>
            
           
            <div class="col-lg-2 shadow text-center freeJobPostingCard pt-3 pb-4 p-3" style={{backgroundColor: "white", borderRadius: "5px"}}>
                <h5 style={{fontWeight: "bold",color: "#470493",fontFamily: "Arial"}}>6 Months Plan</h5>
                <div>
                    <p style={{fontWeight: "bold"}}><i class="fa-solid fa-indian-rupee-sign"></i> 2499+GST</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p class="monthlyLimitHeading m-0">Monthly Limit</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 300 Excel Downloads</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 1500 Profile Views</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 150 SMS</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 10 Job Posts</p>
                </div>
                <div class="col-lg-6"><hr/></div>
                <div style={{textAlign: "left"}}>
                    <p class="monthlyLimitHeading m-0">Daly Limit</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 250 Excel Downloads</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 1000 Profile Views</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 50 SMS</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 10 Job Posts</p>
                </div>
                
                
                <button class=" col-lg-12 transparent-btn-2 mt-3">Buy Now</button>
            </div>
           
            <div class="col-lg-2 shadow text-center freeJobPostingCard pt-3 pb-4 p-3" style={{backgroundColor: "white", borderRadius: "5px"}}>
                <h5 style={{fontWeight: "bold",color: "#470493",fontFamily: "Arial"}}>1 Year Plan</h5>
                <div>
                    <p style={{fontWeight: "bold"}}><i class="fa-solid fa-indian-rupee-sign"></i> 24999+GST</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <p class="monthlyLimitHeading m-0">Monthly Limit</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 300 Excel Downloads</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 1500 Profile Views</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 150 SMS</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 10 Job Posts</p>
                </div>
                <div class="col-lg-6"><hr/></div>
                <div style={{textAlign: "left"}}>
                    <p class="monthlyLimitHeading m-0">Daly Limit</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 250 Excel Downloads</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 1000 Profile Views</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 50 SMS</p>
                    <p class="m-0"><i class="fa-solid fa-circle-check m-0" style={{color: "lightgray"}}></i> 10 Job Posts</p>
                </div>
                
                
                <button class=" col-lg-12 transparent-btn-2 mt-3">Buy Now</button>
            </div>
            <div class="col-lg-3"></div>
           
        </div>
        <div class="text-center pb-5">
            <p>Note: Taxes are excluded in the above showing plans</p>
        </div>
    </section>

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

export default Combo;