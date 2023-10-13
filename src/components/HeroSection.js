import './HeroSection.css';
import React from 'react';
import { Link } from "react-router-dom";
import Photo from '../images/photo1.jpg';

function HeroSection() {
  const resumeFilePath = "../data/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Photo} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Intelligent Systems Engineering Graduate</p>
        <h1>NUR FIRZANAH</h1>
        <div>
          <Link to="mailto:nurfirzanahazizi@gmail.com" className="btn" title="Email me">Contact Me</Link>
          <Link to={resumeFilePath} download="../data/resume.pdf" className="btn" onClick={handleDownload} title="Download my resume">Resume</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
