import React from "react";
import "./Header.css";
import logoPT from "../../images/Logo-PT.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Header({ children }) {
  const navigate = useNavigate();

  const onNavigate = (evt) => {
    evt.preventDefault();
    navigate("/signup", { state: "success" });
  };
  return (
    <section className="header">
      <div className="header__container">
        <img className="header__logo" src={logoPT} alt="Logo PortFolio" />
        {children}
      </div>
      <div className="header__button">
        <Button className="header__login" nameBtn="Iniciar Sesión" />
        <Button
          className="header__button-register"
          nameBtn="Registro"
          onClick={onNavigate}
        />
      </div>
    </section>
  );
}

export default Header;
