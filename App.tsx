
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-12 bg-navy-dark border-t border-gray-900 text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Nazip Zihni. Professional Portfolio.
          </p>
          <div className="flex gap-8 text-gray-400">
            <a href="https://github.com/nazip789" className="hover:text-accent">GitHub</a>
            <a href="https://gitlab.com/nazip789" className="hover:text-accent">GitLab</a>
          </div>
          <p className="text-gray-700 text-sm">
            Crafted with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
