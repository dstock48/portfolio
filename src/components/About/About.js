import React from 'react';
import avatar from '../../assets/avatar.jpg'
import Scroll from 'react-scroll';
import './About.css';
const Element = Scroll.Element;

const About = () => {
  return(
    <Element name="about">
      <section id="about" className="about">
        <h2 className="section-heading">{'< About />'}</h2>
        <div className="about-content">
          <img className="avatar" src={avatar} alt="Headshot"/>
          <div className="text">
            <p>My name is David Weinstock and I'm a front-end web developer based out of Denver, Colorado.</p>
            <p>I just recently completed a 7 month immersive software development program at the <a rel="noopener noreferrer" href="https://www.turing.io" target="_blank">Turing School of Software & Design.</a> This program covered the core languages of JavaScript, HTML, and CSS, along with many other libraries and tools such as jQuery, React, Redux, Node, Express, Webpack, and SASS. Turing puts a great deal of attention into testing code using libraries such as Jest, Enzyme, Mocha, and Chai. Projects are completed both individually and in groups, with a large focus on pair programming and cooperative git workflows.</p>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About;
