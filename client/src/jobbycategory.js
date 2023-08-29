
import { useEffect, useState } from "react";
import axios from "axios";
import image from "./pab bottom-logo (1).jpg";
import { Link, Navigate, useParams,useNavigate } from "react-router-dom";
function Joblocation() {
  const [blogslist, setblogslist] = useState([]);
  const [selectedblog, setselectedblog] = useState(null);
  const [showContent, setShowContent] = useState(true);
  const [selectloc, setselectloc] = useState([]);

  const navigate=useNavigate();

  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:5016/allbrowse";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkNWQ3NGNhNmZmZDVkNWMyMjVkNmJiIiwiaWF0IjoxNjkxNzQ0NTI3LCJleHAiOjE3Mjc3NDQ1Mjd9.jkgWOgy8JfmY2upTDUaxtaEPvGLSFfCxkFMOY2TFDXk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const onclickblogdetails = async (blogid) => {
    // const api=`https://pab-server.onrender.com/api/jobs/${blogid}`
    // const response=await axios.get(api);
    const selectedJobDetails = blogslist.find((each) => each._id === blogid);
    console.log(selectedJobDetails);
    setselectedblog(selectedJobDetails);
    setShowContent(false);
  };

  const handlelocation = (city) => {
    if (selectloc.includes(city)) {
      setselectloc((blogslist) => blogslist.filter((item) => item !== city));
    } else {
      setselectloc((blogslist) => [...blogslist, city]);
      
    }

  };
  const removeItem =(_id)=>{
    const updatedItem=[...selectloc];
    updatedItem.splice(_id,1);
    setselectloc(updatedItem)
  }
const handleclick=()=>{
    navigate("/browse",{state:{location:selectloc}})
}


  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark card shadow fixed-top">
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
                <a class="nav-link" href="" style={{ color: "black" }}>
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
                  style={{ color: "blue" }}
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
                    sty
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ............ */}

      <div className="container buttoncontainer">
        <div className="row">
          <div className="col-12 col-md-2  ">
            <a href="./jobs" className="anchar">
              <button className="card shadow jobbutton ">All Jobs</button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="./joblocation" className="anchar">
              <button className="card shadow jobbutton ">
                Job By Location
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="./jobcompany" className="anchar">
              {" "}
              <button
                className="card shadow jobbutton"
                
              >
                Jobs By Company
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="./jobcategory" className="anchar">
              <button className="card shadow jobbutton " style={{ backgroundColor: "#2c0264", color: "white" }}>
                {" "}
                Jobs By Category
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="./jobdesignation" className="anchar">
              <button className="card shadow jobbutton ">
                Jobs By Designation
              </button>
            </a>
          </div>
          <div className="col-12 col-md-2">
            <a href="./jobskills" className="anchar">
              <button className="card shadow jobbutton ">Jobs By Skills</button>
            </a>
          </div>
        </div>
      </div>
      {/* .... */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Featured Jobs By Companies</h5>
          </div>
          <div className="col-12 col-md-5"></div>

          <div className="col-12 col-md-3">
            <div class="input-group">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="search"
                />
              </div>
              <button
                type="button"
                class=""
                style={{ backgroundColor: "#2c0264", color: "white" }}
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ......... */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-12 d-flex">
            <button className="buttonalpha card shadow">A</button>
            <button className="buttonalpha card shadow">B</button>
            <button className="buttonalpha card shadow">C</button>
            <button className="buttonalpha card shadow">D</button>
            <button className="buttonalpha card shadow">E</button>
            <button className="buttonalpha card shadow">F</button>
            <button className="buttonalpha card shadow">G</button>
            <button className="buttonalpha card shadow">H</button>
            <button className="buttonalpha card shadow">I</button>
            <button className="buttonalpha card shadow">J</button>
            <button className="buttonalpha card shadow">K</button>
            <button className="buttonalpha card shadow">L</button>
            <button className="buttonalpha card shadow">M</button>
            <button className="buttonalpha card shadow">N</button>
            <button className="buttonalpha card shadow">O</button>
            <button className="buttonalpha card shadow">P</button>
            <button className="buttonalpha card shadow">Q</button>
            <button className="buttonalpha card shadow">R</button>
            <button className="buttonalpha card shadow">S</button>
            <button className="buttonalpha card shadow">T</button>
            <button className="buttonalpha card shadow">U</button>
          </div>
          <div className="col-12 col-md-12 d-flex">
            <button className="buttonalpha card shadow">V</button>
            <button className="buttonalpha card shadow">W</button>
            <button className="buttonalpha card shadow">X</button>
            <button className="buttonalpha card shadow">Y</button>
            <button className="buttonalpha card shadow">Z</button>
          </div>
        </div>
      </div>
      {/* .. */}
      <div className="container mt-5">
        {/* <div className="row">
          <div className="col-md-5"></div>
          {selectedblog && (
            <div className="col-md-2">
              <p className="para616">
                {selectedblog.companyname}{" "}
                <button onClick={onclickblogdetails} className="cross">
                  ✖
                </button>
              </p>

              <Link to="/browse">
                
              </Link>
            </div>
          )}
        </div> */}
        <div className="row">
          <div className="col-md-4"></div>
            {selectloc.length >0 ?(
                selectloc.map((location,index)=>(
                  
                    <div className="col-md-2" key={index}>
                        <h6 className="para616">{location}</h6>
                       
                        </div>
                       
                        
                ) )
            ) :(
                <div className="notfound"></div>
            )

            }
           
            {
              selectloc.length > 0 ?(
                <div className="row">
                <div className="col-md-5"></div>
                <div onClick={handleclick} className="col-md-3">
                  <h6 className="button618">filter selected<i class="fas fa-search"></i></h6>
                </div>
                </div>
              ):(
                <div className="notfound"></div>
              )
            }
            
            
        </div>
      </div>
      <div className="mt-5">
        {blogslist.map((blog) => (
          <div key={blog._id}
            className="container"
            onClick={(e) => handlelocation(blog.role)}
          >
            <div className="row">
              <div className="col-12 col-md-3 mb-3">
                <button className="buttonlocation card w-100">
                  {blog.role}
                </button>
              </div>
              <div className="col-12 col-md-3 ">
                <button className="buttonlocation card w-100">
                  {blog.role}
                </button>
              </div>
              <div className="col-12 col-md-3 ">
                <button className="buttonlocation card w-100">
                  {blog.role}
                </button>
              </div>
              <div className="col-12 col-md-3 ">
                <button className="buttonlocation card w-100">
                  {blog.role}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* .. */}

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

export default Joblocation;

