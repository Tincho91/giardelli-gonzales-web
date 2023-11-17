"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaWhatsapp, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const commonIconStyle = {
  fontSize: '30px',  // Adjust the size based on your design
};

const coloredIconStyle = {
  ...commonIconStyle,
  color: '#DD6C49',  // Color for the first three icons
};

const whatsappIconStyle = {
  ...commonIconStyle,
  fontSize: "50px",
  backgroundColor: '#25D366',
  color: 'white',
  borderRadius: '50%',
  padding: '4px',
};


// Define the social media buttons component
const SocialMediaButtons: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      {/* WhatsApp Button (Always visible) */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 40,
          zIndex: 1000,
        }}
      >
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className=''>
          <FaWhatsapp style={whatsappIconStyle} />
        </a>
      </motion.div>

      {/* Social Media Buttons (Visible on devices sm and above) */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: isHidden ? 0 : 1, x: isHidden ? 200 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: '30%',
          right: isHidden ? -200 : 45,
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 1000,
        }}
      >
        {/* LinkedIn Button */}
        <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className=''>
          <FaLinkedin style={coloredIconStyle} />
        </a>

        {/* Facebook Button */}
        <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare style={coloredIconStyle} />
        </a>

        {/* Instagram Button */}
        <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={coloredIconStyle} />
        </a>
      </motion.div>

      {/* Arrow Button to Toggle Visibility (Visible on devices sm and above) */}
      <motion.button
        onClick={toggleVisibility}
        initial={{ opacity: 1 }}
        animate={{ opacity: isHidden ? 1 : 0.5 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          color: '#DD6C49',
          position: 'fixed',
          top: '50%',
          right: 25,
          transform: 'translateY(-50%)',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1001,
          display: 'none',
        }}
      >
        {isHidden ? <FaArrowLeft /> : <FaArrowRight />}
      </motion.button>
    </div>
  );
};

export default SocialMediaButtons;
