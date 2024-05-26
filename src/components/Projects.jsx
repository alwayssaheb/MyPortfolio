import react ,{useState, useEffect} from 'react';
import ProjectCard from './Projectcard';
import projectsData from './asset.json';
import './css/project.css'

import React from 'react'

export const Projects = () => {
    const [projects , useproject] = useState([]);
    useEffect(() => {
        useproject(projectsData);
    }, []);
  return (
    <section className="projects" id='projects'>
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  </section>
  )
}

export default Projects
