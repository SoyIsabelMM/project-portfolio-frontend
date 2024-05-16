import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ProfileCard.css';

function ProfileCard({ profile }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/profile/${profile._id}`);
  };

  return (
    <div className="profile-card">
      <img
        className="profile-card__image"
        src={profile.happyPlacesImage}
        alt={`${profile.firstName} Happy Place`}
      />

      <div className="profile-card__container">
        <h3 className="profile-card__title">{`${profile.firstName} ${profile.lastName}`}</h3>
        <p className="profile-card__list-item">{profile.happyPlaces}</p>
      </div>
      <button className="profile-card__btn" onClick={handleNavigate}>
        Ver perfil
      </button>
    </div>
  );
}

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    happyPlaces: PropTypes.string.isRequired,
    happyPlacesImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileCard;
