import {useEffect, useState} from 'react';
import axios from 'axios';
import image from './pab bottom-logo (1).jpg';
import { Link,useParams } from "react-router-dom";





function Browse(){
    const params=useParams();
const [blogslist, setblogslist] = useState([]);
const [selectedblog, setselectedblog]= useState(null);
const {cities,skillsets}=(params);

useEffect(()=>{
  fetchblogs()
},[])

const fetchblogs= async ()=>{
  const api= "https://pab-server.onrender.com/api/jobs";
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s';
    try {
        const response =await axios.get(api, {
            headers: {
               Authorization: `Bearer ${authToken}`
            }
        }) ;
         setblogslist(response.data);
    } catch (error) {
         console.error("Error fetching blogs:", error);
    }
};



const onclickblogdetails=async(blogid)=>{
  // const api=`https://pab-server.onrender.com/api/jobs/${blogid}`
  // const response=await axios.get(api);
 const selectedJobDetails =  blogslist.find((each)=>each._id === blogid)
  console.log(selectedJobDetails)
  setselectedblog(selectedJobDetails)

    


}

console.log(blogslist)
console.log(selectedblog);




  return(
    <div>
      {/* ... */}
      
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
                        <a class="nav-link" href="/home" style={{color:"blue"}}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="/browse" style={{color:"black"}}>Browse Jobs</a>
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
    {/* ............ */}

    
<div class="text-center align-items-center justify-content-center secondContainer p-4">
        <span class="">Home {">"} Jobs</span>
        <div class="text-center align-items-center justify-content-center d-flex row m-2">
            <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
                <div class="">
                    <i class="fa-solid fa-magnifying-glass p-3"></i>
                    <input type="text" placeholder="Job title skills or company " class=" p-1 searchBox "/>
                </div>
                <div>
                    <i class="fa-solid fa-sort-down p-2 "></i>
                </div>
            </div>
            <div class="d-flex p-1 align-items-center seacrhMainContainer m-2 col-md-4">
                <div class="">
                    <i class="fa-solid fa-location-dot p-3"></i>
                    <input type="text" placeholder="City, Province or region " class=" p-1 searchBox "/>
                </div>
                <div>
                    <i class="fa-solid fa-sort-down p-2 "></i>
                </div>
            </div>


        </div>
        <button class=" registerButton11">Search</button>

    </div>
    {/* .............. */}

    <section class="container">
        <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-lg-11">
                <div class="d-flex flex-row row">
                    
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle location21" data-bs-toggle="dropdown"
                                id="browseItem">Experience</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">0 years</a></li>
                                <li><a class="dropdown-item" href="#">1 year</a></li>
                                <li><a class="dropdown-item" href="#">2 year</a></li>
                                <li><a class="dropdown-item" href="#">3 year</a></li>
                                <li><a class="dropdown-item" href="#">4 year</a></li>


                            </ul>
                            </div>
                    </li>
                    
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle location21" data-bs-toggle="dropdown"
                                id="browseItem">Location</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Hyderabad</a></li>
                                <li><a class="dropdown-item" href="#">Bengaluru</a></li>
                                <li><a class="dropdown-item" href="#">Chennai</a></li>
                                <li><a class="dropdown-item" href="#">Tirupati</a></li>
                                <li><a class="dropdown-item" href="#">Mumbai</a></li>


                            </ul>
                            </div>
                    </li>
                   
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle location21" data-bs-toggle="dropdown"
                                id="browseItem">Salary</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">2.5-3 LPA</a></li>
                                <li><a class="dropdown-item" href="#">3.5-4 LPA</a></li>
                                <li><a class="dropdown-item" href="#">4.5-7 LPA</a></li>
                                <li><a class="dropdown-item" href="#">7.5-10 LPA</a></li>
                                <li><a class="dropdown-item" href="#">10.5-15 LPA</a></li>


                            </ul>
                            </div>
                    </li>
                   
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle indusrty" data-bs-toggle="dropdown"
                                id="browseItem">Industry</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Manufacturing</a></li>
                                <li><a class="dropdown-item" href="#">Construction</a></li>
                                <li><a class="dropdown-item" href="#">IT</a></li>
                                <li><a class="dropdown-item" href="#">Transport</a></li>
                                <li><a class="dropdown-item" href="#">Food industry</a></li>


                            </ul>
                            </div>
                    </li>
                    
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle indusrty" data-bs-toggle="dropdown"
                                id="browseItem">Destignation</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Chief Customer Officer</a></li>
                                <li><a class="dropdown-item" href="#">Chief Financial Officer</a></li>
                                <li><a class="dropdown-item" href="#">Chief Information Officer</a></li>
                                <li><a class="dropdown-item" href="#">Chief Human Resources Officer</a></li>
                                <li><a class="dropdown-item" href="#">Chief Product Officer</a></li>


                            </ul>
                            </div>
                    </li>
                    
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle indusrty" data-bs-toggle="dropdown"
                                id="browseItem">Education</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Any Postgraduate</a></li>
                                <li><a class="dropdown-item" href="#">Any Graduate</a></li>
                                <li><a class="dropdown-item" href="#">MBA/PGDM </a></li>
                                <li><a class="dropdown-item" href="#">M.Pharma </a></li>
                                <li><a class="dropdown-item" href="#">MBBS </a></li>
                                <li><a class="dropdown-item" href="#">Diploma </a></li>
                                <li><a class="dropdown-item" href="#">Medical-MS/MD </a></li>

                            </ul>
                            </div>
                    </li>
                   
                    <li class="col-md-3 col-lg nav-item">
                        <div>
                            <button class="dropdown-toggle indusrty" data-bs-toggle="dropdown"
                                id="browseItem">Skills</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Core Java</a></li>
                                <li><a class="dropdown-item" href="#">Dot Net</a></li>
                                <li><a class="dropdown-item" href="#">Python</a></li>
                                <li><a class="dropdown-item" href="#">Testing</a></li>
                                <li><a class="dropdown-item" href="#">AWS</a></li>
                                <li><a class="dropdown-item" href="#">Advance Java</a></li>
                                <li><a class="dropdown-item" href="#">Frames</a></li>

                            </ul>
                            </div>
                    </li>
                </div>
            </div>
           

        </div>
       

    </section>

    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
           
        </div>
        <ul className="col-12 col-md-4">
            {blogslist.map((blog)=>
              <div className={`card mb-3 p-2 select shadow ${selectedblog && selectedblog.id === blog._id ? "selected":''}`}
              onClick={((e)=>onclickblogdetails(blog._id))}>

            <div className='d-flex'> 
              <div className='col-6'> 
          <h5>{blog.title}</h5>
          <p>Angel Broking</p>
          </div> 
          <p className='col-2'></p>
          <p className='col-4'>{blog.salary}</p>
          </div> <br></br>
          <div className=''>
          <p className='para1'>{blog.jobType}</p>
          <p>{blog.cities.length > 1 ? 
             blog.cities.map(cities=>
                               <li className="cities">
                                    {cities}
                               </li> )
                               :blog.cities}</p>
          <p className='para1'>{blog.experience}</p>
          </div>
          <p className='para'>published one day ago</p>

          

              </div>
            )}
        </ul>
       

<div className='col-md-8 card shadow cardheight h-50'>
        { selectedblog &&
        <div>
        <div className='card mt-4 mb-3'>
         <div className='d-flex p-2'>
          <div className='d-flex p-2 col-5 imagepara'>
            <div>
        <img src={selectedblog.recruiter.profileImage} className='image'/>
          </div>
          <div>
          <h5>{selectedblog.title}</h5>
          <p>Angel Broking<br/>show more jobs in this company</p>
          </div>
          </div>
         
          <div className=' col-5 p-3'>
            <h4>{selectedblog.salary}</h4>
            <p>{selectedblog.cities.length > 1 ? 
             selectedblog.cities.map(cities=>
                               <li className="cities">
                                    {cities}
                               </li> )
                               :selectedblog.cities}</p>
         
                     
                    
            <p>{selectedblog.experience}</p>
            


            
            


          </div>
          
          
          
         </div>
         <hr></hr>
         <div className='d-flex justify-content-between p-2 '>
         <div>
         <p>Posted few hours ago</p>
         <p>maxPositions:{selectedblog.maxPositions}</p>
         <p>{selectedblog.country}</p>
         </div>
         <button className='w-50 h-25 p-2 mt-5 button'>Apply Now</button>
        </div>
         </div>
         <div className='overflow-item'>
         <h3>job description</h3>
         <h6>Roles and Responsibillties</h6>
         <p>{selectedblog.description}</p>
        <h3>Skills & Responsibillties</h3>
        <p>{selectedblog.skillsets.length > 1 ? 
             selectedblog.skillsets.map(skillsets=>
                               <li className="cities">
                                    {skillsets}
                               </li> )
                               :selectedblog.skillsets}</p>
         
        </div>

        
         
         </div>

     
         
         
        
         
          
         }

  

        </div>

      </div>
       
    </div>

    {/* ... */}
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

export default Browse;