import React from 'react';
import Scroll from 'react-scroll';
import './Header.css';

const Link = Scroll.Link;

const Header = () => {
  return(
    <header>
      <div className="hero-text">
        <h1 className="name">David Weinstock</h1>
        <p className="tagline">Front-End Web Developer</p>
      </div>
      <nav>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
