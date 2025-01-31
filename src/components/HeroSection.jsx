/* eslint-disable no-unused-vars */
import React from "react";
import "./HeroSection.css";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
   
    
    <div className="hero-container">
      <div className="hero-content">
        <div className="htext">
          Find Your Perfect <br /> Dream Job With   <br/> <span className="jpath">Sklassics</span>
        </div>
        <p className="hdesc">
          Looking for a new job can be both exciting and daunting. Navigating the job 
          market involves exploring various avenues, including online job boards.
        </p>
        <div className="search-box">
          
          <button>🔍 Browse Jobs</button>
        </div>
      </div>

      
      <div className="hero-image">
        <img src=	"https://html.themewant.com/jobpath/template/assets/img/home-1/banner/image_2x.webp" alt="Job Search" />
        
       
      </div>
    </div>
   
  );
};

export default HeroSection;
