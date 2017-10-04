import React from 'react';
import Scroll from 'react-scroll';
import './Header.css';

const Link = Scroll.Link;

const Header = () => {

  const scrollDuration = 600

  console.log(window.location);

  return(
    <header>
      <div className="hero-text">
        <h1 className="name">David Weinstock</h1>
        <p className="tagline">Front-End Web Developer</p>
      </div>
      <nav>
        <Link to="about" smooth={true} duration={scrollDuration}>About</Link>
        <Link to="projects" smooth={true} duration={scrollDuration}>Projects</Link>
        <Link to="contact" smooth={true} duration={scrollDuration}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
