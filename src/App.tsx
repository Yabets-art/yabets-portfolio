import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects/Projects';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import HireModal from './components/HireModal';
import { personalInfo } from './data/portfolio';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        {/* Expose email for mailto fallback in HireModal */}
        {(() => { (window as any).personalEmail = personalInfo.contact.email; return null; })()}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <HireModal />
      </div>
    </ThemeProvider>
  );
}

export default App;