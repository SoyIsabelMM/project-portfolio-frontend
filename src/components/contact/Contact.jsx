import React from "react";
import "./Contact.css";
import FormContact from "../formContact/FormContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__no-parallax contact_position">
        <h2 className="contact__text">Contacto</h2>
        <FormContact />
      </div>

      <div className="contact__parallax contact__parallax_bg contact_position ">
        <h3 className="contact__text contact__text_size">
          Conoceme más en mis redes sociales
        </h3>
      </div>

      <div className="contact__no-parallax contact__no-parallax_height contact_position ">
        <h3 className="contact__social-text">
          Visítanos en nuestras redes sociales
        </h3>
        <div className="contact__social-container">
          <div className="contact__social-networks">
            <FontAwesomeIcon
              className="contact__social-icon"
              icon={faInstagram}
            />
          </div>
          <div className="contact__social-networks">
            <FontAwesomeIcon
              className="contact__social-icon"
              icon={faLinkedinIn}
            />
          </div>
          <div className="contact__social-networks">
            <FontAwesomeIcon
              className="contact__social-icon"
              icon={faFacebookF}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
