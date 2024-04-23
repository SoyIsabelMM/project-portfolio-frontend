import React, { useState } from "react";
import "./scard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

function Card({
  key,
  image,
  alt,
  description,
  title,
  className,
  userName,
  numberLike,
}) {
  const [islike, setIsLike] = useState(false);

  const menu = (
    <FontAwesomeIcon className="card__menu" icon={faEllipsisVertical} />
  );

  const likeIcon = islike ? faHeart : farHeart;

  const toggleLike = () => {
    setIsLike(!islike);
  };

  return (
    <div className={className} key={key}>
      <img className="card__image" src={image} alt={alt} />

      <div className="card__container">
        <div className="card__content-menu">
          <h2 className="card__name">{userName}</h2>
          {menu}
          <div className="card__modal-menu">
            <p className="card__modal-share">Compartir</p>
          </div>
        </div>

        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__divider"></div>
        <div className="card__emotion">
          <div className="card__list-content">
            <ul className="card__list">
              <li className="card__item">
                <span>0</span> vistas
              </li>
              <li className="card__item">
                <span>0</span> comentarios
              </li>
            </ul>
          </div>

          <div>
            {" "}
            <span className="card__like-number">{numberLike}</span>
            <FontAwesomeIcon
              className={`card__like ${islike ? "card__like_active" : ""}`}
              icon={likeIcon}
              onClick={toggleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
