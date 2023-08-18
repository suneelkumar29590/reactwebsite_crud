import image from './pab bottom-logo (1).jpg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';



function Joblocation(){
    const elementRefs = {};
    
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredButtons, setFilteredButtons] = useState('');
  const [filter, setFilter] = useState([]);
   
 


  
  const allButtons = [
    'Adoni', 'Amaravati', 'Anantapur', 'Chandragiri', 'Chittoor',
    'Dowlaiswaram', 'Guntur', 'Eluru', 'Kadapa', 'Kakinada', 'Kurnool',
    'Machilipatnam', 'Visakhapatnam', 'Bhilai', 'Delhi', 'New Delhi',
    'Ahmadabad', 'Dwarka', 'Faridabad', 'Bilaspur', 'Shimla', ' Jammu',
    'Bengaluru', 'Bhopal', 'Gwalior', 'Ahmadnagar', 'Mumbai', 'Nagpur',
    'Imphal', 'Kohima', 'Bhubaneshwar', 'Koraput', 'Puri', 'Puducherry', 'Amritsar',
    'Chennai', 'Hyderabad', ' Nizamabad', 'Sangareddi', 'Warangal', 'Karimnagar', 'Mahbubnagar',
    'Khammam', 'Kolkata'
  ];

  const handleSearch = () => {
    const filtered = allButtons.filter(button =>
      button.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredButtons(filtered);
   

 
  };
  const handleButtonOnClick = (buttonName) => {
    // Handle the click event for each button here
    setFilter( `${buttonName}`);
    setSearchTerm(`${buttonName}`);
    if (elementRefs[buttonName]) {
        elementRefs[buttonName].style.display = 'none';
      }
    
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
                <a href='./joblocation' className='anchar'><button className="card shadow jobbutton bg-primary">Job By Location</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./jobcompany' className='anchar'> <button className="card shadow jobbutton ">Jobs By Company</button></a>
                </div>
                <div className="col-12 col-md-2">
                <a href='./jobcategory' className='anchar'><button className="card shadow jobbutton "> Jobs By Category</button></a>
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
                    <h5>Featured Jobs By Locations</h5>
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
                    <button className="buttonlocation card w-100">Adilabad</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Agra</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Nodia</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100 ">Ahmedabad</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Ahmedhanagar</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Aizawl</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Ajitgarh(Mohali)</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Ajmer</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Akola</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Alappuza</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Aligarh</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Alirajpur</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Allahabad</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Almora</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">alwar</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Ambala</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">AmbedkarNagar</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Amaravathi</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Amrelidistrict</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Amritsar</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bengaluru</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhopal</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhubaneshwar</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Ahmedabad</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Adilabad</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Agra</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bareilly</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhiwandi</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Borivli</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhavnagar</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bikaner</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bokaro</button>
                </div>
                

            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhayandar</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bilimora</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhatpara</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Belgaum</button>
                </div>
                
            </div>
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhagalpur</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bellary</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bhilwara</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Barddhaman</button>
                </div>
                

            </div>
            <div className="row mt-2 mt-2">
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bali</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bilaspur</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Bijapur</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="buttonlocation card w-100">Baranagar</button>
                </div>
                

            </div>

          </div> */}
          {/* {searchTerm &&
          <div>
          <p className='para616'>{filter} <button className='cross' onClick={handleButtonOnClick}>✖</button></p>
          <Link to="/browse"><button className='button618'>filter selected<i class="fas fa-search"></i></button></Link>
          </div>
          
          } */}
          <div className='container'>
            <div className='row'>
                <div className='col-md-5'></div>
            {searchTerm && 
            <div className='col-md-2' ref={el => elementRefs[allButtons.buttonName] = el}>
                <p className='para616'>{filter}   
                <button onClick={e =>handleButtonOnClick(e.target.value)} className='cross'>✖</button></p>
                 
                
                <Link to="/browse"><button className='button618'>filter selected<i class="fas fa-search"></i></button></Link>
            </div>
            }
             </div>    
          </div>

          

<div className="container mt-5">
     
     <div className="row mt-2">
       {filteredButtons.length === 0 ? (
         <p>No results found.</p>
       ) : (
         filteredButtons.map((button, index) => (
           <div className="col-12 col-md-3" key={index}>
             <button className="buttonlocation card w-100 mb-3" onClick={() => handleButtonOnClick(button)}>{button}</button>
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
export default Joblocation;