import React from 'react';
import Beams from './Beams';
import './Hero.css';

const Hero = () => {
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
            <h2 className="role-text">
              <span className="role-item">Data Engineer</span>
              <span className="role-separator">|</span>
              <span className="role-item">Full-Stack Developer</span>
              <span className="role-separator">|</span>
              <span className="role-item">UI/UX Designer</span>
            </h2>
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

