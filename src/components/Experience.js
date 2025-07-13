import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Sofyrus Technologies Pvt Ltd",
      role: "Software Developer",
      period: "aug 2023 – Present",
      highlights: [
        "✧ Led the backend development for a Microservice & Monolithic-Oriented Medical Management System",
        "✧ Achieving a 10x improvement in API response time.",
        "✧ Designed and optimized CRUD APIs to streamline system interactions.",
        "✧ Collaborated with frontend developers for integration and ensured high-quality standards with QA professionals.",
        "✧ Developed scalable backend infrastructure for multiple projects using NestJS.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        backgroundImage: "url('/images/abstract.jpg')",
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
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
            textShadow:
              '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)',
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          Professional Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '30px',
              maxWidth: '900px',
              margin: 'auto',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#ffd700', // Golden color for the role
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              {exp.role}
            </h3>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                color: '#ffffff',
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              {exp.company} | {exp.period}
            </p>
            <ul
              style={{
                textAlign: 'left',
                marginTop: '10px',
                paddingLeft: '20px',
                lineHeight: '1.8',
              }}
            >
              {exp.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '1rem',
                    marginBottom: '10px',
                    color: '#e6e6e6',
                  }}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
