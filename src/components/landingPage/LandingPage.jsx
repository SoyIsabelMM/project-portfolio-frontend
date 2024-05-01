import React, { useState } from "react";
import "./LandingPage.css";
import icon from "../../images/logo-miniatura.png";

function LandingPage({ children, onClick, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearchBtnClick = () => {
    console.log("Buscar fotos con la palabra clave:", query);
    onSearch(query);
  };

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
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button className="landing-page__btn" onClick={handleSearchBtnClick}>
          Buscar
        </button>
      </div>
      <div className="landing-page__cards">{children}</div>
      <button className="landing-page__btn-see" onClick={onClick}>
        Ver más perfiles
      </button>
    </section>
  );
}

export default LandingPage;
