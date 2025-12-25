
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#bdf347] opacity-[0.03] skew-x-12 transform translate-x-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-accent font-semibold tracking-widest uppercase mb-4 animate-pulse">
            9+ Fullstack Web Developer | Application Support Specialist
          </h2>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            Nazip<br />
            <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Designing scalable, user-centric applications with robust MVC architecture and automated CI/CD pipelines. 
            Delivering high-performance Full-stack solutions and mission-critical application support.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-accent text-navy-dark px-10 py-4 font-bold rounded-sm hover:scale-105 transition-transform inline-block"
            >
              View My Work
            </a>
            <div className="flex items-center gap-6 ml-4">
              <a href="https://bit.ly/3ScYIlH" target="_blank" className="hover:text-accent transition-colors">GitHub</a>
              <a href="https://bit.ly/4lyLiOq" target="_blank" className="hover:text-accent transition-colors">GitLab</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
