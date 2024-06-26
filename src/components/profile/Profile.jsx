import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useParams, Link } from 'react-router-dom';
import { fetchProfile } from '../../utils/userApi';
import { defaultBanner } from '../../utils/constant';
import { formatText } from '../../utils/constant';

import './Profile.css';
import Preloader from '../preloader/Preloader';

function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const profileData = await fetchProfile(userId);

        setProfile(profileData);
      } catch (err) {
        console.error('Error fetching profile data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <section className="profile">
      {loading ? (
        <Preloader />
      ) : (
        profile && (
          <div className="profile__content">
            <img
              className="profile__banner"
              src={profile.banner || defaultBanner}
              alt="banner portada"
            />
            <div className="profile__name-user">
              {
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Bienvenido a mi Portafolio')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        `${formatText(profile.firstName)} * ${formatText(
                          profile.lastName
                        )}`
                      )
                      .start();
                  }}
                />
              }
            </div>

            <div className="profile__history">
              <p className="profile__history-description">
                {profile.resume ||
                  `El arte es un lenguaje universal que trasciende barreras
              culturales y lingüísticas, y tiene el poder de emocionar, inspirar
              y transformar a quienes lo experimentan. Siglos y siglos de
              historia demuestran que las obras de arte son parte de la crónica
              de la evolución de la humanidad. Transmite reflexiones, momentos
              históricos, así como sentimientos y sensaciones. El arte es
              comunicación y permite que personas de diferentes culturas y
              épocas confluyan entre sí a través de imágenes, sonidos e
              historias. El arte es también un catalizador de emociones y un
              activador del pensamiento.`}
              </p>
            </div>

            <div className="profile__content-btn">
              <Link to={`/portfolios/${userId}`}>
                <button className="profile__btn">
                  {' '}
                  <p className="profile__btn-link ">Ver portafolios</p>{' '}
                </button>
              </Link>

              <Link to={`/contact/${userId}`}>
                <button className="profile__btn  ">
                  {' '}
                  <p className="profile__btn-link">Contacto</p>{' '}
                </button>
              </Link>

              <Link to={`/about-me/${userId}`}>
                <button className="profile__btn  ">
                  {' '}
                  <p className="profile__btn-link">Sobre mí</p>{' '}
                </button>
              </Link>
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default Profile;
