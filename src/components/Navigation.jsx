import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      // Scroll to top for hero section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Portfolio
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('industry')}>Industry</li>
          <li 
            className="nav-dropdown"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <span onClick={() => scrollToSection('projects')}>Projects</span>
            <div className={`dropdown-menu ${projectsOpen ? 'open' : ''}`}>
              <div className="dropdown-item glare-effect" onClick={() => scrollToSection('student-75')}>
                <span>75-Student</span>
              </div>
              <div className="dropdown-item glare-effect" onClick={() => scrollToSection('race-control')}>
                <span>Race Control</span>
              </div>
              <div className="dropdown-item glare-effect" onClick={() => scrollToSection('scheduled')}>
                <span>Scheduled</span>
              </div>
            </div>
          </li>
          <li 
            className="nav-dropdown"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <span onClick={() => scrollToSection('contact')}>Contact</span>
            <div className={`dropdown-menu ${contactOpen ? 'open' : ''}`}>
              <div className="dropdown-item glare-effect" onClick={() => scrollToSection('contact')}>
                <span>Get in Touch</span>
              </div>
              <a 
                href="/portfolio/Widad_Alli_CV.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="dropdown-item glare-effect"
                download
              >
                <span>Download CV</span>
              </a>
            </div>
          </li>
          <li>
            <a 
              href="https://github.com/WIDALI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

