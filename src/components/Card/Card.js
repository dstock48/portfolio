import React from 'react';
import './Card.css';

const Card = (props) => {

  const style = {
    backgroundImage: `url(${props.image})`
  }

  return(
    <a href={props.link} target="_blank" className="project-card">
      <h3 className="project-name">{props.name}</h3>
      <div style={style} className="project-screenshot"></div>
    </a>
  )
}

export default Card;
