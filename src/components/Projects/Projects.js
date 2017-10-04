import React from 'react';
import Scroll from 'react-scroll';
import Card from '../Card/Card';
import projectData from '../../helpers/projectData';
import './Projects.css';
const Element = Scroll.Element;


const projectCards = projectData.map((proj, i) => <Card key={`Project-${i}`} name={proj.name} image={proj.screenshot} repoLink={proj.repoLink} liveLink={proj.liveLink} desc={proj.description}/>)

const Projects = () => {

  return(
    <Element name="projects">
      <section id="projects" className="projects">
        <h2 className="section-heading">{'< Projects />'}</h2>
        <div className="project-cards">
          {projectCards}
        </div>
      </section>
    </Element>
  )
}

export default Projects;
