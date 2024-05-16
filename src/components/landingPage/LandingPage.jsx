import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './LandingPage.css';
import icon from '../../images/logo-miniatura.png';
import { fetchProfiles } from '../../utils/userApi';
import ProfileCard from '../profileCard/ProfileCard';

function LandingPage({ onClick, onSearch }) {
  const [query, setQuery] = useState('');
  const [profiles, setProfiles] = useState([]);

  const handleSearchBtnClick = () => {
    console.log('Buscar fotos con la palabra clave:', query);
    onSearch(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profiles = await fetchProfiles();

        setProfiles(profiles);
      } catch (err) {
        console.error('Error fetching profiles:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="landing-page">
      <div className="landing-page__search-box">
        <img
          src={icon}
          alt="logo miniatura PT"
          className="landing-page__logo"
        />
        <input
          type="text"
          placeholder="Encuentrame"
          className="landing-page__search"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button className="landing-page__btn" onClick={handleSearchBtnClick}>
          Buscar
        </button>
      </div>

      <div className="landing-page__cards">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>

      <button className="landing-page__btn-see" onClick={onClick}>
        Ver más perfiles
      </button>
    </section>
  );
}

LandingPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default LandingPage;
