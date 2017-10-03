import React from 'react';
import avatar from '../../assets/avatar.jpg'
import './About.css';

const About = () => {
  return(
    <section id="about" className="about">
      <h2 className="section-heading">{'< About >'}</h2>
      <div className="about-text">
        <img className="avatar" src={avatar} alt="Profile Pic"/>
        <p>My name is David Weinstock and I'm a front-end web developer based out of Denver, Colorado.</p>
        <p>I just recently finished a 7 month immersive software development program at the <a rel="noopener noreferrer" href="https://www.turing.io" target="_blank">Turing School of Software & Design.</a> This program covered the core languages of JavaScript, HTML, and CSS, along with many other libraries and tools such as jQuery, React, Redux, Node, Express, Webpack, and SASS. Turing puts a great deal of attention into testing code using libraries such as Jest, Enzyme, Mocha, and Chai. Projects are completed both individually and in groups, with a large focus on pair programming and cooperative git workflows.</p>
      </div>
    </section>
  )
}

export default About;
