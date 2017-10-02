import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <header>
      {/* <nav>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav> */}
      <div className="hero-text">
        <h1 className="name">David Weinstock</h1>
        <p className="tagline">Front-End Web Developer</p>
      </div>
      <div className='icon-scroll'></div>
    </header>
  )
}

export default Header;
