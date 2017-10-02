import React from 'react';
import './Footer.css';
import heart from '../../assets/heart.svg'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return(
    <footer>
      <span>Made with <img className="heart-icon" src={heart} alt="heart"/> by David Weinstock</span>
      <span>Copyright &#169; {year}</span>
    </footer>
  )
}

export default Footer;
