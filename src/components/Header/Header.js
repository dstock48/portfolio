import React from 'react';
import Scroll from 'react-scroll';
import './Header.css';

const Link = Scroll.Link;

const Header = () => {

  const thankYouMessage = window.location.hash === '#thanks';
  const scrollDuration = 600;

  return(
    <header>
      {thankYouMessage && <div className="thank-you">
        <svg id='mail-icon' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
          <path className='st0' d='M214.4,244.6L103.6,134.4c3.9-2.2,8.4-3.4,13.2-3.4h278.4c4.8,0,9.3,1.2,13.2,3.4L297.6,244.6l-13.2,13.1 L262,280c-2.1,2.1-4.7,2.5-6,2.5s-3.8-0.3-6-2.5L214.4,244.6z'/>
          <path className='st0' d='M201.3,257.7L92.5,365.8c-1.7-3.5-2.7-7.5-2.7-11.7V157.9c0-3.3,0.6-6.4,1.7-9.3L201.3,257.7z'/>
          <path className='st0' d='M297.6,270.8l108.5,107.9c-3.3,1.5-7,2.3-10.9,2.3H116.8c-3.9,0-7.6-0.8-10.9-2.3l108.5-107.9l22.5,22.3 c5.3,5.2,12.2,7.9,19.1,7.9s13.8-2.6,19.1-7.9L297.6,270.8z'/>
          <path className='st0' d='M422.2,157.9v196.2c0,4.2-1,8.2-2.7,11.7L310.8,257.7l109.8-109.2C421.6,151.5,422.2,154.6,422.2,157.9z'/>
        </svg>
        <p><span>Sent:</span> thanks for your message!</p>
      </div>}
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
