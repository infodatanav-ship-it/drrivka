import React, { useState } from 'react';
import '../styles/VideoIntro.css';

function VideoIntro() {
  const [showVideo, setShowVideo] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const closeVideo = () => {
    setShowVideo(false);
  };

  if (!showVideo) return null;

  return (
    <section className="video-intro">
      <div className="container">
        <div className="video-container">
          <button className="video-close" onClick={closeVideo} aria-label="Close video">&times;</button>
          <div className="video-wrapper">
            {!videoError ? (
              <iframe
                key="youtube-video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&rel=0"
                title="Medical Practice Intro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={() => setVideoError(true)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              ></iframe>
            ) : (
              <div className="video-placeholder">
                <p>Video not available. Click X to close.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;
