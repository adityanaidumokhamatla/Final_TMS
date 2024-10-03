import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether you have a question about courses, pricing, or anything else, our team is ready to answer all your questions.</p>
        
        <div className="contact-details">
          <div>
            <h3>Email Us</h3>
            <p>support@upskill.com</p>
          </div>
          <div>
            <h3>Call Us</h3>
            <p>(+91) 1234567890</p>
          </div>
          <div>
            <h3>Visit Us</h3>
            <p>456 Upskill Headquarters, Vijayawada City, 522502</p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>  
  );
}

export default Contact;
