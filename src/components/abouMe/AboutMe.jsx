import React, { useEffect, useState } from "react";
import { getPhotos } from "../../utils/pexelData";
import Typewriter from "typewriter-effect";
import "./AboutMe.css";

function AboutMe({ alt }) {
  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(8);
  const [historyLimit, setHistoryLimit] = useState(4);

  const paragraph = (
    <p className="about-me__phrases">
      De tres cosas estaba absolutamente segura. Primera, Edward era un vampiro.
      La segunda, había una parte de él y no sabía si era la parte dominante,
      sedienta por mi sangre. Y la tercera estaba incondicionalmente e
      irrevocablemente enamorada de él
    </p>
  );

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setImages(data);
      })
      .catch((err) => {
        console.error("Error fetching popular photos:", err);
      });
  }, []);

  const renderImageElements = () => {
    return images.slice(0, historyLimit).map((image, index) => {
      if (index % 2 === 0) {
        return (
          <React.Fragment key={image.id}>
            <img
              className="about-me__phrases-image"
              src={image.src.medium}
              alt={image.photographer}
            />
            {paragraph}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={image.id}>
            {paragraph}
            <img
              className="about-me__phrases-image"
              src={image.src.medium}
              alt={image.photographer}
            />
          </React.Fragment>
        );
      }
    });
  };

  return (
    <section className="about-me">
      <div className="about-me__banner-container">
        <img
          src="https://img.freepik.com/fotos-premium/mujer-sonriendo-felizmente-playa_816336-123.jpg"
          alt="paisaje"
          className="about-me__banner"
        />
        <h2 className="about-me__text">R A C H E L M I L A N O</h2>
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
        {
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Vivo como me lo indica el destino")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Aprendo cada día más")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Comienzo con una taza de café")
                .start();
            }}
          />
        }
      </div>

      <div className="about-me__container-phrases">{renderImageElements()}</div>
    </section>
  );
}

export default AboutMe;
