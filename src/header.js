import { Link } from "react-router-dom";
import image from './pab bottom-logo (1).jpg';



const Header=()=>{
    return(
      <div className="container">

<nav class="navbar navbar-expand-sm bg-white navbar-dark">
  <div class="container-fluid">
    <img src={image} className="headerimage"></img>
    <button class="navbar-toggler loginbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav login1">
        <li class="nav-item ">
          <a class="nav-link login2" href="#">LOGIN</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link login2" href="#">JOB SEEKER</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link login2" href="#">RECRUITER</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


           </div>
    )
}
export default Header;