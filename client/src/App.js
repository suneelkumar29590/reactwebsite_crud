import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'; 




import Footer from './footer';
import Default from './default';
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








 


 




function App() {
  return (
    <div className="App">



      <Routes>
        <Route exact path = "/default" element ={<Default />}/>
        <Route exact path='/Login' element={<Login/>} />
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
       
        
       
        
        
        
       
       
       
      
        

         
      </Routes>
      
   




     </div>
  );
}

export default App;


