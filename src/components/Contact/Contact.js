import React from 'react';
import './Contact.css';

const Contact = () => {
  return(
    <section id="contact" className="contact">
      <h2 className="section-heading">{'< Contact >'}</h2>
      <form className="email-form" method="POST" action="https://formspree.io/david.weinstock@me.com">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" placeholder="Morty Smith" />

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" placeholder="example@email.com" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Type your message here..."></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact;
