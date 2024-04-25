import React from "react";
import "./Header.css";
import logoPT from "../../images/Logo-PT.png";
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
        <button className="header__login" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button className="header__button-register" onClick={handleRegister}>
          Registro
        </button>
      </div>
    </section>
  );
}

export default Header;
