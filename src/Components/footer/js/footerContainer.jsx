import React from "react";
import "../css/footerContainer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_brand">
        <img
          src="https://i.imgur.com/blDL6KC.png"
          alt="Footer-Rodirguez-law-group-brand-logo"
          className="footer_img"
        />
      </div>
      <div className="footer_txtContainer">
        <div className="footer_quote">
          <p className="footer_contactTitle">Better yet, see us in person!</p>
          <p className="footer_contactText">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
        </div>
        <div className="footer_contactDate">
          <p className="footer_contactTitle">Offices</p>
          <p className="footer_contactText">
            814 Ponce de León Blvd. suite 201 Coral Gables, Florida 33 134
          </p>
        </div>
        <div className="footer_contactDate">
          <p className="footer_contactTitle">Contact</p>
          <p className="footer_contactText">Phone: (305) 442-4322</p>
          <p className="footer_contactText">Fax: (305) 442-4323</p>
        </div>
        <div className="footer_contactDate">
          <p className="footer_contactTitle">Hours</p>
          <p className="footer_contactText">09:00 a. m. – 05:00 p. m.</p>
        </div>
      </div>
      <div className="footer_copy">
        <p className="footer_contactText">
          The contents of this website are the property of Rodriguez Law Group
          and are protected by copyright. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
