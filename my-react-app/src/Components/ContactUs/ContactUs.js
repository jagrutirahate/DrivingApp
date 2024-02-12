import React, { Component } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
class ContactUs extends Component {
  render() {
    return (
      <div className='contactContainer'>
       <div className='contact-left'>      
          <h1 className='Heading1'>Contact Us</h1>
          <div className='contactinfo'>
            
          
            <ul>
              <li><span >Address : <div className='Info'>H- block Autocluster, Pimpri, <br></br>Pune-
411019</div></span> 
              </li>
              <li><span>Contact : <div className='Info'>+919325262490</div></span> 
               </li> 
                     
              </ul> 
              <div className='Social-icons'>
  {/* <h4>Connect with us</h4> */}
  <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
  <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
  <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
  <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
</div>      
                
            </div>
       </div>
       <div className='contact-right'>
       <div className='contactForm'>
          <form>           
            <div className='inputBox'>
              <input type='text' name='' required='required'/>
              <span>NAME </span>
            </div>
            <div className='inputBox'>
              <input type='text' name='' required='required'/>
              <span>EMAIL </span>
            </div>
            <div className='inputBox'>
              <input type='text' name='' required='required'/>
              <span>CONTACT NO </span>
            </div>
            <div className='inputBox'>
              <textarea required></textarea>
              <span>MESSAGE </span>
            </div>
            <button type="submit"><b>SEND</b> </button>
          </form>
          </div>
          </div>
          <div className='clear'></div>
      </div>
    );
  }
}
export default ContactUs;
