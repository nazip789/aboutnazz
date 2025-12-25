
// Added missing React import to resolve 'Cannot find namespace React' error in SkillCategory interface.
import React from 'react';

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}