import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './LandingPage.css';
import { fetchProfiles } from '../../utils/userApi';
import ProfileCard from '../profileCard/ProfileCard';
import Preloader from '../preloader/Preloader';

function LandingPage() {
  const [search, setSearch] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('hola');

  const fetchData = async (search) => {
    try {
      setLoading(true);
      const profiles = await fetchProfiles(search);

      setProfiles(profiles);
    } catch (err) {
      console.error('Error fetching profiles:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (evt) => {
    evt.preventDefault();
    await fetchData(search);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="landing-page">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="landing-page__search-box">
            <form className="landing-page__form-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Encuentrame"
                className="landing-page__search"
                value={search}
                onChange={(evt) => setSearch(evt.target.value)}
              />
              <button className="landing-page__btn" onClick={handleSearch}>
                Buscar
              </button>
            </form>
          </div>

          <div className="landing-page__cards">
            {profiles.map((profile, index) => (
              <ProfileCard key={index} profile={profile} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

LandingPage.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default LandingPage;
