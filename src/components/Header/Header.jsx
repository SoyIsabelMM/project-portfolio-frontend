import React from "react";
import "./Header.css";
import logoPT from "../../images/Logo-PT.png";
import Button from "../Button/Button";

function Header({ children }) {
  return (
    <section className="header">
      <div className="header__container">
        <img className="header__logo" src={logoPT} alt="Logo PortFolio" />
        {children}
      </div>
      <div className="header__button">
        <Button className="header__login" nameBtn="Iniciar Sesión" />
        <Button className="header__button-register" nameBtn="Registro" />
      </div>
    </section>
  );
}

export default Header;
