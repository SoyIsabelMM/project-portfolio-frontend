import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Card.css';

import emptyState from '../../images/empty-state.png';

function Card({
  userId,
  id,
  views,
  image,
  alt,
  description,
  title,
  className,
  onClick,
}) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/gallery/${userId}/${id}`);
  };

  return (
    <div className={className} key={id}>
      <img className="card__image" src={image || emptyState} alt={alt} />

      <div className="card__container">
        <h3 onClick={handleOnClick} className="card__title">
          {title}
        </h3>
        <p className="card__description">{description}</p>
        <div className="card__divider"></div>
        <div className="card__emotion">
          <div className="card__list-content">
            <ul className="card__list">
              <li className="card__item">
                <span>{views || 0}</span> vistas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  views: PropTypes.number,
  image: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  userName: PropTypes.string,
};

export default Card;
