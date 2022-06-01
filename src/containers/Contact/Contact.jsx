import React from "react";
import { images } from "../../constants";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="app__contact-wrapper">
      <div className="app__contact-header">
        <h2>Contacta Con Nosotros</h2>
        <img src={images.divisor} alt="divisor" />

        <a href="#">
          Paseo del anochecer 347. Solarez, Zapopan, Jalisco. México. C.P.45019
        </a>
      </div>
      <div className="app__contact-body-cards">
        <a href="#">
          <div className="app__contact-body-card">
            <img src={images.email} alt="twitter" />
            <p>contact@thetalentprospect.com</p>
          </div>
        </a>
        <a href="#">
          <div className="app__contact-body-card">
            <img src={images.linkedin} alt="twitter" />
            <p>Talent Prospect</p>
          </div>
        </a>
        <a href="#">
          <div className="app__contact-body-card">
            <img src={images.twitter} alt="twitter" />
            <p>@TalentProspect</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
