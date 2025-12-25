
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Web Development",
      skills: ["PHP", "CodeIgniter", "Zend Framework", "JavaScript", "ExtJS", "Yii"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Database Engineering",
      skills: ["Oracle PL/SQL", "MySQL", "PostgreSQL", "SQL Optimization", "Query Tuning"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "IT Ops & Security",
      skills: ["Bug Tracking", "Security Scanning", "SIT Testing", "Stress Testing", "Reporting"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 text-center">My Key <span className="text-accent">Expertise</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#1d2549] border border-gray-800 p-10 rounded-2xl hover:border-accent transition-colors group">
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
