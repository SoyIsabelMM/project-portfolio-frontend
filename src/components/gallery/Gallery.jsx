import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Preloader from '../preloader/Preloader';
import './Gallery.css';

function Gallery() {
  const [data, setData] = useState({ img: ' ', i: 0 });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const viewImage = (img, i) => {
    setData({ img, i });
    setOpen(true);
  };

  const closeImage = (evt) => {
    if (evt.target === evt.currentTarget) {
      setData({ img: '', i: 0 });
      setOpen(false);
    }
  };

  const images = [
    'https://picsum.photos/2000/2500',
    'https://picsum.photos/3000/2000',
    'https://picsum.photos/4000/3000',
    'https://picsum.photos/3000/1500',
    'https://picsum.photos/2000/2165',
    'https://picsum.photos/1500/1500',
    'https://picsum.photos/2000/2500',
    'https://picsum.photos/3000/2000',
    'https://picsum.photos/4000/3000',
    'https://picsum.photos/3000/1500',
    'https://picsum.photos/2000/2165',
    'https://picsum.photos/1500/1500',
  ];

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'previous-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }
  };

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = images[data.i];
      img.onload = () => setLoading(false);
    };

    loadImage();

    return () => {
      setData({ img: '', i: 0 });
      setOpen(false);
    };
  }, []);

  return (
    <>
      {open && (
        <div className="gallery__modal" onClick={closeImage}>
          <div className="gallery__modal-box">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="gallery__arrow-icon"
              onClick={() => imgAction('previous-img')}
            />
            <img className="gallery__modal-img" src={data.img} />
            <FontAwesomeIcon
              id="right"
              icon={faArrowRight}
              className="gallery__arrow-icon"
              onClick={() => imgAction('next-img')}
            />
          </div>

          <button className="gallery__modal-close" onClick={closeImage}>
            Cerrar
          </button>
        </div>
      )}

      <section className="gallery">
        <h2 className="gallery__title">Aqui estoy paseando en villarrica</h2>
        <div className="gallery__container">
          <p className="gallery__paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, ex eveniet magnam consequatur harum, natus non placeat
            architecto facilis voluptatibus autem ad molestias, ipsum maiores?
            Animi aliquid architecto similique tenetur!
          </p>

          {loading ? (
            <Preloader />
          ) : (
            <div className="gallery__content-image">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="15px">
                  {images.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      className="gallery__image"
                      alt=""
                      onClick={() => viewImage(image, i)}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Gallery;
