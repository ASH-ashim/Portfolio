import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-letter">A</span>
          <span className="logo-letter">S</span>
          <span className="logo-letter">H</span>
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className={`navbar-toggler ${isOpen ? 'open' : ''}`}
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="toggler-bar top"></span>
          <span className="toggler-bar middle"></span>
          <span className="toggler-bar bottom"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li 
                key={item.id} 
                className="nav-item"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <a 
                  href={`#${item.id}`} 
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="nav-text">{item.label}</span>
                  <span className="nav-underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;