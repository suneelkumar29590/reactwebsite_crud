import image from './pab bottom-logo (1).jpg';

function Profile(){
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
                        <a class="nav-link" href="/home" style={{color:"blue"}}>Home</a>
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
                       <a href="profile.html"> <i class=" fa-sharp fa-solid fa-circle-user dropdown-toggle bellicon" sty></i></a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
{/* ........... */}

<div class="container mt-5">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontsize: "200px"}}></i>
                    <a href="profile.html"><button class="p-2 mb-1 profilebutton w-100 active h-25  bg-primary text-white"
                            >Candidate Profile</button></a>
                    <a href="resume.html"><button class="p-2 mb-1 profilebutton w-100">Resume</button></a>
                    <a href="applied.html"> <button class="p-2 mb-1 profilebutton w-100"  >Applied Jobs</button></a>
                    <a href="jobalert.html"><button class="p-2 mb-1 profilebutton w-100"  >Job Alerts</button></a>
                    <a href="savedjobs.html"><button class="p-2 mb-1 profilebutton w-100">Saved Jobs</button></a>
                    <a href="changepassword.html"><button class="p-2 mb-1 profilebutton w-100">Change Password</button></a>
                    <a href="loginform.html"><button class="p-2 mb-1 profilebutton w-100">Log Out</button></a>
                </div>

            </div>
            <div class="col-md-8" >
                <div class="card p-3 shadow">
                    <h5 class="profileh5">Basic Information</h5>
                    <hr/>
                    <label for="" class="profilename mb-1">Name</label>
                    <input type="text" placeholder="Enter your full nmae" class="form-control w-75 mb-2"
                        style={{border: "1px solid blue"}}/>
                    <div>
                        <p class="profileh5">Experience</p>
                        <input type="radio"/>
                        <label for="" class="m-2">Fresher</label>
                        <input type="radio"/>
                        <label for="" class="m-2">Experienced</label>
                    </div>


                    <div class="d-flex flex-row">
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">State</label><br/>
                            <select class="p-2 w-100 profileselect mb-2"  style={{border: "1px solid blue"}}>
                                <option value="" >Select your state</option>
                            </select>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Current location</label><br/>
                            <select class="p-2 w-100 profileselect mb-2"  style={{border: "1px solid blue"}}>
                                <option value="">Select your state</option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Mobile Number</label><br/>
                            <input type="text" name="" id="" placeholder="Enter your mobile number"
                                class="form-control w-100 p-2 profileselect" style={{border: "1px solid blue"}}/>
                        </div>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-4">
                            <label for="" class="profileh5 mb-1">Email</label><br/>
                            <input type="text" name="" id="" placeholder="Enter your Email Address"
                                class="form-control w-100 p-2 profileselect " style={{border: "1px solid blue"}}/>
                        </div>
                    </div>
                    <button class="w-25 mt-4 p-2 profilebutton1">Update Details</button>
                </div>
            </div>
           


                    
                    



             
        </div>
    </div>

    {/* ..... */}

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

export default Profile;