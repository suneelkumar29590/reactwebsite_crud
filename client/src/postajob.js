import image from "./pab bottom-logo (1).jpg";

const Postajob=()=>{
    return(
        <div>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-8">
                    <nav class="navbar navbar-expand-sm navbar-dark mb-3">
        <div class="container d-flex flex-row ">
            <img src={image} alt="" width="200px" class=""/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                style={{backgroundColor:"black"}}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav mx-5" style={{marginLeft:"auto"}}>
                    <li class="nav-item px-5">
                        <a class="nav-link " href="/dashboard" style={{color: "black"}}>Dashboard</a>
                    </li>
                    <li class="nav-item px-5">
                        <a class="nav-link dropdown-toggle" href="/search" style={{color: "black"}}>Search Candidates</a>
                    </li>
                    <li class="nav-item px-5">
                        <a class="nav-link dropdown-toggle" href="/byservices" style={{color: "black"}}>Buy services</a>
                    </li>
                    
                    <li class="nav-item ">
                        <i class="fa-solid fa-bell bellicon" style={{ color: "blue",fontSize:"20px" }}></i>
                    </li>
                    <li class="nav-item ">
                        <a href=""><i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon"
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
            

{/* ........ */}

<div className="container-fluid postback pt-5">
    <div className="row">
        <div className="col-md-2"></div>
    <div className="col-md-2">
          <div className="card shadow">
          
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontSize: "200px"}}></i>
                    <a href="/companyprofile"><button class="p-2 mb-1 profilebutton w-100">Company Profile</button></a>
                    <a href=""><button class="p-2 mb-1 profilebutton w-100" style={{backgroundColor:"#787182"}}>Post A Job</button></a>
                    <a href="/myjobs"> <button class="p-2 mb-1 profilebutton w-100 active h-25  ">My Jobs</button></a>
                                <a href="/changecompanypwd"><button class="p-2 mb-1 profilebutton w-100">Change Password</button></a>
                                    <a href="/logincompany"><button class="p-2 mb-1 profilebutton w-100">Log Out</button></a>
                
          </div>
        </div>
    
    <div className="col-md-6">
    <div class="card p-5 shadow">
                    <h5 class="profileh5">Post A Job</h5>
                    <hr/>   
                    <div class="d-flex flex-row my-2">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Job Title</label><br/>
                            <input type="text" name="" id="" placeholder="Enter job title"
                                class="form-control w-100 p-2 profileselect my-2" style={{border: "1px solid #cfc6dc"}}/>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Position Available</label><br/>
                            <input type="text" name="" id="" placeholder="enter no of positions"
                                class="form-control w-100 p-2 profileselect my-2" style={{border: "1px solid #cfc6dc"}}/>
                        </div>
                        
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Job type</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">enter job type</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Experience</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">select experience</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Maximum salary per annum</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">enter maximum salary</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Technical skills</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">press enter to add skills</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Region</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">Select your Region</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1"> locations</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">press enter to add cities</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row">
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Deadline</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 my-2">
                                <option value="">DD-MM-YYYY</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-5">
                            <label for="" class="profileh5 mb-1">Education</label><br/>
                            <select class="p-2 w-100 profileselect mb-2 v">
                                <option value="">Education required</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                  
                      
                            
                        
                       
                    
                    <h5 class="my-3">Job Discription</h5>
                    <textarea name="" id="" cols="5" rows="5" placeholder="Enter your Job Discription"  style={{border: "1px solid gray", borderRadius: "10px"}} class="mb-3 p-2 w-100" ></textarea>
                    
                    <div class="text-center">
                    <button class="w-25 mt-4 p-2 profilebutton9">Post A Job</button>
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

export default Postajob;