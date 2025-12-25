
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
        {/* Contact Details Information */}
        <div className="flex flex-col items-center gap-4 border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row gap-8 text-gray-300">
            <a href="tel:+6281993392626" className="flex items-center gap-3 group hover:text-accent transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-navy-dark transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">+62 819 9339 2626</span>
            </a>
            
            <a href="mailto:nazipzihni.nz@gmail.com" className="flex items-center gap-3 group hover:text-accent transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-navy-dark transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">nazipzihni.nz@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
