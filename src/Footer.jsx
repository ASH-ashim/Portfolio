import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleFooterLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Ashim Bhattarai</h2>
            <p className="footer-tagline">Full Stack Developer & DevOps Engineer</p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3 className="footer-heading">Quick Links</h3>
              <ul>
                <li><a href="#home" onClick={(e) => handleFooterLinkClick(e, 'home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleFooterLinkClick(e, 'about')}>About</a></li>
                <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, 'services')}>Services</a></li>
                <li><a href="#portfolio" onClick={(e) => handleFooterLinkClick(e, 'portfolio')}>Portfolio</a></li>
                <li><a href="#contact" onClick={(e) => handleFooterLinkClick(e, 'contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">Services</h3>
              <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Cloud Solutions</li>
                <li>DevOps Consulting</li>
                <li>Desktop Development</li>
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-heading">Contact Info</h3>
              <ul>
                <li>Email: ashimbhattarai4040@gmail.com</li>
                <li>Phone: +977 9767007006</li>
                <li>Location: Butwal, Nepal</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Ashim Bhattarai. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span> | </span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
