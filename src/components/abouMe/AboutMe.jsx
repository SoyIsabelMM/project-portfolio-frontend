import React, { useContext, useEffect, useState } from 'react';
import { getPhotos } from '../../utils/pexelData';
import { fetchProfile } from '../../utils/userApi';
import Typewriter from 'typewriter-effect';
import { formatText, defaultBanner } from '../../utils/constant';
import './AboutMe.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useParams } from 'react-router-dom';

function AboutMe() {
  const { userId } = useParams();
  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(6);
  const { currentUser } = useContext(CurrentUserContext);

  const [about, setAbout] = useState(null);

  const userName = `${formatText(currentUser.firstName)} * ${formatText(
    currentUser.lastName
  )}`;

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        console.error('Error fetching popular photos:', err);
      });

    const fetchData = async () => {
      try {
        const aboutData = await fetchProfile(userId);

        setAbout(aboutData);
      } catch (err) {
        console.error('Error fetching about data:', err);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <section className="about-me">
      <div className="about-me__banner-container">
        <img
          src={about?.banner || defaultBanner}
          alt={about?.resume}
          className="about-me__banner"
        />
        <h2 className="about-me__title">{userName}</h2>
      </div>

      <div className="about-me__render-images">
        {images.slice(0, limit).map((images) => (
          <div key={images.id} className="about-me__wrapper">
            <img
              className="about-me__image"
              src={images.src.medium}
              alt={images.photographer}
            />
            <div className="about-me__overlay">
              <p className="about-me__paragraph">{images.photographer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="about-me__color">
        <div className="about-me__typewriter">
          {
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Vivo como me lo indica el destino')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Aprendo cada día más')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Comienzo con una taza de café')
                  .start();
              }}
            />
          }
        </div>
      </div>

      <div className="about-me__container-phrases">
        <img
          className="about-me__phrases-image"
          src={about?.avatar}
          alt={about?.about}
        />
        <p className="about-me__phrases">{about?.about}</p>

        <p className="about-me__phrases">{about?.hobbies}</p>
        <img
          className="about-me__phrases-image"
          src={about?.hobbiesImage}
          alt={about?.hobbies}
        />

        <img
          className="about-me__phrases-image"
          src={about?.activitiesImage}
          alt={about?.activities}
        />
        <p className="about-me__phrases">{about?.activities}</p>

        <p className="about-me__phrases">{about?.happyPlaces}</p>
        <img
          className="about-me__phrases-image"
          src={about?.happyPlacesImage}
          alt={about?.happyPlaces}
        />
      </div>
    </section>
  );
}

export default AboutMe;
