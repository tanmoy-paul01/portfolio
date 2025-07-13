import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
        <g style={{ order: -1 }}>
          <polygon transform="rotate(45 100 100)" strokeWidth="1" stroke="#03a9f4" fill="none" points="70,70 148,50 130,130 50,150" id="bounce" />
          <polygon transform="rotate(45 100 100)" strokeWidth="1" stroke="#03a9f4" fill="none" points="70,70 148,50 130,130 50,150" id="bounce2" />
          <polygon transform="rotate(45 100 100)" strokeWidth="2" fill="#414750" points="70,70 150,50 130,130 50,150" />
          <polygon strokeWidth="2" fill="url(#gradiente)" points="100,70 150,100 100,130 50,100" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
              <stop style={{ stopColor: '#1e2026', stopOpacity: 1 }} offset="20%" />
              <stop style={{ stopColor: '#414750', stopOpacity: 1 }} offset="60%" />
            </linearGradient>
          </defs>
          <polygon transform="translate(20, 31)" strokeWidth="2" fill="#027cb5ff" points="80,50 80,75 80,99 40,75" />
          <polygon transform="translate(20, 31)" strokeWidth="2" fill="url(#gradiente2)" points="40,-40 80,-40 80,99 40,75" />
          <defs>
            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
              <stop style={{ stopColor: 'rgba(16, 104, 211, 0)', stopOpacity: 1 }} offset="20%" />
              <stop style={{ stopColor: '#1068d354', stopOpacity: 1 }} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(180 100 100) translate(20, 20)" strokeWidth="2" fill="#03a9f4" points="80,50 80,75 80,99 40,75" />
          <polygon transform="rotate(0 100 100) translate(60, 20)" strokeWidth="2" fill="url(#gradiente3)" points="40,-40 80,-40 80,85 40,110.2" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
              <stop style={{ stopColor: 'rgba(16, 104, 211, 0)', stopOpacity: 1 }} offset="20%" />
              <stop style={{ stopColor: '#1068d354', stopOpacity: 1 }} offset="100%" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(45 100 100) translate(80, 95)" strokeWidth="2" fill="#8bd3f4ff" points="5,0 5,5 0,5 0,0" id="particles" />
          <polygon transform="rotate(45 100 100) translate(80, 55)" strokeWidth="2" fill="#8bd3f4ff" points="6,0 6,6 0,6 0,0" id="particles" />
          <polygon transform="rotate(45 100 100) translate(70, 80)" strokeWidth="2" fill="#fff" points="2,0 2,2 0,2 0,0" id="particles" />
          <polygon strokeWidth="2" fill="#292d34" points="29.5,99.8 100,142 100,172 29.5,130" />
          <polygon transform="translate(50, 92)" strokeWidth="2" fill="#1f2127" points="50,50 120.5,8 120.5,35 50,80" />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
