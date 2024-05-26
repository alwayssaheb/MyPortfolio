import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:example@example.com">Email</a>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
