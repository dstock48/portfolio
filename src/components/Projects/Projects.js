import React from 'react';
import Card from '../Card/Card';
import projectData from '../../helpers/projectData';
import './Projects.css';


const projectCards = projectData.map((proj, i) => <Card key={`Project-${i}`} name={proj.name} image={proj.screenshot} link={proj.link}/>)

const Projects = () => {

  return(
    <section id="projects" className="projects">
      <h2 className="section-heading">{'< Projects >'}</h2>
      <div className="project-cards">
        {projectCards}
      </div>
    </section>
  )
}

export default Projects;
