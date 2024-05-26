import React from 'react'
import './css//Contact.css';

export const Contact = () => {
  return (
    <div>
      <section className="contact" id='contact'>
      <h2>Contact Me</h2>
      <div className="contact-details">
        <a href="https://www.linkedin.com/in/saheb-singh-b3a026195/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/alwayssaheb" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-github"></i> GitHub
        </a>
        <p className="contact-item">
          <i className="fas fa-phone"></i> 9925817007
        </p>
        <p className="contact-item">
          <i className="fas fa-envelope"></i> saheb.nagi29@gmail.com
        </p>
      </div>
    </section>
    </div>
  )
}

export default Contact
