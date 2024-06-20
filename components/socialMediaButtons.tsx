"use client";

import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const commonIconStyle = {
  fontSize: '30px',
};

const coloredIconStyle = {
  ...commonIconStyle,
  color: 'white',
};

const whatsappIconStyle = {
  ...commonIconStyle,
  fontSize: "35px",
  color: 'white',
  padding: '3px',
};

// Define the social media buttons component
const SocialMediaButtons: React.FC = () => {
  return (
    <>
      <div>
        {/* WhatsApp Button (Always visible) */}
        <div
          className="whatsapp-button"
          style={{
            position: 'fixed',
            bottom: 25,
            right: 25,
            zIndex: 1000,
            borderRadius: '50%',
            backgroundColor: "#25d366",
          }}
        >
          <a href="https://wa.me/2235474466" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={whatsappIconStyle} />
          </a>
        </div>
      </div>

      <div className='hidden sm:block'>
        {/* Social Media Buttons (Visible on devices sm and above) */}
        <div
          style={{
            position: 'fixed',
            top: '30%',
            right: 25,
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            zIndex: 1000,
          }}
        >
          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/company/giardelli-gonz%C3%A1lez-consultora/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={coloredIconStyle} />
          </a>

          {/* Instagram Button */}
          <a href="https://instagram.com/giardelligonzalez?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={coloredIconStyle} />
          </a>

          <a href="https://www.youtube.com/@GiardelliGonzalez" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={coloredIconStyle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMediaButtons;