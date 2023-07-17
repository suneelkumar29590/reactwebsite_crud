import { Link } from "react-router-dom";


const Login=()=>{
    return(
      <div>
          
<div class="container mt-5 mb-5" >
    <div class="row">
        <div class="col-12 col-md-6">
            <div class="card shadow logincard1 p-4" style={{borderradius: "20px"}}>
            <div class="loginheader">
                <h2 class="loginheader1">Login</h2>
                <p class="loginpara">It only takes a couple of minutes to get started!</p>
            </div>
            <label for="" class="loginemail">Email ID</label>
            <input type="text" name="" id="" class="logininput" placeholder="enter your email ID" style={{border: "1px solid blue"}}/>
            <label for="" class="loginpassword">password</label>
           <input type="password" name="" id=""  class="logininput" placeholder="enter your password"/> <i class="fa-solid fa-eye eyeicon"></i>
            <a href=""><p class="loginforgot">Forgot password?</p></a>
            <a href="" class=""><button class="loginbutton w-100">Login</button></a>
            <a href=""><h6 class="loginh4">Login via OTP</h6></a>
           <a href="" className="signgoogle"> <span class="logingoogle"><button class="loginbutton2 shadow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVDA2e7vaSAfhljLBVppf2X0b0OuAxTQZqjYZcemxu6Umeik13cJI3HYISVRfEz9SMQA&usqp=CAU" alt="" class="googleimg"/>Sign in with Google</button></span></a>
        
            </div>
        </div>

        <div class="col-12 col-md-1">

        </div>
        <div class="col-12 col-md-4 d-none d-md-block" >
            <div class="card shadow logincard2" style={{borderradius: "20px"}}>
                <h2 class="pabjobheading">New to pabjobs?</h2>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt=""/>
            </div>
            <div class="loginspan1">
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Build your profile and let
                    recruitrs find yon</span> <br/>
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Get job posting delivered right
                    to your email</span> <br/>
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Find a job and grow your
                    career</span><br/>
                <i class="fa-solid fa-circle-check janlogin"></i> <span class="loginspan">Find a job and grow your
                        career</span>         
            </div>
            <a href=""><button class="Register shadow">Register for free</button></a>
        </div>
    </div>
</div>


           </div>
    )
}
export default Login;