// src/components/Skills.js
import React from 'react';
import './css/Skills.css';

const skillsData = [
  { name: 'MERN', icon: '🌐' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'SQL', icon: '💾' },
  { name: 'Database Design', icon: '📊' },
];

export const Skills = () => {
  return (
    <section className="skills" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
