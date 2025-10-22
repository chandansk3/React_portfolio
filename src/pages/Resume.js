import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <p className="abc">Click the button below to view my resume:</p>
      <a 
        href="https://drive.google.com/drive/folders/1dFiVkBCOB3HqxuK9gvPhHBPi9WXRiZjU" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn"
      >
        View Resume
      </a>

      <div className="resume-section">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Full Stack Developer - Itvedant Education Ltd</h3>
            <p><strong>Nov 2024 - April 2025</strong></p>
            <p>Worked on Frontend and Backend</p>
          </li>
        </ul>
      </div>

      <div className="resume-section">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Master's in Computer Application</h3>
            <p><strong>BIET College (2023 - 2024)</strong></p>
          </li>
          <li>
            <h3>Bachelor's in Computer Science</h3>
            <p><strong>GMS College (2019 - 2022)</strong></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;