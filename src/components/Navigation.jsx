import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false); // Close mobile menu on navigation
    setMobileProjectsOpen(false); // Close dropdowns on navigation
    setMobileContactOpen(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close dropdowns when closing mobile menu
    if (mobileMenuOpen) {
      setMobileProjectsOpen(false);
      setMobileContactOpen(false);
    }
  };

  const toggleMobileProjects = (e) => {
    if (e) e.stopPropagation();
    setMobileProjectsOpen(prev => !prev);
  };

  const toggleMobileContact = (e) => {
    if (e) e.stopPropagation();
    setMobileContactOpen(prev => !prev);
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Portfolio
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li onClick={() => scrollToSection('hero')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('industry')}>Industry</li>
          <li 
            className={`nav-dropdown ${mobileProjectsOpen ? 'open' : ''}`}
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <span 
              className="dropdown-trigger"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  toggleMobileProjects(e);
                } else {
                  scrollToSection('projects');
                }
              }}
            >
              Projects
              <span className={`dropdown-arrow ${mobileProjectsOpen ? 'rotated' : ''}`}>▼</span>
            </span>
            <div className={`dropdown-menu ${projectsOpen || mobileProjectsOpen ? 'open' : ''}`}>
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
            className={`nav-dropdown ${mobileContactOpen ? 'open' : ''}`}
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <span 
              className="dropdown-trigger"
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  toggleMobileContact(e);
                } else {
                  scrollToSection('contact');
                }
              }}
            >
              Contact
              <span className={`dropdown-arrow ${mobileContactOpen ? 'rotated' : ''}`}>▼</span>
            </span>
            <div className={`dropdown-menu ${contactOpen || mobileContactOpen ? 'open' : ''}`}>
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

