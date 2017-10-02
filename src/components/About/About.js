import React from 'react';
import avatar from '../../assets/avatar.jpg'
import './About.css';

const About = () => {
  return(
    <section className="about">
      <h2 className="section-heading">{'< About >'}</h2>
      <div className="about-text">
        <img className="avatar" src={avatar} alt="Profile Pic"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod ea non occurrentia fingunt, vincunt Aristonem; In schola desinis. Quae contraria sunt his, malane? Duo Reges: constructio interrete. Beatus sibi videtur esse moriens. Videamus igitur sententias eorum, tum ad verba redeamus. Inde igitur, inquit, ordiendum est. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc.</p>
      </div>
    </section>
  )
}

export default About;
