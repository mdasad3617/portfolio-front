import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [rocketAnimated, setRocketAnimated] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setRocketAnimated(true);
    
    const formData = new FormData(form.current);
    const fromName = formData.get('from_name');
    const fromEmail = formData.get('from_email');
    formData.set('from_name', `${fromName} <${fromEmail}>`);

    emailjs
      .sendForm(
        'service_8khrh7q',
        'template_0tip5gy',
        form.current,
        'ftj7l61wGTTjuB3vJ'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.error('Submission error:', error.text);
        }
      )
      .finally(() => {
        setRocketAnimated(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative p-12"
      style={{
        backgroundImage: "url('/images/key.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10px',
        color: 'white',
        position: 'relative',
        maxWidth: '2800px',
        textAlign: 'center',
        borderRadius: '0',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2 className="text-5xl font-bold mb-10 text-center" style={{
        color: '#ff6f61',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8), 3px 3px 10px rgba(255, 255, 255, 0.4)',
        fontFamily: "'Raleway', sans-serif",
      }}>
        Contact Me
      </h2>

      <form
  ref={form}
  onSubmit={sendEmail}
  className="flex flex-col gap-4 max-w-md mx-auto p-8"
  style={{
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  }}
>
  <input
    type="text"
    name="from_name"
    placeholder="Your Name"
    required
    className="p-3 rounded-lg border border-gray-300 text-black bg-white bg-opacity-80"
  />
  <input
    type="email"
    name="to_name"
    placeholder="Your Email"
    required
    className="p-3 rounded-lg border border-gray-300 text-black bg-white bg-opacity-80"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    required
    rows="4"
    className="p-3 rounded-lg border border-gray-300 text-black bg-white bg-opacity-80 resize-none"
  />
  <button
    type="submit"
    disabled={rocketAnimated}
    className="relative bg-[#ff6f61] text-white py-3 px-6 rounded-full hover:bg-[#e5625b] transition-colors overflow-hidden disabled:cursor-not-allowed"
  >
    Submit
    {rocketAnimated && (
      <span
        className="absolute top-1/2 right-8 text-2xl"
        style={{
          animation: 'rocketLeftToRightFast 1.3s ease-in-out forwards',
        }}
      >
        🛫
      </span>
    )}
  </button>
  {status && (
    <p className="text-center mt-4 font-medium" style={{
      color: status.includes('success') ? '#4CAF50' : '#f44336'
    }}>
      {status}
    </p>
  )}
</form>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default ContactForm;