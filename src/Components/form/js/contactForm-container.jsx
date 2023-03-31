import React from "react";
import "../css/contactForm-container.css";
const ContactForm = () => {
  return (
    <div className="contactFrm">
      <div className="form_title" data-aos="fade-up">
        <p className="form_p">Contact Form</p>
      </div>
      <div className="cta-Separator"></div>

      <form name="contact" method="post" className="form_form">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form_lt" data-aos="zoom-in-down">
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" name="name" className="form_ltInput" required />
        </div>
        <div className="form_lt" data-aos="zoom-in-down">
          <label htmlFor="lastname">Last Name</label> <br />
          <input type="text" id="name" name="name" className="form_ltInput" required />
        </div>
        <div className="form_lt" data-aos="zoom-in-down">
          <label htmlFor="phone">Phone</label> <br />
          <input type="text" id="name" name="name" className="form_ltInput" required />
        </div>
        <div className="form_lt" data-aos="zoom-in-down">
          <label htmlFor="email">Email</label> <br />
          <input type="email" id="email" name="email" className="form_ltInput" required />
        </div>
        <div className="form_lg" data-aos="zoom-in-down">
          <label htmlFor="message">Message</label> <br />
          <textarea id="message" name="message" className="form_lgInput" required ></textarea>
        </div>
        <div className="form_btn">
          <input type="submit" value="Submit message" className="form_btnInput" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
