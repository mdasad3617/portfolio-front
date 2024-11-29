import React from "react";

function Header() {
  return (
    <header
      id="header"
      style={{
        backgroundImage: "url('/images/honeycomb-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh", // Default height for large screens
        color: "#ff6f61",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 1.0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header Text */}
      <h1
        style={{
          fontSize: "4rem", // Default font size for large screens
          margin: "0",
          zIndex: 2,
          position: "relative",
          animation: "textWave 4s ease-in-out infinite alternate",
        }}
      >
        Mohd Asad Portfolio
      </h1>

      {/* Advanced Wire Network Animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          {/* Complex wire network */}
          {Array.from({ length: 15 }).map((_, index) => (
            <path
              key={index}
              d={`M ${-50 + Math.random() * 100} ${-50 + Math.random() * 600}
                C ${300 + Math.sin(index) * 200} ${100 + index * 30},
                  ${700 - Math.cos(index) * 200} ${300 - index * 20},
                  ${1050 - Math.random() * 100} ${-50 + Math.random() * 600}`}
              fill="none"
              stroke={`url(#gradient${index})`}
              strokeWidth={1.5}
              style={{
                animation: `wireFlow${index} ${7 + index}s cubic-bezier(0.42, 0, 0.58, 1) infinite alternate`,
                opacity: 0.6,
                strokeLinecap: "round",
              }}
            />
          ))}

          {/* Gradients for each wire */}
          {Array.from({ length: 15 }).map((_, index) => (
            <defs key={index}>
              <linearGradient id={`gradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6f61" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#62dafb" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff6f61" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          ))}
        </svg>
      </div>

      {/* Comet Animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#ff6f61",
              animation: `cometMovement${index} ${4 + Math.random() * 3}s linear infinite`,
              boxShadow: "0 0 10px #ff6f61, 0 0 20px #ff6f61",
            }}
          ></div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          ${Array.from({ length: 15 }).map((_, index) => `
            @keyframes wireFlow${index} {
              0% { 
                transform: 
                  translateX(${-20 + Math.sin(index) * 10}px) 
                  translateY(${-10 + Math.cos(index) * 5}px)
                  scaleX(${0.95 + Math.random() * 0.1});
                opacity: 0.4;
              }
              100% { 
                transform: 
                  translateX(${20 - Math.sin(index) * 10}px) 
                  translateY(${10 - Math.cos(index) * 5}px)
                  scaleX(${1.05 - Math.random() * 0.1});
                opacity: 0.7;
              }
            }
          `).join('')}
          
          @keyframes textGlow {
            0% { 
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.0), 
                           0 0 10px #ff6f61, 
                           0 0 20px #62dafb;
              transform: scale(1);
            }
            100% { 
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.0), 
                           0 0 15px #ff6f61, 
                           0 0 30px #62dafb;
              transform: scale(1.02);
            }
          }

          ${Array.from({ length: 5 }).map((_, index) => `
            @keyframes cometMovement${index} {
              0% { 
                transform: translateX(0) translateY(0);
                opacity: 1;
              }
              100% { 
                transform: translateX(${100 + Math.random() * 200}%) translateY(${100 + Math.random() * 200}%);
                opacity: 0;
              }
            }
          `).join('')}

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            header {
              height: 30vh; /* Adjust header height for mobile */
            }
            h1 {
              font-size: 2rem; /* Smaller font size for mobile */
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
