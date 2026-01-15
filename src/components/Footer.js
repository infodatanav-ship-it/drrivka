import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Dr. Medical Care</h4>
          <p>Providing exceptional healthcare and wellness services</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/what-we-do">Services</a></li>
            <li><a href="/about-us">About</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@drmedicalcare.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dr. Medical Care. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
