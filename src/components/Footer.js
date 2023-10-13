import './Footer.css';
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={25} style={{color:"#fff", marginRight: "1rem"}} />
                    <div>
                        <p>108, Kampung Tersusun Batu 5 Tambun</p>
                        <p>Ipoh, Perak</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "1rem"}} /> +(60) 12-5827 068</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "1rem"}} /> nurfirzanahazizi@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the webpage</h4>
                <p>Hello, I am Nur Firzanah and I am welcoming you guys to my e-portfolio. Thank you for visting here.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;