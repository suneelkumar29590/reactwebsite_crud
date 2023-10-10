import { useEffect, useState } from "react";
import image from "./pab bottom-logo (1).jpg";
import axios from "axios";

const Search=()=>{
 const [blogslist,setblogslist]=useState([]);

 useEffect(()=>{
    fetchBlogs();
 },[])

 const fetchBlogs = async () => {
    try{
        const response = await axios.get("http://localhost:5016/allcandidates");
        setblogslist(response.data);
    }catch(error){
        console.error("Error fetching data:", error);
    }
 };
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
                                            <a class="nav-link dropdown-toggle" href="/search" style={{ color: "#543281",fontWeight:"bold" }}>Search Candidates</a>
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

            {/* ... */}

            <section>
        <div class="container-fluid searchbanner11">
            <div class="row pt-4 pb-4">
                <div class="col-lg-2">
                </div>
                <div class="col-lg-8">
                    <h1 class="find-heading">Find Your Dream Jobs Here</h1>
                    <p class="jobs-for-you-para">5 lakh+ jobs for you to explore</p>
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <button type="text" class="col-lg-3 subhomebutton shadow" style={{marginRight: "5px"}}><span style={{float: "left"}}><i class="fa-solid fa-magnifying-glass"></i></span><span style={{paddingTop: "20px"}}>Designation or Skills</span><i class="fa-solid fa-sort-down" style={{float: "right"}}></i></button>
                        <button type="text" class="col-lg-3 subhomebutton shadow" style={{marginRight: "5px"}}><span style={{float: "left"}}><i class="fa-solid fa-location-dot"></i></span><span style={{paddingTop: "20px"}}>City, Province or Region</span><i class="fa-solid fa-sort-down" style={{float: "right"}}></i></button>
                        <button type="text" class="col-lg-3 subhomebutton shadow" style={{marginRight: "5px"}}><span style={{float: "left"}}><i class="fa-solid fa-location-dot"></i></span><span style={{paddingTop: "20px"}}>Experience</span><i class="fa-solid fa-sort-down" style={{float: "right"}}></i></button>
                        <div class=" text-end mt-2">
                        <button class="seacrhmorebutton shadow">+More filters</button>
                    </div>

                    </div>
                    
                    <div class="row homebutton1 justify-content-center">
                        <button class="col-lg-2 subbutton1"
                            style={{marginTop: "30px", backgroundColor: "#2c0264"}}>Search</button>
                    </div>                    
                </div>
                
            </div>
        </div>
    </section>

    <section className="container mt-5 mb-5">
        <div className="row">
            <div className="col-md-1"></div>
        <div class="col-12 col-md-5">
                <div class="card p-2 shadow excelcard">
                    <div class="row excel">
                        <p className="col-md-1"></p>
                    <i class="fa-solid fa-square-check greenbox col-md-1"></i>
                    <p className="col-md-6">Export all candidates data to excel</p>
                    <button class="excelbuttonsearch col-md-3">Excel<i class="fa-solid fa-download mx-2"></i></button>
                </div>
                </div>

            </div>
            <div className="col-md-2"></div>
            <div class="col-12 col-md-3 mt-4">
                
                <button className="py-1 px-4 excelright1 dropdown-toggle">Years</button>
                <button className="py-1 px-4 excelright mx-2 dropdown-toggle">Result per page: 10</button> 
                </div>
                
                
                    

        </div>

    </section>

    
{blogslist.map((blog)=>(
<div key={blog._id}>
<section class="home-page-content pt-5">


<div class="row">
    <div class="col-lg-2"></div>

    
    <div class="col-lg-2 pt-2 mb-4 shadow" style={{backgroundColor: "white",marginright: "20px",borderradius: "10px"}}>
        <div class="row">
            <div class="col-1 m-0">
                <input type="checkbox"/>
            </div>
            <p class="col-lg-8 pt-1"> Export data to Excel</p>
        </div>
        <div class="text-center">
            {/* <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontSize: "100px", color: "gray"}}></i>     */}
            <img src={blog.search_img} width={200} className="rounded-circle"/>
            <p class="text-center m-0" style={{fontWeight: "bold",fontSize: "20px"}}><b>{blog.search_name}</b></p>
        </div>
        <hr/>
        <div class="row">
            <button class="col-12 col-md-3 email-btn m-2">Email</button>
            <button class="col-12 col-md-3 email-btn m-2">Contact</button>
            <button class="col-12 col-md-3 email-btn m-2">SMS</button>
        </div>
        
    </div>
    
   

    
    <div class="col-lg-6 shadow p-3 mb-4 mx-4" style={{backgroundColor: "white",borderRadius: "10px"}}>
        <div class="row m-0">
            <div class="col-lg-3">
                <p class="m-0">Key Skills</p>
                <p class="keySkillsPara">{blog.search_skills}</p>
                <p class="m-0">Highest Graduation</p>
                <p class="keySkillsPara">{blog.search_graduation}</p>
                <p class="m-0">Current Location</p>
                <p class="keySkillsPara">{blog.search_location}</p>
                <p class="m-0">Age</p>
                <p class="keySkillsPara">{blog.search_age}</p>
                <p class="m-0">Date of Birth</p>
                <p class="keySkillsPara">{blog.search_dob}</p>
            </div>
            <div class="col-lg-3">
                <p class="m-0">Experience</p>
                <p class="keySkillsPara">{blog.search_experince}</p>
                <p class="m-0">Employment Type</p>
                <p class="keySkillsPara">{blog.search_type}</p>
                <p class="m-0">Preffered Location</p>
                <p class="keySkillsPara">{blog.search_prefferedlocation}</p>
                <p class="m-0">Gender</p>
                <p class="keySkillsPara">{blog.search_gender}</p>
                <p class="m-0">Address</p>
                <p class="keySkillsPara">{blog.search_address}</p>
                
            </div>
            <div class="col-lg-3">
               
                <p class="m-0">Designation</p>
                <p class="keySkillsPara">{blog.search_designation}</p>
                <p class="m-0">Department</p>
                <p class="keySkillsPara">{blog.search_department}</p>
                <p class="m-0">Expected CTC</p>
                <p class="keySkillsPara">{blog.search_expectedctc}</p>
                <p class="m-0">Marital Status</p>
                <p class="keySkillsPara">{blog.search_maritalstatus}</p>
                <p class="m-0">Languages Known</p>
                <p class="keySkillsPara">{blog.search_languages}</p>
            </div>
            <div class="col-lg-3">
                
                <p class="m-0">Desired Industry</p>
                <p class="keySkillsPara">{blog.search_industry}</p>
                <p class="m-0">Prefered Shift</p>
                <p class="keySkillsPara">{blog.search_shift}</p>
            </div>
        </div>
    </div>
   

    <div class="col-lg-1"></div>
</div>
















</section>  
</div>))}


{/* ..... */}

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

export default Search;