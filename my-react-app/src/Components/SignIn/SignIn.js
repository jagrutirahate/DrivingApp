import React, { useEffect, useRef } from 'react';
import './SignIn.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

  useEffect(() => {
    // Access DOM elements and attach event listeners when component is mounted
    const container = containerRef.current;
    const registerBtn = registerBtnRef.current;
    const loginBtn = loginBtnRef.current;

    const handleRegisterClick = () => {
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener('click', handleRegisterClick);
      loginBtn.addEventListener('click', handleLoginClick);
    }

    // Remove event listeners when component is unmounted
    return () => {
      if (registerBtn && loginBtn) {
        registerBtn.removeEventListener('click', handleRegisterClick);
        loginBtn.removeEventListener('click', handleLoginClick);
      }
    };
  }, []); // Empty dependency array ensures that this effect runs only once after mount

  return (
    <div className='mcontainer'>
      <div className="container" id="container" ref={containerRef}>
        {/* Sign Up Form */}
        <div className="form-container sign-up">
          <form>
            <h1 className='Ca'>Create Account</h1>
            <div className='social-icons'>
        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>

            
            <div className='inputBox'>
              <input type='text' name='' required='required'/>
              <span>NAME </span>
            </div>
            <div className='inputBox'>
              <input type='text' name='' required='required'/>
              <span>EMAIL </span>
            </div>

            <div className='inputBox'>
              <input type='password' name='' required='required'/>
              <span>PASSWORD </span>
            </div>
            
            <div className='inputBox'>
              <input type='password' name='' required='required'/>
              <span>CONFIRM PASSWORD </span>
            </div>
            <div className='signInBtn'> <button type="button">Sign Up</button></div>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form>
            <h1 className='Si'>Sign In</h1>
            <div className='social-icons'>
        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>

            <div className='inputBox'>
              <input type='text' name='' required='required'/>
              <span>EMAIL </span>
            </div>

            <div className='inputBox'>
              <input type='password' name='' required='required'/>
              <span>PASSWORD </span>
            </div>
            <a href="#"><u>Forget Password?</u></a>
           <div className='signInBtn'> <button type="button">Sign In</button></div>
          </form>
        </div>

        {/* Toggle Container */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enhance your experience by filling in your personal details</p>
              <button className="hidden" id="login" ref={loginBtnRef}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Learner's!</h1>
              <p>Sign up with your personal information to unlock all the features of the site</p>
              <button className="hidden" id="register" ref={registerBtnRef}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



