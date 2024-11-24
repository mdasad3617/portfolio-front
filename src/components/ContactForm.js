import React, { useState } from 'react';
import { submitContactForm } from '../services/api';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [rocketAnimated, setRocketAnimated] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRocketAnimated(true);
    try {
      await submitContactForm(formData);
      setStatus('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      setStatus('Failed to submit the form. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setRocketAnimated(false); 
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('/images/key-1.jpg')",
        padding: '50px',
        maxWidth: '2800px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        borderRadius: '0',
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
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '10px', color: 'black', borderRadius: '5px', border: 'none' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '10px', color: 'black', borderRadius: '5px', border: 'none' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            padding: '10px',
            color: 'black',
            borderRadius: '5px',
            border: 'none',
            resize: 'none',
          }}
        ></textarea>
        <button
          type="submit"
          disabled={rocketAnimated} 
          style={{
            backgroundColor: '#ff6f61',
            color: 'white',
            padding: '10px',
            borderRadius: '15px',
            border: 'none',
            cursor: rocketAnimated ? 'not-allowed' : 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          Submit
          {rocketAnimated && (
            <span
            style={{
              position: 'absolute',
              top: '50%',
              right: '30',
              animation: 'rocketLeftToRightFast 13s ease-in-out forwards', 
              fontSize: '1.5rem',
            }}
          >
            🛫
          </span>
          
          )}
        </button>
        {status && <p style={{ marginTop: '10px' }}>{status}</p>}
      </form>

      <style>
        {`
          @keyframes rocketLeftToRightFast {
            0% {
              transform: translateY(-50%) translateX(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-50%) translateX(120%);
              opacity: 0;
            }
          }
        `}
      </style>

    </section>
  );
}

export default ContactForm;
