import React from "react";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";

function ProfileCard({ image, alt, userName, description, className }) {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/profile");
  };

  return (
    <div className={className}>
      <img className="profile-card__image" src={image} alt={alt} />

      <div className="profile-card__container">
        <h3 className="profile-card__title">{userName}</h3>
        <div className="profile-card__description">
          <ul className="profile-card__list">
            <li className="profile-card__list-item">Youtuber</li>
            <li className="profile-card__list-item">Fotografo</li>
            <li className="profile-card__list-item">Analista</li>
            <li className="profile-card__list-item">Modelo</li>
          </ul>
        </div>
      </div>
      <button className="profile-card__btn" onClick={onNavigate}>
        Ver más
      </button>
    </div>
  );
}

export default ProfileCard;
