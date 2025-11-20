import React from 'react';
import './MacBookMockup.css';

const MacBookMockup = ({ videoSrc, title }) => {
  return (
    <div className="macbook-mockup">
      <div className="macbook-screen">
        <div className="macbook-notch"></div>
        <div className="macbook-content">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="macbook-video"
            />
          ) : (
            <div className="macbook-placeholder">
              <span>{title}</span>
            </div>
          )}
        </div>
      </div>
      <div className="macbook-bottom">
        <div className="macbook-bottom-notch"></div>
      </div>
      <div className="macbook-base"></div>
    </div>
  );
};

export default MacBookMockup;

