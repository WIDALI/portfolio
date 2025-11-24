import React from 'react';
import Beams from './Beams';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-beams">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#60A5FA"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={45}
        />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Widad Alli
          </h1>
          <div className="hero-roles">
            <h2 className="hero-subtitle" onClick={scrollToAbout}>
              Software Engineer
            </h2>
            <p className="hero-specialization">Full-Stack Development  •  Data Engineering  •  Mobile & Web UI/UX</p>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;

