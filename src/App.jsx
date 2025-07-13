import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/project';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Loader from './components/Loader/loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 6 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
