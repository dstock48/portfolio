import React from 'react';
import './Card.css';

const Card = (props) => {

  const screenshot = process.env.NODE_ENV === 'production' ? `https://dstock48.github.io${props.image}` : props.image

  return(
    <div className="project-card">
      <div className="card-image">
        <div className="color-overlay"></div>
        <img className="screenshot" src={screenshot} alt={props.altText}/>
      </div>
      <div className="card-text">
        <h3 className="project-name">{props.name}</h3>
        <div className="links">
          {props.repoLink && <a href={props.repoLink} target="_blank">View on GitHub</a>}
          {props.liveLink && <span> • <a href={props.liveLink} target="_blank">View Live</a></span>}
        </div>
        <p className="description" dangerouslySetInnerHTML={{__html: props.desc}}></p>
      </div>
    </div>
  )
}

export default Card;
