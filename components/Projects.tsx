
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Geo-location Based Booking",
      desc: "Comprehensive system for potential customer bookings, integrated with Google Maps API for precise location tracking.",
      tag: "Web Dev & GIS"
    },
    {
      title: "Automation Solver",
      desc: "A semi-AI application designed to streamline helpdesk operations, automatically resolving recurring customer issues.",
      tag: "AI & Automation"
    },
    {
      title: "User Experience System",
      desc: "Empowering frontliners with real-time data to assist after-sales services, significantly reducing resolution time.",
      tag: "Enterprise UX"
    },
    {
      title: "Security Auditing Engine",
      desc: "Implemented automated security flaw scanning and bug tracking to maintain 99.9% application uptime.",
      tag: "IT Operations"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#161d3a]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black mb-4">Portfolio</h2>
            <p className="text-gray-500">Selected projects and professional experiences.</p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-8 bg-gray-800"></div>
          <span className="text-accent font-bold uppercase tracking-widest text-sm">Professional Work</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-navy-dark p-12 rounded-3xl group hover:-translate-y-2 transition-transform shadow-2xl">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-6">
                {proj.tag}
              </span>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-accent transition-colors">{proj.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {proj.desc}
              </p>
              <div className="flex items-center text-white font-bold cursor-pointer group-hover:translate-x-2 transition-transform">
                Read Case Study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
