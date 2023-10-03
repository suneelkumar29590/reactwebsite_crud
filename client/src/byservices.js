import image from "./pab bottom-logo (1).jpg";

const Byservices=()=>{
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
                                            <a class="nav-link " href="/dashboard" style={{ color: "black" }}>Dashboard</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link dropdown-toggle" href="/search" style={{ color: "black" }}>Search Candidates</a>
                                        </li>
                                        <li class="nav-item px-5">
                                            <a class="nav-link dropdown-toggle" href="" style={{ color: "#543281",fontWeight:"bold" }}>Buy services</a>
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
            <section class="buttons-container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-6">
              
                    <a href=""><button class="database-btn col-lg-3">Data Base</button></a>
                    <a href="/jobposting"><button class="transparent-btn shadow col-lg-3">Job Posting</button></a>
                    <a href="/combo"><button class="transparent-btn shadow col-lg-3">Combo Products</button></a>
                
            </div>
        </div>
    </section>
    <section class="home-page-content">
        <div class="row mb-5 pt-5">
            <div class="col-lg-2"></div>
            
            <div class="col-lg-4 pb-5 shadow " style={{backgroundColor: "white", marginRight: "40px"}}>
                <div class="row text-center">
                    <p class="col-lg-6 monthly-btn">Monthly</p>
                    <p class="col-lg-6 daily-btn">Daily</p>
                </div>
                
                <div class="row m-0">
                    <div class="col-6 shadow">
                        <p>2000 Excel Downloads <br/>1000 Profile Views <br/>100 SMS</p>
                    </div>
                    
                    <div class="col-6 shadow">
                        <p>2000 Excel Downloads <br/>1000 Profile Views <br/>100 SMS</p>
                    </div>
                </div>
                <div><hr/></div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">1 Month <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">4999+</p>
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">3 Months <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">12999+</p>
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">6 Months <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">22999+</p>
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">12 Months <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">38999+</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center text-center">
                    <button class="col-4 buy-now-btn">Buy Now</button>
                </div>
                
                
                
            </div>
           
            
           
            <div class="col-lg-4 m-0 pb-5 shadow" style={{backgroundColor: "white"}}>
                <div class="row text-center">
                    <p class="col-lg-6 monthly-btn">Monthly</p>
                    <p class="col-lg-6 daily-btn">Daily</p>
                </div>
                
                <div class="row m-0">
                    <div class="col-6 shadow">
                        <p>4000 Excel Downloads <br/>2000 Profile Views <br/>250 SMS</p>
                    </div>
                    
                    <div class="col-6 shadow">
                        <p>500 Excel Downloads <br/>300 Profile Views <br/>100 SMS</p>
                    </div>
                </div>
                <div><hr/></div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">1 Month <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">8999+</p>
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">3 Months <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">23999+</p>
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">6 Months <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">44999+</p>
                        </div>
                    </div>
                   
                </div>
                <div class="row mb-3">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <div class="row pricing-btn">
                            <div class="col-lg-1"></div>
                            <p class="col-lg-6 ">12 Months <span style={{float: "right"}}>|</span></p>
                            <p class="col-lg-4">79999+</p>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-center text-center">
                    <button class="col-4 buy-now-btn">Buy Now</button>
                </div>
                
                
                
            </div>
           

            <div class="row text-center justify-content-center mt-4">
                <p class="col-lg-4">Note: Select the month that you need and click on buy option<br/> Taxes are excluded in the above plans</p>
            </div>
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

export default Byservices;