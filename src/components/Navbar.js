import React from 'react';

function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '10px 0',
      zIndex: 1000,
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        <li><a href="#header" style={navLinkStyle}>Welcome</a></li>
        <li><a href="#about" style={navLinkStyle}>About</a></li>
        <li><a href="#experience" style={navLinkStyle}>Experience</a></li>
        <li><a href="#projects" style={navLinkStyle}>Projects</a></li>
        <li><a href="#skills" style={navLinkStyle}>Skills</a></li>
        <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

const navLinkStyle = {
  color: '#ff6f61',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  padding: '5px 10px',
  borderRadius: '5px',
  transition: 'background 0.3s',
};

export default Navbar;
