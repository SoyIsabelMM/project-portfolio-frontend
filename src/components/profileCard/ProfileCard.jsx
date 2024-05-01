import React from "react";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";

function ProfileCard({ photo, onClick }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/profile/${photo.photographer_id}`);
  };

  return (
    <div className="profile-card">
      <img
        className="profile-card__image"
        src={photo.src.medium}
        alt={photo.alt}
      />

      <div className="profile-card__container">
        <h3 className="profile-card__title">{photo.photographer}</h3>
        <p className="profile-card__list-item">{photo.alt}</p>
      </div>
      <button className="profile-card__btn" onClick={handleNavigate}>
        Ver perfil
      </button>
    </div>
  );
}

export default ProfileCard;
