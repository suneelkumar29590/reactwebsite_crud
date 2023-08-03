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
      
             

         
      </Routes>
      
   




     </div>
  );
}

export default App;
