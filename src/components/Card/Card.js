import React from 'react';
import './Card.css';

const Card = (props) => {

  // const style = {
  //   backgroundImage: `url(${props.image})`
  // }

  return(
    <div className="project-card">
      <div className="card-image">
        <div className="color-overlay"></div>
        <img className="screenshot" src={props.image} alt={props.altText}/>
      </div>
      <div className="card-text">
        <h3 className="project-name">{props.name}</h3>
        <div className="links">
          {props.repoLink && <a href={props.repoLink} target="_blank">View on GitHub</a>}
          {props.liveLink && <span> • <a href={props.liveLink} target="_blank">View Live</a></span>}
        </div>
        <p className="description">{props.desc}</p>
      </div>
    </div>
  )
}

export default Card;
