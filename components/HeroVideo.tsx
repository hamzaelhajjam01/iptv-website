"use client";

import React, { useState } from 'react';

interface HeroVideoProps {
  src: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ src }) => {
  const [videoError, setVideoError] = useState(false);

  if (videoError) {
    return <div className="hero-video-container hero-video-fallback"></div>;
  }

  return (
    <div className="hero-video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="opacity-20"
        onError={() => setVideoError(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
