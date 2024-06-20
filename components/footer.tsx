import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-customBlue">
      <div className="mx-auto py-10 flex flex-col items-center justify-center">
        <img src="/images/footerIcon.png" alt="Footer Icon" className="mb-4" />
        
        <p className="text-center text-xs text-white">
          Mar del Plata | 2235474466 | info@giardelli-gonzalez.com
        </p>

        {/*
         Social Media Icons 
        <div className="flex gap-10 pt-5">

          <a href="https://www.linkedin.com/company/giardelli-gonz%C3%A1lez-consultora/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: '30px', color: '#DD6C49' }} />
          </a>


          <a href="https://instagram.com/giardelligonzalez?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: '30px', color: '#DD6C49' }} />
          </a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;