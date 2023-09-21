import { useEffect, useState } from 'react';
import axios from 'axios';
import image from './pab bottom-logo (1).jpg';

const Applied = () => {
  const [blogslist, setBlogslist] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5016/allapplied");
      setBlogslist(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  {/* ........ */}
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
          
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontSize: "200px"}}></i>
                    <a href="/profile"><button class="p-2 mb-1 profilebutton w-100">Candidate Profile</button></a>
                    <a href="/resume"><button class="p-2 mb-1 profilebutton w-100">Resume</button></a>
                    <a href=""> <button class="p-2 mb-1 profilebutton w-100 active h-25  bg-primary text-white">Applied Jobs</button></a>
                        <a href=""><button class="p-2 mb-1 profilebutton w-100">Job Alerts</button></a>
                            <a href="/saved"><button class="p-2 mb-1 profilebutton w-100">Saved Jobs</button></a>
                                <a href="/change"><button class="p-2 mb-1 profilebutton w-100">Change Password</button></a>
                                    <a href="/default"><button class="p-2 mb-1 profilebutton w-100">Log Out</button></a>
                
          </div>
        </div>

        <div className="col-md-8">
          <div className="card p-3">
            <h6>2 Applied Jobs Found</h6>
            <hr />
            <ul>
              {blogslist.map((blog) => (
                <div key={blog._id} className="card p-3 mb-3">
                  <div className="d-flex flex-row">
                    <div className="d-flex flex-row col-md-6" style={{ borderRight: "2px solid black", height: "80px" }}>
                      <img src={blog.img}/>
                      <div className="p-3">
                        <h5 className="appliedh2">{blog.companyname}</h5>
                        <h6 className="small">{blog.role}</h6>
                        <p className="small">Contact: {blog.contactnumber}</p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <h6 style={{ fontWeight: "bold" }} className='px-4'>{blog.salary}</h6>
                      <i className="fa-solid fa-location-dot p-3"></i><span className="small">{blog.state}</span>
                      <i className="fa-solid fa-location-dot p-3"></i><span className="small">{blog.country}</span><br />
                      <i className="fa-solid fa-briefcase p-3"></i><span className="small">{blog.experience}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex flex-row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                      <p className="small">Email: {blog.email}</p>
                      <p className="small">Whatsapp: {blog.contactnumber}</p>
                      <p className="small">job applicants: {blog.no_of_applications}</p>
                    </div>
                    <div className="col-md-6">
                      <button className="domain p-2 w-75 mt-3">Applied</button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
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
  );
};

export default Applied;
