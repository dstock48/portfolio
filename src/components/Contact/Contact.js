import React from 'react';
import './Contact.css';

const Contact = () => {
  return(
    <section id="contact" className="contact">
      <h2 className="section-heading">{'< Contact >'}</h2>
      <form className="email-form" method="POST" action="https://formspree.io/david.weinstock@me.com">
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact;
