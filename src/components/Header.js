import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function Header() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
    id="header"
      style={{
        backgroundImage: "url('/images/honeycomb-3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '39vh',
        color: '#ff6f61',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 1.0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      

      <h1 style={{ fontSize: '4rem', margin: '0' }}>
        Welcome
        <span
          style={{
            display: 'inline-block',
            animation: 'bounce 2s infinite',
            margin: '0 10px',
          }}
        >
          😊
        </span>
        Mohd Asad Portfolio
      </h1>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-20px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
