import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Logo />
        </Link>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu} className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/what-we-do" onClick={closeMenu} className="nav-link">What We Do</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu} className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={closeMenu} className="nav-link">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
