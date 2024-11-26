import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Confetti from 'react-confetti'; 

function App() {
  const [showConfetti, setShowConfetti] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;