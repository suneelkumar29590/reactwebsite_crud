import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';



import Footer from './footer';
import Default from './default';

import Login from './login';

import Recruiter1 from './recruiter1';
import Home from './home'




function App() {
  return (
    <div className="App">



      <Routes>
        <Route exact path = "/Default" element ={<Default />}/>
        
        
        <Route exact path='/Login' element={<Login/>} />
       
        
      
        <Route exact path = "/Recruiter1" element ={<Recruiter1 />}/>
        <Route exact path = "/home" element ={<Home />}/>
             

         
      </Routes>
      
   




     </div>
  );
}

export default App;
