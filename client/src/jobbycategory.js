import image from './pab bottom-logo (1).jpg';
import React, { useState } from 'react';

function Jobcategory(){

     
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredButtons, setFilteredButtons] = useState([]);

  const allButtons = [
    'accounting', 'InteriorDesign', 'Bank', 'Consultant', 'Engineer',
    'ExportImport', 'ContentWriting', 'Merchandiser', 'Security', 'HR/Admin', 'Hotel',
    'Applicationprgm', 'ClientServer', 'Ecommerce', 'DBA', 'ERP',
    'VLSI', 'MainFrame', 'Middleware', 'Mobile', 'NetworkAdministrator', 'It industry',
    'Testing', 'Systemprogramming', 'EDP', 'Telecomsoftware', 'BPO', 'Legal',
    'Marketing', 'Packaging', 'Pharma', 'Maintenanse', 'Logistics', 'Logistics', 'Sales',
    'Secretary', 'Corparate', 'Site Engg', 'Film', 'Teacher', 'Airline', 'GraphicDesigner',
    'Shipping', 'Analytics'
  ];

  const handleSearch = () => {
    const filtered = allButtons.filter(button =>
      button.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredButtons(filtered);
  };
    return(
        <div>
     
<nav class="navbar navbar-expand-sm navbar-dark card shadow fixed-top">
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

            {/* ... */}
            <div className="container buttoncontainer">
            <div className="row">
                <div className="col-12 col-md-2  ">
                    <a href='./jobs' className='anchar'><button className="card shadow jobbutton ">All Jobs</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./joblocation' className='anchar'><button className="card shadow jobbutton ">Job By Location</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./jobcompany' className='anchar'> <button className="card shadow jobbutton ">Jobs By Company</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./jobcategory' className='anchar'><button className="card shadow jobbutton bg-primary"> Jobs By Category</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./jobdesignation' className='anchar'><button className="card shadow jobbutton ">Jobs By Designation</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./jobskills' className='anchar'><button className="card shadow jobbutton ">Jobs By Skills</button></a>
                </div>

            </div>

          </div>
          {/* .... */}
          <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5>Featured Jobs By Categories</h5>
                </div>
                <div className="col-12 col-md-5">
                    
                </div>

                <div className="col-12 col-md-3">
                <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="search"  value={searchTerm} onChange={e =>setSearchTerm(e.target.value)}/>
                    
                </div>
                <button type="button" class="btn btn-primary" onClick={handleSearch}>
                    <i class="fas fa-search"></i>
                </button>
                </div>
                </div>

            </div>

          </div>
          {/* .... */}
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
          {/* .... */}
          {/* <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">accounting</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">InteriorDesign</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bank</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100 ">ContentWriting</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Consultant</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Engineer</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">ExportImport</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Merchandiser</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Security</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">HR/Admin</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Hotel</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Applicationprgm</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">ClientServer</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">DBA</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Ecommerce</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">ERP</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">VLSI</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">MainFrame</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Middleware</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Mobile</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">NetworkAdministrator</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">It industry</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Testing</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Systemprogramming</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">EDP</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Telecomsoftware</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Telecom</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">BPO</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Legal</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Marketing</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Packaging</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Pharma</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Maintenanse</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Logistics</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Sales</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Secretary</button>
                </div>
                
            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Corparate</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Site Engg</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Film</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Teacher</button>
                </div>
                

            </div>
            <div className="row mt-2 mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Airline</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">GraphicDesigner</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Shipping</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Analytics</button>
                </div>
                

            </div>

          </div> */}
           <div className="container mt-5">
     
     <div className="row mt-2">
       {filteredButtons.length === 0 ? (
         <p>No results found.</p>
       ) : (
         filteredButtons.map((button, index) => (
           <div className="col-12 col-md-3" key={index}>
             <button className="buttonlocation card w-100 mb-3">{button}</button>
           </div>
         ))
       )}
     </div>
   </div>



          {/* ................ */}

          
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
export default Jobcategory;