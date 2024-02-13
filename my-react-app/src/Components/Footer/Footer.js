import React, { Component } from "react";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="section">
          <h1>Terms and Policies</h1>
          <p>Privacy Policy</p>
          <p>Hyperlink Policy</p>
          <p>Website Policies</p>
          <p>Content Policies</p>
          <p>Contingency Plan</p>
        </div>

        <div className="section">
          <h2>About</h2>
          <p>About Us</p>
          <p>Sitemap</p>
          <p>Terms of Use</p>
          <p>MoRTH</p>
          <p>CMVR 1989</p>
        </div>

        <div className="section">
          <h3>Resources</h3>
          <p>Fees and User Charges</p>
          <p>Act, Rules and Policies</p>
          <p>Permit Fees and Period</p>
          <p>Manual</p>
          <p>Homologation</p>
        </div>

        <div className="section">
          <h4>Need Help</h4>
          <p>Contact Us</p>
          <p>Frequently Asked Questions</p>
          <p>Raise a concern</p>
          <p>Calendar</p>
          <p>Web Information Manager</p>
        </div>
      </div>
    );
  }
}

export default Footer;

