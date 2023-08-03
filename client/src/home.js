import image from './pab bottom-logo (1).jpg';

function Home (){
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
                        <a class="nav-link" href="" style={{color:"blue"}}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="" style={{color:"black"}}>Browse Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="/jobs" style={{color:"black"}}>Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="#" style={{color:"black"}}>services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="/payment" style={{color:"black"}}>payments</a>
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
{/* ........... */}

 <div class="container8">
        <div class="row">
            <div class="col-12">
                <h2 class="homeh2">Find your dream job here</h2>
                <p class="homepara">5 lakh+ jobs for you to explore</p>
            </div>
            <div class="col-12 homebutton">
                <button class=" subhomebutton shadow w-25"><i class="fa-solid fa-magnifying-glass p-3 "></i>job Title or
                    company<i class="fa-solid fa-sort-down p-3 "></i>
                </button>
                <button class=" subhomebutton shadow w-25"><i class="fa-solid fa-location-dot p-3"></i>city,province or
                    Region<i class="fa-solid fa-sort-down p-3 "></i></button>
            </div>
            <div class="homebutton1">
                <button class="subbutton1"
                    >Search</button>
            </div>
        </div>
    </div>

    {/* .............. */}

    
    <div class="container9 mb-5">
        <div class="row">

            <div class="col-12 col-md-3">

            </div>

            <div class="col-12 col-md-7">
                <h6 class="topsearch">Top Searches</h6>
                <div class="card shadow p-2 m-3">

                    <div class="btngroup1">
                        <button class="btn1 p-2 m-1">Banking</button>
                        <button class="btn1 p-2 m-1">Sales</button>
                        <button class="btn1 p-2 m-1">HR Executive</button>
                        <button class="btn1 p-2 m-1">Manual Testing</button>
                        <button class="btn1 p-2 m-1">IT</button>
                        <button class="btn1 p-2 m-1">Devops Engineer</button>
                        <button class="btn1 p-2 m-1">Digital Marketing</button>
                    </div>
                    <div class="btngroup2">
                        <button class="btn1 p-2 m-1">Graphic Desiging</button>
                        <button class="btn1 p-2 m-1">Data Analyst</button>
                        <button class="btn1 p-2 m-1">Accounting</button>
                        <button class="btn1 p-2 m-1">Accounting</button>
                        <button class="btn1 p-2 m-1">Software Engineer</button>
                        <button class="btn1 p-2 m-1">Freshers</button>
                        <p className="morepara">more..</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-2">

            </div>
        </div>
    </div>

{/* ............*/}


<div class="container-fluid container10 mb-5">
        <div class="row">
            <div class="col-12 col-md-2">

            </div>

            <div class="col-12 col-md-8 text-center">
                <h6 class="searchlocate text-start">Search By Location</h6>
                <button class="imgbutton p-2 m-2"><img src="https://pbs.twimg.com/media/CQLNvOVVEAEOVY8.png"
                        alt="" width="50px" height="30px" className="px-2"/>Hyderabad</button>
                <button class="imgbutton p-2 m-2"><img src="https://media.istockphoto.com/id/510318234/vector/india-gate-vector-sketch-illustration-war-memorial-new-delhi-india.jpg?s=612x612&w=0&k=20&c=1qR8nBQ4tr_m8ZYbWGZQBwhGslykrtTLfCjn5W5LtSg="
                        alt="" width="50px" height="30px" className="px-2"/>Mumbai</button>
                <button class="imgbutton p-2 m-2"><img src="https://cdn.dribbble.com/users/460946/screenshots/3009895/madrascentral.jpg"
                        alt="" width="50px" height="30px" className="px-2"/>Chennai</button>
                <button class="imgbutton p-2 m-2"><img src="https://4.bp.blogspot.com/-HGizM-_b0Hg/WSWHqWJfm2I/AAAAAAAAAqU/RcdAdLTSViotovXVOJcJNe3odAlhRSv0gCLcB/s1600/L-112.JPG"
                        alt="" width="50px" height="30px" className="px-2"/>Pune</button>
                <button class="imgbutton p-2 m-2"><img src="https://www.juliusbaer.com/fileadmin/_processed_/d/e/csm_location-bangalore_1eb4596c40.png"
                        alt="" width="50px" height="30px" className="px-2"/>Bengaluru</button>
                <button class="imgbutton p-2 m-2"><img src="https://media.istockphoto.com/id/510318234/vector/india-gate-vector-sketch-illustration-war-memorial-new-delhi-india.jpg?s=612x612&w=0&k=20&c=1qR8nBQ4tr_m8ZYbWGZQBwhGslykrtTLfCjn5W5LtSg="
                        alt="" width="50px" height="30px" className="px-2"/>Delhi</button>
                
                <p className="citipara">View All Functional Cities</p>
            </div>
            <div class="col-12 col-md-2">

            </div>


        </div>
    </div>

    {/* ............ */}

    
    <section>
        <div class="container">
            <div class="row my-2">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="d-flex flex-column">
                        <div>
                            <h3 class="indus">Top Companies By Category</h3>
                        </div>
                        
                            <div class="d-flex flex-row row">
                            <div class="card-container jobCard col-md-2" style={{width: "200px"}}>
                                    <p>MNC's{">"} </p>
                                    <p>1.5k jobs availabe</p>
                                    <div class="d-flex flex-row">
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://pbs.twimg.com/profile_images/1653813147063529485/T76j415n_400x400.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://guide-images.cdn.ifixit.com/igi/cDZiwSJVRhEXkKCC.large" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container  mx-3 jobCard col-md-2" style={{width: "200px"}}>
                                    <p>MNC's {">"}</p>
                                    <p>1.5k jobs availabe</p>
                                    <div class="d-flex flex-row">
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://pbs.twimg.com/profile_images/1653813147063529485/T76j415n_400x400.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://guide-images.cdn.ifixit.com/igi/cDZiwSJVRhEXkKCC.large" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container jobCard col-md-2" style={{width: "200px"}}>
                                    <p>MNC's {">"}</p>
                                    <p>1.5k jobs availabe</p>
                                    <div class="d-flex flex-row">
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://pbs.twimg.com/profile_images/1653813147063529485/T76j415n_400x400.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://guide-images.cdn.ifixit.com/igi/cDZiwSJVRhEXkKCC.large" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-container  mx-3 jobCard col-md-2 " style={{width: "200px"}}>
                                    <p>MNC's {">"}</p>
                                    <p>1.5k jobs availabe</p>
                                    <div class="d-flex flex-row">
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://pbs.twimg.com/profile_images/1653813147063529485/T76j415n_400x400.jpg" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://guide-images.cdn.ifixit.com/igi/cDZiwSJVRhEXkKCC.large" class="logoCard" alt=""/>
                                        </div>
                                        <div>
                                            <img src="https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg" class="logoCard" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row  m-2">
                                <div class="col-8">
        
                                </div>
                                <div class="col-4 ">
                                    <a href="#" class="textContent" ><i class="fa-solid fa-arrow-right-long"></i> View All locations</a>
                                </div>
                               
                </div>
                    </div>
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    </section>

    {/* ................. */}

    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="container skills m-4">
                        <div class="row d-flex flex-row">
                            <div class="col-md-4">
                                  <img src="https://res.cloudinary.com/dy6efqiq9/image/upload/v1690825723/pngtree-programmer-work-skill-scene-illustration-png-image_4896726_s4vx3n.jpg" class="w-75"/>
                            </div>
                            <div class="col-md-8 d-flex flex-column">
                                <div>
                                    <h3 class="skillHead p-2">SELL YOUR SKILLS</h3>
                                </div>
                                <div>
                                    <p class="skillPara p-2">what if you could use your skill and talent to earn money?
                                    So that you can live the life you love?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    </section>

    {/* ........... */}

    <section>
    <div class="container">
        <div class="row">
            <div class="col-md-2">

            </div>
            <div class="col-md-8">
                <div class="d-flex flex-column">
                    <div>
                        <h3 class="indus">Featured Jobs By Companies</h3>
                    </div>
                    <marquee behavior="alternate" scrollamount="4" direction="left" class="m-2">
                        <div class="logo">
                          <img src="https://w7.pngwing.com/pngs/326/725/png-transparent-harman-international-industries-industry-harman-kardon-harman-professional-solutions-samsung-electronics-samsung-blue-text-logo-thumbnail.png" class="w-50" alt="Company 1"/>
                        </div>
                        <div class="logo">
                          <img src="https://companieslogo.com/img/orig/TCS.NS_BIG-89c50e39.png?t=1631949260" class="w-50" alt="Company 2"/>
                        </div>
                        <div class="logo">
                          <img src="https://cdn.imgbin.com/15/20/23/imgbin-capgemini-logo-business-insuretech-connect-cfo-rising-europe-summit-others-capgemini-logo-Yy2qm7xHfwk9vBN3cYREqKiKQ.jpg" class="w-50" alt="Company 3"/>
                        </div>
                        <div class="logo">
                            <img src="https://download.logo.wine/logo/Cognizant/Cognizant-Logo.wine.png" class="w-50" alt="Company4"/>
                          </div>
                          <div class="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvsuEQaCvXWYaEcoVKx6ODh2Q8BznHCDHX6fc2BVa-Q&s" class="w-50" alt="Company5"/>
                          </div>
                          <div class="logo">
                            <img src="https://w7.pngwing.com/pngs/507/564/png-transparent-abb-group-solar-inverter-corporation-company-egypt-national-football-angle-company-text.png" class="w-50" alt="Company6"/>
                          </div>
                      </marquee>
                      <div class="row  m-2">
                        <div class="col-8">

                        </div>
                        <div class="col-4 ">
                            <a href="#" class="textContent" ><i class="fa-solid fa-arrow-right-long"></i> View All locations</a>
                        </div>
                       
        </div>
                </div>
            </div>
            <div class="col-md-2">

            </div>
        </div>
    </div>
</section>


{/* .......... */}

<section class="industry p-5">
    <div class="container m-4">
        <div class="row">
        <div class="col-md-2">

        </div>
        <div class="col-md-8">
        <div class="d-flex flex row">
            <div>
                <h3 class="indus">Browse Jobs By Designation</h3>
            </div>
            <div class="row">
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1"> ABAP Consultant</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">BPO Executive</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Chef</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">BPO Executive</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Chef</button>
                </div>
            </div>
            <div class="row">
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Editor</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Finance Manager</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Game Designer</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Finance Manager</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Game Designer</button>
                </div>
            </div>
            <div class="row">
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">HR Assistant</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Industrial Engineer</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">java Developer</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Industrial Engineer</button>
                </div>
                <div class="col-md p-1 m-1">
                    <button class="custom-btn btn-10 w-100 p-2 m-1">Java Developer</button>
                </div>
            </div>
            <div class="row  m-2">
                <div class="col-8">

                </div>
                <div class="col-4 ">
                    <a href="#" class="textContent" ><i class="fa-solid fa-arrow-right-long"></i> View All locations</a>
                </div>
               
</div>
        </div>
        </div>
        <div class="col-md-2">

        </div>
        </div>

    </div>
</section>

{/* ...... */}

<section>
        <div class="container">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="container skills m-4">
                        <div class="row d-flex flex-row">
                            <div class="col-md-4">
                                  <img src="https://res.cloudinary.com/dy6efqiq9/image/upload/v1690825723/pngtree-programmer-work-skill-scene-illustration-png-image_4896726_s4vx3n.jpg" class="w-75"/>
                            </div>
                            <div class="col-md-8 d-flex flex-column">
                                <div>
                                    <h3 class="whiteText p-3">POST YOUR <span class="blueText">DAY JOB</span></h3>
                                </div>
                                <div>
                                    <p class="skillPara p-3">It's time to work on your flexible day job</p>
                                </div>
                            </div>
                        </div>
                        
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
        </div>
    </section>

    {/* .............. */}

    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-2">

                </div>
                <div class="col-md-8">
                    <div class="d-flex flex-row skills2 m-2">
                        <div>
                            <p class="p-2 m-2 callText">Find better & faster jobs with pab jobs service Call : 1800 833 9448 Now! </p>
                        </div>
                        <div class="d-flex flex-row">
                            <div><input type="text" placeholder="Enter Your Mobile Number" class="w-100 p-1"/></div>
                            <div>
                                <button class="bg-warning p-1">Get call back</button>
                            </div>
                    </div>
                </div>
                </div>
                <div class="col-md-2">

                </div>
            </div>
        </div>
    </section>

    {/* ...... */}

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
export default Home;