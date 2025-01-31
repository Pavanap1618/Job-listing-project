/* eslint-disable no-unused-vars */
import React from 'react';


import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="logo1">Sklassics</h2>
          <p>
            Est class vel si sit orci rutrum at morbi commodo pellentesque.
            Faucibus sociosqu suspendisse integer id justo enim letius eleifend
            volutpat suscipit consectetur.
          </p>
          <div className="social">
          <img src="	https://cdn-icons-png.flaticon.com/128/3955/3955013.png" alt="Facebook" className="icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="Twitter" className="icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="YouTube" className="icon" />
            <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="YouTube" className="icon" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Full Time</li>
            <li>Part Time</li>
            <li>Freelance</li>
            <li>Internship</li>
            <li>Work From Home</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Leadership</li>
            <li>Careers</li>
            <li>News & Article</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Get exclusive deals by signing up to our Newsletter.</p>
          <input type="email" className='emails' placeholder="Email" /><br/>
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 Sklassics, All rights reserved. Powered by NVIDIA.</p>
        <div className="footer-links">
          <a href="#">Term of use</a> | <a href="#">Privacy policy</a> | <a href="#">Cookie policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
