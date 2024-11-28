import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDocker, FaGithub, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiPostgresql, SiRedis, SiNginx, SiKafka, SiElasticsearch, SiPrisma, SiJira, SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';
import '../index';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#007ACC' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Python', icon: <FaPython />, color: '#306998' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'OpenAI', icon: <FaRobot />, color: '#000000' },
    { name: 'Hugging Face', icon: <FaGithub />, color: '#FF6F61' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    { name: 'Nginx', icon: <SiNginx />, color: '#009639' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'Elasticsearch', icon: <SiElasticsearch />, color: '#005571' },
    { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748' },
    { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundImage: "url('/images/black_background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '50px',
        maxWidth: '2800px',
        textAlign: 'center',
        borderRadius: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1,
        }}
      ></div>

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
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
          My Skills
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '15px',
                textAlign: 'center',
                maxWidth: '320px',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                backdropFilter: 'blur(5px)',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.4)';
              }}
            >
              {/* Icon as a square */}
              <div
                style={{
                  width: '80px', // Set square size
                  height: '80px', // Set square size
                  margin: '0 auto 15px', // Center icon
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px', // Optional: rounded corners
                  backgroundColor: skill.color,
                }}
              >
                <div style={{ fontSize: '3rem' }}>
                  {skill.icon}
                </div>
              </div>
              <p style={{ fontSize: '1.3rem', color: '#fff' }}>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
