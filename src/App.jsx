import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/project'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
// import WhatsAppPopup from './components/WhatsappPopup/whatsappPopup'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )

}

export default App
