
import React from 'react';
import profileImg from "../assets/profile.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#161d3a]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-accent/10 border-2 border-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
               <img 
                src={profileImg} 
                alt="Nazip Zihni Profile" 
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-navy-dark p-8 rounded-xl font-black text-4xl hidden lg:block">
              9+ <span className="text-xl block font-bold">Years Exp</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-black mb-8">Introduction</h2>
            <div className="w-20 h-2 bg-accent mb-8"></div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Nazip Zihni</h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Hi, I'm as Full-Stack Web Developer with 9+ years of experience, I design and build scalable, 
                user-centric applications by combining modern frameworks with robust architectural patterns. 
                My expertise includes implementing MVC architecture and RESTful API integrations 
                to ensure clean, maintainable, and high-performance codebases.
              </p>
              <p>
                I successfully transitioned a core system from single-billing to multi-billing, 
                integrated GitLab for server-side version control, and established CI/CD pipelines 
                that streamline deployment and minimize downtime. These initiatives have significantly 
                improved efficiency and usability across teams.
              </p>
              <p>
                Beyond my professional work, I also develop custom applications for nonprofit and volunteer organizations, 
                helping reduce operational costs and accelerate administrative workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-bold text-white">Web Development</h4>
                <p className="text-sm text-gray-500">Full-stack</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-bold text-white">Application Support</h4>
                <p className="text-sm text-gray-500">Specialist & Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
