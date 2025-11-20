import React, { useEffect, useState, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import './TableOfContents.css';

// Define sections outside component to avoid re-creation
const BASE_SECTIONS = [
  {
    id: "about",
    title: "About Me",
    img: "/aboutme.png",
    url: "#about",
    height: 350
  },
  {
    id: "industry",
    title: "Industry",
    img: "/industry.png",
    url: "#industry",
    height: 280
  },
  {
    id: "contact",
    title: "Contact",
    img: "/contact.png",
    url: "#contact",
    height: 240
  }
];

const TableOfContents = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);
  const [hasZoomed, setHasZoomed] = useState(false);

  // Memoize items array to prevent re-generation on every render
  // Must be called before any early returns
  const items = useMemo(() => {
    const totalItems = 36; // Increased for 6 columns
    
    // Add Projects to the regular sections pool
    const allSections = [
      ...BASE_SECTIONS,
      {
        id: "projects",
        title: "Projects",
        img: "/Projects.png",
        url: "#projects",
        height: 350
      }
    ];
    
    // Create varied heights for visual interest
    const heights = [280, 320, 350, 300, 340, 310];
    
    // Create a perfectly distributed pattern (round-robin)
    const generatedItems = [];
    
    for (let i = 0; i < totalItems; i++) {
      const sectionIndex = i % allSections.length;
      const section = allSections[sectionIndex];
      const height = heights[i % heights.length];
      
      generatedItems.push({
        ...section,
        id: `${section.id}-${i}`,
        height: height
      });
    }
    
    // Add random glass overlay colors to each item
    const overlayColors = [
      'rgba(255, 255, 255, 0.15)', // White
      'rgba(96, 165, 250, 0.2)',   // Blue
      'rgba(148, 163, 184, 0.15)', // Grey
      'rgba(203, 213, 225, 0.12)', // Light grey
      'rgba(30, 58, 138, 0.18)',   // Dark blue
    ];
    
    return generatedItems.map((item, index) => ({
      ...item,
      overlayColor: overlayColors[index % overlayColors.length]
    }));
  }, []); // Empty dependency array means this only runs once

  useEffect(() => {
    const handleScroll = () => {
      const heroProgress = window.scrollY / window.innerHeight;
      
      // Only start rendering when hero is 50% scrolled
      if (heroProgress >= 0.5 && !shouldRender) {
        setShouldRender(true);
      }
      
      const section = document.getElementById('table-of-contents');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the table of contents section
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - windowHeight)));
      setScrollProgress(progress);

      // When 85% scrolled through TOC, auto-scroll to About Me section (only once)
      if (progress >= 0.85 && shouldRender && !hasZoomed) {
        setHasZoomed(true);
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldRender, hasZoomed]);

  // Don't render until hero is 50% scrolled
  if (!shouldRender) {
    return (
      <section id="table-of-contents" className="toc-section">
        <div className="toc-placeholder" />
      </section>
    );
  }

  const breakpointColumns = {
    default: 6,
    1600: 5,
    1200: 4,
    900: 3,
    600: 2,
    480: 1
  };

  const handleClick = (url) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="table-of-contents" 
      className="toc-section"
      style={{
        pointerEvents: scrollProgress > 0.85 ? 'none' : 'auto'
      }}
    >
      <div 
        className="masonry-wrapper"
        style={{
          transform: `scale(${1 + scrollProgress * 2})`,
          opacity: Math.max(0, 1 - scrollProgress * 1.5),
          transformOrigin: 'center center'
        }}
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="masonry-item"
              style={{ height: `${item.height}px` }}
              onClick={() => handleClick(item.url)}
            >
              <div 
                className="item-image"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div 
                  className="glass-overlay"
                  style={{ background: item.overlayColor }}
                />
                <div className="item-overlay">
                  <h3 className="item-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default TableOfContents;

