
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        &copy; 2024 <strong>Mohd Asad</strong> | Made with{' '}
        <span style={heartStyle}>❤️</span> | Best viewed on Desktop sire
      </div>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: '#1f1f1f', 
  color: '#f0f0f0', 
  padding: '10px 0',
  textAlign: 'center',
  marginTop: 'auto',
  fontFamily: "'Roboto', Arial, sans-serif", 
  fontSize: '14px',
  borderTop: '2px solid #e25555', 
};

const containerStyle = {
  display: 'inline-block', 
};

const heartStyle = {
  color: '#e25555', 
};

export default Footer;
