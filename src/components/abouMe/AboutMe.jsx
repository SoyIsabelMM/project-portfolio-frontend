import React, { useContext, useEffect, useState } from 'react';
import { getPhotos } from '../../utils/pexelData';
import Typewriter from 'typewriter-effect';
import { formatText, defaultBanner } from '../../utils/constant';
import './AboutMe.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { fetchPortfolios } from '../../utils/userApi';
import { useParams } from 'react-router-dom';

function AboutMe() {
  const { userId } = useParams();
  const [imagesMini, setImagesMini] = useState([]);
  const [limit, setLimit] = useState(6);
  const { currentUser } = useContext(CurrentUserContext);

  const _userId = userId ? userId : currentUser._id;

  const userName = `${formatText(currentUser.firstName)} * ${formatText(
    currentUser.lastName
  )}`;

  // useEffect(() => {
  //   getPhotos()
  //     .then((data) => {
  //       setImages(data);
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching popular photos:', err);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imagesPortfolio = await fetchPortfolios(_userId);
        setImagesMini(imagesPortfolio);
      } catch (err) {
        console.error('Error fetching images', err);
      }
    };

    fetchData();
  }, [_userId]);

  return (
    <section className="about-me">
      <div className="about-me__banner-container">
        <img
          src={currentUser.banner || defaultBanner}
          alt={currentUser.resume}
          className="about-me__banner"
        />
        <h2 className="about-me__title">{userName}</h2>
      </div>

      <div className="about-me__render-images">
        {imagesMini.slice(0, limit).map((image) => (
          <div key={image._id} className="about-me__wrapper">
            <img
              className="about-me__image"
              src={image.images[0]?.imageUrl}
              alt={image.title}
            />
            <div className="about-me__overlay">
              <p className="about-me__paragraph">{image.title}</p>
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
          src={currentUser.avatar}
          alt={currentUser.about}
        />
        <p className="about-me__phrases">{currentUser.about}</p>

        <p className="about-me__phrases">{currentUser.hobbies}</p>
        <img
          className="about-me__phrases-image"
          src={currentUser.hobbiesImage}
          alt={currentUser.hobbies}
        />

        <img
          className="about-me__phrases-image"
          src={currentUser.activitiesImage}
          alt={currentUser.activities}
        />
        <p className="about-me__phrases">{currentUser.activities}</p>

        <p className="about-me__phrases">{currentUser.happyPlaces}</p>
        <img
          className="about-me__phrases-image"
          src={currentUser.happyPlacesImage}
          alt={currentUser.happyPlaces}
        />
      </div>
    </section>
  );
}

export default AboutMe;
