import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Gallery.css";

function Gallery() {
  const [data, setData] = useState({ img: " ", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const closeImage = (evt) => {
    if (evt.target === evt.currentTarget) {
      setData({ img: "", i: 0 });
    }
  };

  const images = [
    "https://picsum.photos/2000/2500",
    "https://picsum.photos/3000/2000",
    "https://picsum.photos/4000/3000",
    "https://picsum.photos/3000/1500",
    "https://picsum.photos/2000/2165",
    "https://picsum.photos/1500/1500",
  ];

  useEffect(() => {
    return () => {
      setData({ img: "", i: 0 });
    };
  }, []);

  return (
    <>
      {data.img && (
        <div className="gallery__modal" onClick={closeImage}>
          <img className="gallery__modal-img" src={data.img} />
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
        </div>
      </section>
    </>
  );
}

export default Gallery;
