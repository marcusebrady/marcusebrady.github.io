// Writing.js
import React, { useRef, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Writing.css';

function Writing() {
  const writings = [
    {
      title: 'Cyclobutanone NAMD - SI',
      date: '21-05-2025',
      slug: 'cyclobutanone-namd'
    }
  ];

  return (
    <div className="writing-page">
      <Routes>
        <Route path="/" element={<WritingList writings={writings} />} />
        <Route path="/:slug" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

function WritingList({ writings }) {
  return (
    <>
      <h2>Writings</h2>
      <ul className="writing-list">
        {writings.map((writing, index) => (
          <li key={index} className="writing-item">
            <h3 className="writing-title">{writing.title}</h3>
            <div className="writing-meta">
              <Link to={`/writing/${writing.slug}`} className="read-more">
                Read
              </Link>
              <span className="writing-date">{writing.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function ArticlePage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [videoError, setVideoError] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // For mobile devices, we need to handle play promise
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Error playing video:", error);
              setVideoError(true);
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSpeedChange = (speed) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackRate(speed);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="article-page">
      <h2>Nonadiabatic MD</h2>
      
      <div className="video-container">
        <video 
          ref={videoRef}
          width="100%"
          playsInline // Important for iOS
          muted // Often required for autoplay on mobile
          preload="metadata" // Helps with mobile loading
          onError={handleVideoError}
          onClick={handlePlayPause} // Allow clicking video to play/pause
        >
          <source src="/videos/dyn4.webm" type="video/webm" /> {/* WebM first for better compression */}
          <source src="/videos/dyn4_mobile.mp4" type="video/mp4" /> {/* Mobile-optimized MP4 */}
          <source src="/videos/dyn4.mp4" type="video/mp4" /> {/* Original as fallback */}
          Your browser does not support the video tag.
        </video>
        
        {/* Custom play button overlay for better mobile UX */}
        {!isPlaying && (
          <div className="video-overlay" onClick={handlePlayPause}>
            <div className="play-button">▶</div>
          </div>
        )}
        
        {videoError && (
          <div className="video-error">
            <p>Unable to load video. Please try refreshing the page.</p>
          </div>
        )}
      </div>
      
      {/* Video controls */}
      <div className="video-controls">
        <button 
          className="control-button"
          onClick={handlePlayPause}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <div className="speed-controls">
          <span className="speed-label">Speed:</span>
          {[0.5, 1, 1.5, 2].map(speed => (
            <button
              key={speed}
              className={`speed-button ${playbackRate === speed ? 'active' : ''}`}
              onClick={() => handleSpeedChange(speed)}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>
      
      <div className="video-description">
        <p>Nonadiabatic molecular dynamics simulation for cyclobutanone, showing proton transfer and carbonyl dissocation.</p>
      </div>
      
      <div className="article-footer">
        <Link to="/writing" className="back-link">← Back to all writings</Link>
      </div>
    </div>
  );
}

export default Writing;
