import React from 'react';
import { FaFacebookF, FaTwitter,FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
      <div className="main-footer">
      <div className="f-container">
          <div className="f-box">
            <h4>Besnik</h4>
            <p className="list-unstyled">
              financial transaction remotely using a mobile device such as a smart phone or tablet
            </p>
            <span><a href='#'><FaFacebookF/></a></span>
            &nbsp;&nbsp;&nbsp;
            <span> <a href='#'><FaTwitter/></a></span>
            &nbsp;&nbsp;&nbsp;
            <span> <a href='#'><FaLinkedinIn/></a></span>
          </div>
          <div className="f-box">
            <h4>Besnik</h4>
            <ui className="list-unstyled">
              <li>About</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>How it Works</li>
              <li>Contact Us</li>

            </ui>
          </div>
          <div className="f-box">
            <h4>Support</h4>
            <ui className="list-unstyled">
              <li>Support Career</li>
              <li>24h Service</li>
              <li>Quick Chat</li>
            </ui>
          </div>
          <div className="f-box">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li>WhatsApp</li>
              <li>Support 24</li>
            </ui>
          </div>
  
        </div>
        <div>
          <p>
          <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Copyright &copy;{new Date().getFullYear()} | All rights reserved |
            Terms Of Service | By Styleout 
          </p>
        </div>
      </div>  
    
      )
}

export default Footer;
