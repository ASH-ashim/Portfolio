import React, { useEffect, useRef } from 'react';
import Photo from './assets/photo.png'; 
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const cubeRef = useRef(null);
  const animationRef = useRef(null);
  const rotationRef = useRef({ angleX: 0, angleY: 0 });

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL without page reload
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  useEffect(() => {
    // Cube animation
    const animateCube = () => {
      if (!cubeRef.current) return;

      rotationRef.current.angleY = (rotationRef.current.angleY + 0.5) % 360;
      rotationRef.current.angleX = (rotationRef.current.angleX + 0.3) % 360;

      cubeRef.current.style.transform = `rotateX(${rotationRef.current.angleX}deg) rotateY(${rotationRef.current.angleY}deg)`;

      animationRef.current = requestAnimationFrame(animateCube);
    };

    animationRef.current = requestAnimationFrame(animateCube);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" ref={heroRef} id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Hi, I'm Ashim Bhattarai</h2>
          <p className="hero-subtitle">
            Full Stack Engineer | DevOps Engineer | Web Designer
          </p>
          <p className="hero-description">
            I craft scalable web, Mobile and Desktop applications, optimize deployment pipelines,
            and design stunning user experiences with modern technologies.
          </p>
          <div className="hero-buttons">
            <button 
              className="primary-button" 
              onClick={() => scrollToSection('portfolio')}
            >
              View Projects
            </button>
            <button 
              className="secondary-button"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="cube-container">
            <div className="cube" ref={cubeRef}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`cube-face cube-face-${i + 1}`}>
                  <div className="cube-content">
                    <img src={Photo} alt="Profile" className="profile-image" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;