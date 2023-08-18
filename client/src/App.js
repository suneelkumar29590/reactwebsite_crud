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
import Browse12 from './Browser123';
import SinglePage from './API';
import AnotherPage from './API1';
 


 




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
        <Route exact path = "/B" element ={<Browse12 />}/>
        <Route exact path = "/apicode" element ={<SinglePage />}/>
        <Route exact path = "/apicode1" element ={<AnotherPage />}/>
       
      
        

         
      </Routes>
      
   




     </div>
  );
}

export default App;


