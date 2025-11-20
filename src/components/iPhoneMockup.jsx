import React from 'react';
import './iPhoneMockup.css';

const IPhoneMockup = ({ videoSrc, title }) => {
  return (
    <div className="iphone-mockup">
      <div className="iphone-frame">
        <div className="iphone-notch"></div>
        <div className="iphone-speaker"></div>
        <div className="iphone-camera"></div>
        <div className="iphone-screen">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="iphone-video"
            />
          ) : (
            <div className="iphone-placeholder">
              <span>{title}</span>
            </div>
          )}
        </div>
        <div className="iphone-button-side"></div>
      </div>
    </div>
  );
};

export default IPhoneMockup;

