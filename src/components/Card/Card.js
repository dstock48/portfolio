import React from 'react';
import './Card.css';

const Card = (props) => {

  // const style = {
  //   backgroundImage: `url(${props.image})`
  // }

  return(
    <a href={props.link} target="_blank" className="project-card">
      <div className="card-text">
        <h3 className="project-name">{props.name}</h3>
        <p className="description">{props.desc}</p>
      </div>
      {/* <div style={style} className="project-screenshot"></div> */}
      <div className="card-image">
        <div className="color-overlay"></div>
        <img className="screenshot" src={props.image} alt="screenshot"/>
      </div>
    </a>
  )
}

export default Card;
