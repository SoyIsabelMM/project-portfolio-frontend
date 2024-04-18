import React from "react";
import "./LandingPage.css";
import icon from "../../images/logo-miniatura.png";

function LandingPage({ children }) {
  return (
    <section className="landing-page">
      <div className="landing-page__search-box">
        <img
          src={icon}
          alt="logo miniatura PT"
          className="landing-page__logo"
        />
        <input
          type="text"
          placeholder="Encuentrame"
          className="landing-page__search"
        />
        <button className="landing-page__btn">Buscar</button>
      </div>
      <div className="landing-page__cards">{children}</div>
    </section>
  );
}

export default LandingPage;
