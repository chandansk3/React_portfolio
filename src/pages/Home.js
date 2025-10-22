import React from "react";
import "../styles/Home.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>
        Hello! <br></br> 
        <span className="highlight">I,m  Chandan SK</span>
        </h1>
        <h3>
           <span className="highlight">A Web Designer</span>
        </h3>
        <p>
        As a MCA graduate from Bapuji institute of engineering & technology in Davangere, I am driven to seek out new experiences, connect with individuals from diverse backgrounds, and pursue opportunities for personal growth through continuous learning.
        </p>
        <div className="buttons">
         <a href="https://drive.google.com/drive/folders/1dFiVkBCOB3HqxuK9gvPhHBPi9WXRiZjU" target="_blank"   rel="noopener noreferrer"> <button className="portfolio-btn">Download Resume</button></a>
         <Link to="/contact">
         <button className="contact-btn">Contact Me</button>
         </Link>
        </div>

        {/* Social Media Icons */}
        
          <div className="Follow">
          <h4>Follow Me</h4>
        </div>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/chandan-s-k-892635328"> <FaLinkedin className="icon" /></a>
         <a href="https://github.com/chandansk3">   <FaGithub className="icon" /> </a>
         <a href="https://www.instagram.com/chandan_sk31?igsh=MXBwc3lkdzEydXI0dw=="> <FaInstagram className="icon" /></a>
          </div>
          
        
        
      </div>

      {/* Right Section with Inline Background Image */}
      <div
        className="right-section"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/chandan.jpg)` }}
      >
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Home;