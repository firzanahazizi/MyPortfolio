import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection2 from './HeroSection2';
import AboutMe from './AboutMe';

function About() {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="About" text="Get to know me." />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default About;