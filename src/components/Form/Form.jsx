import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import iconGoogle from "../../images/logo-google.png";
import "./Form.css";

function Form({ title, nameBtn, children }) {
  return (
    <div className="form">
      <h3 className="form__title">{title}</h3>
      <form className="form__container">
        <input
          className="form__input"
          type="email"
          placeholder="Correo electrónico"
          id="userName"
          minLength={3}
          maxLength={40}
        />
        <input
          className="form__input"
          type="password"
          placeholder="Contraseña"
          id="password"
          minLength={3}
        />
        <div className="form__btn-container">
          <Button className="form__btn" nameBtn={nameBtn} />
          <Button
            className="form__btn form__btn_google"
            nameBtn={nameBtn + " con Google"}
          >
            <img
              className="form__btn-logo"
              src={iconGoogle}
              alt={nameBtn + " con google"}
            />
          </Button>
        </div>
      </form>
      {children}
    </div>
  );
}

export default Form;
