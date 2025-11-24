import React, { useState } from 'react';
import MacBookMockup from './MacBookMockup';
import IPhoneMockup from './iPhoneMockup';
import IPadMockup from './iPadMockup';
import CardSwap, { Card } from './CardSwap';
import './ProjectSection.css';

const ProjectSection = ({ 
  id, 
  title, 
  description, 
  techStack, 
  features, 
  githubLink, 
  videoPlaceholder,
  videoSrc,
  deviceType = 'macbook', // 'macbook', 'iphone', or 'ipad'
  reversed = false,
  cardContent, // { idea, build, technologies }
  status, // optional status badge (e.g., "IN PRODUCTION")
  decisionMapImage, // optional decision map image path
  figmaDesignImage // optional Figma design image path
}) => {
  const [showDecisionMap, setShowDecisionMap] = useState(false);
  const [showFigmaDesign, setShowFigmaDesign] = useState(false);
  return (
    <section id={id} className={`project-section ${reversed ? 'reversed' : ''}`}>
      <div className="project-container">
        <div className="project-video">
          {deviceType === 'macbook' ? (
            <MacBookMockup videoSrc={videoSrc} title={videoPlaceholder} />
          ) : deviceType === 'ipad' ? (
            <IPadMockup videoSrc={videoSrc} title={videoPlaceholder} />
          ) : (
            <IPhoneMockup videoSrc={videoSrc} title={videoPlaceholder} />
          )}
        </div>
        
        <div className="project-info-cards">
          <div className="project-header">
            <h2 className="project-title-main">{title}</h2>
            <div className="project-badges">
              {status && <span className="project-status-badge">{status}</span>}
              {decisionMapImage && (
                <button 
                  className="decision-map-button" 
                  onClick={() => setShowDecisionMap(true)}
                  aria-label="View Decision Map"
                >
                  🗺️ View Decision Map
                </button>
              )}
              {figmaDesignImage && (
                <button 
                  className="figma-design-button" 
                  onClick={() => setShowFigmaDesign(true)}
                  aria-label="View Figma Design"
                >
                  Figma Design
                </button>
              )}
            </div>
          </div>
          <div style={{ height: '450px', position: 'relative', marginTop: '1rem' }}>
            <CardSwap
              width={560}
              height={330}
              cardDistance={30}
              verticalDistance={35}
              delay={6000}
              pauseOnHover={true}
              easing="elastic"
              reversed={reversed}
            >
              {/* Card 1: The Idea */}
              <Card data-title="The Idea">
                <div>
                  <h3>The Idea</h3>
                  <p>{cardContent?.idea?.description}</p>
                  {cardContent?.idea?.problem && (
                    <>
                      <h4>The Problem</h4>
                      <p>{cardContent.idea.problem}</p>
                    </>
                  )}
                  {cardContent?.idea?.solution && (
                    <>
                      <h4>The Solution</h4>
                      <p>{cardContent.idea.solution}</p>
                    </>
                  )}
                </div>
              </Card>

              {/* Card 2: The Build */}
              <Card data-title="The Build">
                <div>
                  <h3>The Build</h3>
                  <p>{cardContent?.build?.overview}</p>
                  {cardContent?.build?.highlights && (
                    <>
                      <h4>Key Highlights</h4>
                      <ul>
                        {cardContent.build.highlights.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {cardContent?.build?.challenge && (
                    <>
                      <h4>Biggest Challenge</h4>
                      <p>{cardContent.build.challenge}</p>
                    </>
                  )}
                </div>
              </Card>

              {/* Card 3: Technologies */}
              <Card data-title="Technologies">
                <div>
                  <h3>Technologies</h3>
                  <p>{cardContent?.technologies?.description}</p>
                  {cardContent?.technologies?.stack && (
                    <>
                      <h4>Tech Stack</h4>
                      <div className="card-tech-list">
                        {cardContent.technologies.stack.map((tech, idx) => (
                          <span key={idx} className="card-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </>
                  )}
                  {cardContent?.technologies?.features && (
                    <>
                      <h4>Key Features</h4>
                      <ul>
                        {cardContent.technologies.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </Card>
            </CardSwap>
          </div>
          
          <div className="project-links">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-github"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Decision Map Overlay */}
      {showDecisionMap && decisionMapImage && (
        <div className="decision-map-overlay" onClick={() => setShowDecisionMap(false)}>
          <div className="decision-map-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={() => setShowDecisionMap(false)}
              aria-label="Close Decision Map"
            >
              ✕
            </button>
            <h3>Decision Tree Algorithm</h3>
            <div className="decision-map-content">
              <img src={decisionMapImage} alt="Decision Tree Map" />
            </div>
          </div>
        </div>
      )}
      
      {/* Figma Design Overlay */}
      {showFigmaDesign && figmaDesignImage && (
        <div className="decision-map-overlay" onClick={() => setShowFigmaDesign(false)}>
          <div className="decision-map-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={() => setShowFigmaDesign(false)}
              aria-label="Close Figma Design"
            >
              ✕
            </button>
            <h3>Figma Design Layout</h3>
            <div className="decision-map-content">
              <img src={figmaDesignImage} alt="Figma Design Layout" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;

