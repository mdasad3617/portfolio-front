import React from 'react';

function About() {
  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('/images/beautiful-1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px',
        color: 'white',
        position: 'relative',
        maxWidth: '2800px',
        textAlign: 'center',
        borderRadius: '0',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Overlay for darkening the background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, .85)',
        }}
      ></div>

      {/* Content Wrapper */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#ff6f61',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)',
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          About Me
        </h2>
        <div
          style={{
            fontSize: '1.3rem',
            marginTop: '20px',
            maxWidth: '900px',
            margin: 'auto',
            lineHeight: '1.8',
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          <p>
            Hi! I'm Mohd Asad, a Software Developer with expertise in JavaScript, TypeScript, Nest.js and REST APIs.
          </p>
          <p>
            I have 1.6 years of experience in backend development.
          </p>
          <p>
            I love creating efficient and scalable applications that solve real-world problems.
          </p>
        </div>

        {/* Download Resume Button */}
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            backgroundColor: '#ff6f61',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s ease, background-color 0.3s ease',
            marginTop: '30px',
            whiteSpace: 'nowrap',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#ff5b50';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ff6f61';
            e.target.style.transform = 'scale(1)';
          }}
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1biA5StYIIuB2M2AhPKkcNQDI2xk2zsUk/view?usp=drive_link',
              '_blank'
            )
          }
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default About;
