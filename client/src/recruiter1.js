import { Link } from "react-router-dom";


const Recruiter1=()=>{
    return(
      <div className="container mb-5 mt-5">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="cardlogin shadow ">
              <div className="col-12 text-center">
              <h2>Create an account</h2>
              <p className="parastart">it only takes a couple of minutes to get started!</p>
              </div>
              <div className=" text-center reactbtngroup">
              <a href="./Login"><button className="w-25 reactloginbtn shadow mx-1">Login</button></a>
                <button className="w-25 reactloginbtn shadow ">Signup<i class="fa-solid fa-circle-check "></i></button>
              </div>
              <div className=" text-center reactbtngroup mt-3 mb-3">
                
              <a href="./Default"><button className="w-25 reactloginbtn1 shadow">Job seekers<input type="radio" name="type"></input></button></a>
              <a href="./Recruiter1"> <button className="w-25 reactloginbtn shadow">Recruiters<input type="radio" name="type"></input></button></a>
              </div>
              <div class="form p-5">
                        <label for="" id="fullname" class="loginlabel">Company Name</label>
                        <input type="text" class=" form-control" placeholder="enter your full name" id="input"/>
                        <label for=""  class="loginlabel">Email ID</label>
                        <input type="email" class="form-control " placeholder="enter your Email ID" id="input"/>
                        <label for=""  class="loginlabel">Password</label>
                        <input type="password" class="form-control " placeholder="minimum 6 charactres" id="input"/>
                        <label for=""  class="loginlabel">Mobile Number</label><br/>
                        <div class="d-flex flex-row">
                            <select name="" id="input" className="mx-1">
                                <option value="" >+91</option>
                            </select>

                            <input type="text" class="form-control " placeholder="Enter your mobile number" id="input"/>
                        </div>

                        <i class="fa-solid fa-square-check greenbox defaulticon"></i>
                        <label for="">I would like to get latest updates on whatsapp</label>

                        <p class="smallpara">By clicking Register,you agree to the terms and conditions & privacy  pabjobs.com
                        </p>
                        <button class="Registerbtn">Register Now</button>
                    </div>
            </div>

          </div>
          <div className="col-12 col-md-1"></div>
          <div class=" col-12 col-lg-4 ">
                <div class="card card1 shadow" >
                    <img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg"
                        width="400px" height="300px" alt="" id="image"/>
                </div>
                <div class="card1para">
                    <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Build your profile and let
                        recruitrs find yon</span> <br/>
                    <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Get job posting delivered right
                        to your email</span> <br/>
                    <i class="fa-solid fa-circle-check  jan"></i> <span class="iconpara">Find a job and grow your
                        career</span>

                </div>
            </div>




        </div>
      </div>
    )
}
export default Recruiter1;