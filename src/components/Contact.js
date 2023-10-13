import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection2 from './HeroSection2';
import Form from './Form';

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="Contact" text="Keep in touch with me." />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;