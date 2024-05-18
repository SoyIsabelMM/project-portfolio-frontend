import { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import emptyState from '../../images/empty-state.png';

function Card({
  id,
  likes,
  image,
  alt,
  description,
  title,
  className,
  onCardLike,
  onClick,
}) {
  const [islike, setIsLike] = useState(false);

  const handleCardLike = () => {
    onCardLike();
  };

  const likeIcon = islike ? faHeart : farHeart;

  const toggleLike = () => {
    setIsLike(!islike);
    handleCardLike();
  };

  return (
    <div className={className} key={id}>
      <img className="card__image" src={image || emptyState} alt={alt} />

      <div className="card__container">
        <h3 onClick={onClick} className="card__title">
          {title}
        </h3>
        <p className="card__description">{description}</p>
        <div className="card__divider"></div>
        <div className="card__emotion">
          <div className="card__list-content">
            <ul className="card__list">
              <li className="card__item">
                <span>0</span> vistas
              </li>
            </ul>
          </div>

          <div>
            {likes?.length !== 0 && (
              <>
                <span className="card__like-number">{likes?.length}</span>
              </>
            )}
            <FontAwesomeIcon
              className={`card__like ${islike ? 'card__like_active' : ''}`}
              icon={likeIcon}
              onClick={toggleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  userName: PropTypes.string,
  onCardLike: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
