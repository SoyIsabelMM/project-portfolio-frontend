import React from "react";
import "./Card.css";
import avatarDefault from "../../images/avatar-default.png";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Card({ image, alt, userName, description }) {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/portfolio");
  };
  return (
    <div className="card">
      <img className="card__image" src={avatarDefault} alt={alt} />

      <div className="card__container">
        <h3 className="card__title">juana la loca</h3>

        <div className="card__description">
          <ul className="card__list">
            <li className="card__list-item">Youtuber</li>
            <li className="card__list-item">Fotografo</li>
            <li className="card__list-item">Analista</li>
            <li className="card__list-item">Modelo</li>
          </ul>
        </div>
      </div>
      <Button nameBtn="Ver más" className="card__btn" onClick={onNavigate} />
    </div>
  );
}

export default Card;
