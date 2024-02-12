import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './Components/ContactUs/ContactUs';
import SignIn from './Components/SignIn/SignIn';
import Navbar from './Components/Navbar/Navbar';
import Responses from './Components/Responses/Responses';

import Timeline from './Components/Timeline/Timeline';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
      
          
          <Routes>
  <Route path="/contactus" element={<ContactUs/>} />
  <Route path="/signin" element={<SignIn/>} />
  {/* <Route path="/Home" element={<Responses/>}/> */}
<Route path="/home" element={<Timeline/>}/>
{/* <Route path="/Home" element={<Footer/>}/> */}
          </Routes>
        </div>
      </Router>
    );
  }
}
const Home=()=><div>Home pages</div>

export default App;
