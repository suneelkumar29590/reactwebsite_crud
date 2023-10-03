import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'; 




import Footer from './footer';
import Default from './default';
import Defaultrec from './default1';
import Login from './login';
import Home from './home'
import Jobs from './jobs'
import Payment from './payment';
import Profile from './profile';
import Browse from './browse';
import Joblocation from './jobbylocation';
import Jobcompany from './jobbycompany';
import Jobcategory from './jobbycategory';
import Jobdesignation from './jobsbydesignation';
import Jobskills from './jobbyskills';
import Resume from './resume';
import Applied from './applied';
import Saved from './savedjobs';
import Welocome from './welcome';
import Change from './changepassword';
import ForgotPassword from './fotgotpwd';
import Otp from './otp';
import Mblotp from './mobileotp';
import Newpassword from './newpassword';
import Loginone from './login1';
import Logincompany from './logincompany';
import Postajob from './postajob';
import Companyprofile from './companyprofile';
import Myjobs from './myjobs';
import Changecompany from './companychangepwd';
import Mblotpcompany from './companymobileotp';
import Otpcompany from './otpcompany';
import Newpasswordcompany from './newpasswordcompany';
import Logintwo from './login2';
import Dashboard from './dashboard';
import Byservices from './byservices';
import Jobposting from './jobposting';
import Combo from './combo';
import Search from './searchcandidates';








 


 




function App() {
  return (
    <div className="App">



      <Routes>
        <Route exact path = "/default" element ={<Default />}/>
        <Route exact path = "/defaultrec" element ={<Defaultrec />}/>
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Logincompany' element={<Logincompany/>} />
        <Route exact path = "/home" element ={<Home />}/>
        <Route exact path = "/jobs" element ={<Jobs />}/>
        <Route exact path = "/payment" element ={<Payment />}/>
        <Route exact path = "/profile" element ={<Profile />}/>
        <Route exact path = "/browse" element ={<Browse />}/>
        <Route exact path = "/joblocation" element ={<Joblocation />}/>
        <Route exact path = "/jobcompany" element ={<Jobcompany />}/>
        <Route exact path = "/jobcategory" element ={<Jobcategory />}/>
        <Route exact path = "/jobdesignation" element ={<Jobdesignation />}/>
        <Route exact path = "/jobskills" element ={<Jobskills />}/>
        <Route exact path = "/resume" element ={<Resume/>}/>
        <Route exact path='/apply' element={<Applied/>}/>
        <Route exact path='/saved' element={<Saved/>}/>
        <Route exact path='/' element={<Welocome/>}/>
        <Route exact path='/change' element={<Change />}/>
        <Route exact path='/forgot' element={<ForgotPassword />}/>
        <Route exact path='/otp' element={<Otp />}/>
        <Route exact path='/mblotp' element={<Mblotp />}/>
        <Route exact path='/newpassword' element={<Newpassword/>}/>
        <Route exact path='/newpasswordcompany' element={<Newpasswordcompany/>}/>
        <Route exact path='/loginone' element={<Loginone/>} />
        <Route exact path='/logintwo' element={<Logintwo/>} />
        <Route exact path='/postajob' element={<Postajob/>} />
        <Route exact path='/companyprofile' element={<Companyprofile/>} />
        <Route exact path='/myjobs' element={<Myjobs/>} />
        <Route exact path='/changecompanypwd' element={<Changecompany/>} />
        <Route exact path='/companymblotp' element={<Mblotpcompany/>} />
        <Route exact path='/otpcompany' element={<Otpcompany/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route exact path='/byservices' element={<Byservices/>} />
        <Route exact path='/jobposting' element={<Jobposting/>} />
        <Route exact path='/combo' element={<Combo/>} />
        <Route exact path='/search' element={<Search/>} />


       
        
       
        
        
        
       
       
       
      
        

         
      </Routes>
      
   




     </div>
  );
}

export default App;


