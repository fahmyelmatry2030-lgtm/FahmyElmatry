import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import NexoAI from './components/NexoAI';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Support Widgets */}
      <WhatsAppWidget />
      <NexoAI />
    </>
  );
}

export default App;
