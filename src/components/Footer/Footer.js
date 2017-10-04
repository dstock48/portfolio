import React from 'react';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  // color randomizer
  // const heartColor = '#000000'.replace(/0/g,function(){return (~~(Math.random()*16)).toString(16).toUpperCase();});

  const heart = <svg className="heart-icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
                  <path
                    fill="#f97287"
                    d='M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z' />
                </svg>

  return(
    <footer>
      <span>Made with {heart} by David Weinstock</span>
      <span>Copyright &#169; {year}</span>
    </footer>
  )
}

export default Footer;
