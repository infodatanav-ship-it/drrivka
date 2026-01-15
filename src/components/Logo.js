import React from 'react';
import '../styles/Logo.css';

function Logo() {
  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 0 120 120" width="60" height="60">
        <defs>
          <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0066cc', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0052a3', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g>
          {/* Medical Cross */}
          <rect x="40" y="20" width="40" height="80" fill="url(#crossGradient)" rx="2" />
          <rect x="20" y="40" width="80" height="40" fill="url(#crossGradient)" rx="2" />
          
          {/* Leaf overlay on cross */}
          <path
            d="M 60 35 Q 70 45 65 55 Q 60 60 55 55 Q 50 45 60 35 Z"
            fill="#00a86b"
            opacity="0.9"
          />
          <path
            d="M 60 35 Q 60 45 60 55"
            stroke="#007a4d"
            strokeWidth="1"
            fill="none"
          />
          
          {/* Location Pin Icon */}
          <g transform="translate(82, 20)">
            {/* Pin circle */}
            <circle cx="0" cy="0" r="11" fill="#ff6b6b" />
            {/* Pin point */}
            <path d="M 0 11 L 7 24 L -7 24 Z" fill="#ff6b6b" />
            {/* Inner dot */}
            <circle cx="0" cy="0" r="5" fill="white" />
          </g>
        </g>
      </svg>
      <div className="logo-text-container">
        <span className="logo-text-main">Dr Rivka</span>
        <span className="logo-text-sub">Healthcare & Wellness</span>
      </div>
    </div>
  );
}

export default Logo;
