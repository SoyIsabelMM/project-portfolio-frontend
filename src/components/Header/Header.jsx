import React from "react";
import "./Header.css";
import logoPT from "../../images/Logo-PT.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Header({ children }) {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/signup", { state: "success" });
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleInit = () => {
    navigate("/");
  };
  return (
    <section className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={logoPT}
          alt="Logo PortFolio"
          onClick={handleInit}
        />
        {children}
      </div>
      <div className="header__button">
        <Button
          className="header__login"
          nameBtn="Iniciar Sesión"
          onClick={handleLogin}
        />
        <Button
          className="header__button-register"
          nameBtn="Registro"
          onClick={handleRegister}
        />
      </div>
    </section>
  );
}

export default Header;
