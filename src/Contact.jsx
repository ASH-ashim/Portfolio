import { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mdoqjqjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just to say hi!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-method">
              <FiMail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:ashimbhattarai4040@gmail.com" className="contact-link">
                  ashimbhattarai4040@gmail.com
                </a>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect with me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/ashimdev23" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://x.com/AshimBHATT15146?t=agj2k6MLt8HLX-UkGx8H0Q&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="social-icon" />
                </a>
                <a href="https://github.com/ASH-ashim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://www.instagram.com/invites/contact/?igsh=sgrct4ubqv5l&utm_content=t7hv7x1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  <FiSend className="send-icon" /> Send Message
                </>
              )}
            </button>
            {submitStatus === 'success' && (
              <p className="submit-message success">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="submit-message error">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;