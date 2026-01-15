import React from 'react';
import '../styles/WellnessFocus.css';

function WellnessFocus() {
  return (
    <section className="wellness-focus">
      <div className="wellness-container">
        <div className="wellness-text">
          <h2>Our Wellness Philosophy</h2>
          <p>We believe that true health extends beyond treating illness. Our wellness programs are designed to help you achieve optimal physical, mental, and emotional well-being.</p>
          <ul className="wellness-list">
            <li>Personalized nutrition guidance</li>
            <li>Stress management & mindfulness</li>
            <li>Fitness & lifestyle coaching</li>
            <li>Preventive health screenings</li>
          </ul>
          <button className="secondary-button" onClick={() => window.location.href = '/what-we-do'}>Learn More</button>
        </div>
        <div className="wellness-image">
          <div className="image-placeholder">Wellness & Balance</div>
        </div>
      </div>
    </section>
  );
}

export default WellnessFocus;
