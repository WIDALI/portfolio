import React from 'react';
import './iPadMockup.css';

const IPadMockup = ({ videoSrc, title }) => {
  return (
    <div className="ipad-mockup">
      <div className="ipad-frame">
        <div className="ipad-camera"></div>
        <div className="ipad-screen">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="ipad-video"
            />
          ) : (
            <div className="ipad-placeholder">
              <span>{title}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IPadMockup;

