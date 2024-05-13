import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { useParams, Link } from 'react-router-dom';

import './Profile.css';

const baseUrl = import.meta.env.VITE_API_URL;

function Profile() {
  const defaultBanner =
    'https://img.freepik.com/fotos-premium/mujer-sonriendo-felizmente-playa_816336-123.jpg';

  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${baseUrl}/users/${userId}/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const profile = await response.json();
          setProfile(profile);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchProfile();
  }, [userId]);

  if (profile) {
    return (
      <section className="profile">
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
                      profile.name?.replace(' ', '*').split('').join(' ')
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
          <Link to={'/portfolios'}>
            <button className="profile__btn">
              {' '}
              <p className="profile__btn-link">Ver mis proyectos</p>{' '}
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default Profile;
