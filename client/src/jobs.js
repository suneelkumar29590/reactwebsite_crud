import Joblocation from './jobbylocation';
import image from './pab bottom-logo (1).jpg';
import { Link } from 'react-router-dom';

function Jobs(){
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
                        <a class="nav-link" href="/home" style={{color:"blue"}}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="/browse" style={{color:"black"}}>Browse Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="" style={{color:"black"}}>Jobs</a>
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

    {/* ........... */}

      
    <div class="thirdContainer d-flex   p-4">
        <div class="col-2">

        </div>
        <div class=" d-flex  parent-container">
            <div class="fixed-container d-flex flex-column p-3 col-3 categoryBtnContainer">
                <button class=" categoryButton12 m-1 ">All Jobs</button>
               <Link to="/Joblocation"><button class="categoryBtn12 m-1 w-100"> Jobs By location</button></Link>
               <Link to="/Jobcompany"><button class="categoryBtn12 m-1 w-100"> Jobs By Company</button></Link>
               <Link to="/Jobcategory"><button class="categoryBtn12 m-1 w-100"> Jobs By Category</button></Link>
               <Link to="/Jobdesignation"><button class="categoryBtn12 m-1 w-100"> Jobs By Designation</button></Link>
               <Link to="/Jobskills"><button class="categoryBtn12 m-1 w-100"> Jobs By Skills</button></Link>
            </div>
            {/* <!-- <div class="p-2 m-4 col-8 align-items-center">
                <div class="row">

                
                    <div>
                         <span class="categoryTitle">Job by Locations</span>
                    </div>
                   
                    <div class="row ">
                        <button class="locationBtn  col-3 m-2"> <img src="./images/charminar (1).png" class="w-25 " alt=""> Hyderabad</button>
                        <button class="locationBtn locationBtn  w-100 p-2 m-1 "> <img src="./images/gateway-of-india.png" class="w-25 " alt="">Mumbai</button>
                        <button class="locationBtn locationBtn  w-100 p-2 m-1 "> <img src="./images/chennai-central-railway-station.png" class="w-25 " alt=""> Chennai</button>
                        <button class="locationBtn locationBtn  w-100 p-2 m-1 "> <img src="./images/surat-municipal-corporation.png" class="w-25 " alt=""> Pune</button>
                        <button class="locationBtn locationBtn  w-100 p-2 m-1 "> <img src="./images/vidhana-soudha.png" class="w-25 " alt=""> Bengaluru</button>
                        <button class="locationBtn locationBtn  w-100 p-2 m-1 "> <img src="./images/india-gate.png" class="w-25 " alt=""> Delhi</button>
                    </div>
                    <div class=" textContent align-items-end ">
                        <div>

                        </div>
                        <div>
                            <a href=""><i class="fa-solid fa-arrow-right-long"></i> View All locations</a>
                        </div>
                       
                    </div>
                </div>
            </div> --> */}
            <div class="col-md-8 p-4 allJobsContainer">
                <div class="d-flex flex row ">
                    <div class="">
                        <h6 class="indus">Jobs By Locations</h6>
                    </div>
                    <div class="row">
                        <div class="col-md p-1 m-1">
                            {/* <!-- <button class="indBtn w-100 p-2 m-1"> ABAP Consultant</button> --> */}
                            <button class="locationBtn12  w-100 p-1 m-1"> <img src="https://pbs.twimg.com/media/CQLNvOVVEAEOVY8.png"
                        alt="" width="50px" height="30px" className="px-2"/> Hyderabad</button>
                        </div>
                        <div class="col-md p-1 m-1 ">
                            <button class="locationBtn12 locationBtn  w-100 p-1 m-1 "><img src="https://media.istockphoto.com/id/510318234/vector/india-gate-vector-sketch-illustration-war-memorial-new-delhi-india.jpg?s=612x612&w=0&k=20&c=1qR8nBQ4tr_m8ZYbWGZQBwhGslykrtTLfCjn5W5LtSg="
                        alt="" width="50px" height="30px" className="px-2"/>Mumbai</button>
                        </div>
                        <div class="col-md p-1 m-1">
                            <button class="locationBtn12 locationBtn  w-100 p-1 m-1 "> <img src="https://cdn.dribbble.com/users/460946/screenshots/3009895/madrascentral.jpg"
                        alt="" width="50px" height="30px" className="px-2"/> Chennai</button>
                        </div>
                      
                    </div>
                    <div class="row">
                        <div class="col-md p-1 m-1">
                            <button class="locationBtn12 locationBtn  w-100 p-1 m-1 "><img src="https://4.bp.blogspot.com/-HGizM-_b0Hg/WSWHqWJfm2I/AAAAAAAAAqU/RcdAdLTSViotovXVOJcJNe3odAlhRSv0gCLcB/s1600/L-112.JPG"
                        alt="" width="50px" height="30px" className="px-2"/> Pune</button>
                        </div>
                        <div class="col-md p-1 m-1">
                            <button class="locationBtn12 locationBtn  w-100 p-1 m-1 "><img src="https://www.juliusbaer.com/fileadmin/_processed_/d/e/csm_location-bangalore_1eb4596c40.png"
                        alt="" width="50px" height="30px" className="px-2"/> Bengaluru</button>
                        </div>
                        <div class="col-md p-1 m-1">
                            <button class="locationBtn12 locationBtn  w-100 p-1 m-1 "><img src="https://media.istockphoto.com/id/510318234/vector/india-gate-vector-sketch-illustration-war-memorial-new-delhi-india.jpg?s=612x612&w=0&k=20&c=1qR8nBQ4tr_m8ZYbWGZQBwhGslykrtTLfCjn5W5LtSg="
                        alt="" width="50px" height="30px" className="px-2"/> Delhi</button>
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
                <hr/>
                <section>
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-md-12">
                                <div class="d-flex flex-column">
                                    <div>
                                        <h3 class="indus">Jobs By Companies</h3>
                                    </div>
                                    <marquee behavior="scroll" scrollamount="4" direction="left" class="m-2">
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
                                            <div class="logo">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvsuEQaCvXWYaEcoVKx6ODh2Q8BznHCDHX6fc2BVa-Q&s" class="w-50" alt="Company5"/>
                                            </div>
                                            <div class="logo">
                                            <img src="https://w7.pngwing.com/pngs/507/564/png-transparent-abb-group-solar-inverter-corporation-company-egypt-national-football-angle-company-text.png" class="w-50" alt="Company6"/>
                                            </div>
                                            <div class="logo">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvsuEQaCvXWYaEcoVKx6ODh2Q8BznHCDHX6fc2BVa-Q&s" class="w-50" alt="Company5"/>
                                              </div>
                                              <div class="logo">
                                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvsuEQaCvXWYaEcoVKx6ODh2Q8BznHCDHX6fc2BVa-Q&s" class="w-50" alt="Company5"/>
                                              </div>
                                              <div class="logo">
                                              <img src="https://cdn.imgbin.com/15/20/23/imgbin-capgemini-logo-business-insuretech-connect-cfo-rising-europe-summit-others-capgemini-logo-Yy2qm7xHfwk9vBN3cYREqKiKQ.jpg" class="w-50" alt="Company 3"/>
                                                </div>
                                                <div class="logo">
                                                <img src="https://companieslogo.com/img/orig/TCS.NS_BIG-89c50e39.png?t=1631949260" class="w-50" alt="Company 2"/>
                                                </div>
                                                <div class="logo">
                                                <img src="https://w7.pngwing.com/pngs/326/725/png-transparent-harman-international-industries-industry-harman-kardon-harman-professional-solutions-samsung-electronics-samsung-blue-text-logo-thumbnail.png" class="w-50" alt="Company 1"/>
                                                  </div>
                                                  <div class="logo">
                                                  <img src="https://w7.pngwing.com/pngs/507/564/png-transparent-abb-group-solar-inverter-corporation-company-egypt-national-football-angle-company-text.png" class="w-50" alt="Company6"/>
                                                  </div>
      

                                          
                                          
                                      </marquee>
                                    
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
                    </div>
                </section>
                <hr/>
                
                    <div class="d-flex flex row">
                        <div>
                            <h3 class="indus">Job By Category</h3>
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                           
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                          
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>

                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
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
                    <hr/>

                    <div class="d-flex flex row">
                        <div>
                            <h3 class="indus">Job By Designation</h3>
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                           
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                           
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>

                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
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
                    <hr/>

                    <div class="d-flex flex row">
                        <div>
                            <h3 class="indus">Job By Skills</h3>
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                          
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                           
                        </div>
                        <div class="row">
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>

                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
                            </div>
                            <div class="col-md p-1 m-1">
                                <button class="locationBtn12 w-100 p-2 m-1"> <i class="fa-solid fa-plane-departure p-2"></i> Airline</button>
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
        </div>
    </div>

    
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
export default Jobs;