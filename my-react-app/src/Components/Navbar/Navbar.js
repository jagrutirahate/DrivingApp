
import React from 'react';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav>
      <a href="/home">Home</a>
      <a href="/signin">SignIn</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/contactus">Contact Us</a>
      <a href="/help">Help</a>
    </nav>
  );
};

export default Navbar;