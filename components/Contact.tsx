
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8">
          Interested in <br />
          <span className="text-accent">working together?</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm ready to help your business scale with robust Fullstack solutions and dedicated Application Support. 
          Let's build something exceptional together.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a 
            href="mailto:nazipzihni.nz@gmail.com" 
            className="bg-accent text-navy-dark px-12 py-5 font-black text-lg rounded-full hover:scale-110 transition-transform"
          >
            HIRE ME NOW
          </a>
          <div className="text-gray-500">or</div>
          <a 
            href="https://github.com/nazip789" 
            target="_blank"
            className="text-white border-b-2 border-accent pb-1 font-bold hover:text-accent transition-colors"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
