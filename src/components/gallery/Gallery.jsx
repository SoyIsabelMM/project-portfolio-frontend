import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Preloader from '../preloader/Preloader';
import './Gallery.css';
import { getPortfolio, addViewToPortfolio } from '../../utils/userApi';

function Gallery() {
  const { userId, portfolioId } = useParams();

  const [data, setData] = useState({ img: ' ', i: 0 });
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [portfolio, setPortfolio] = useState({});

  const viewImage = (img, i) => {
    setData({ img, i });
    setOpen(true);
  };

  const imagesSizes = [
    { w: 200, h: 350 },
    { w: 300, h: 150 },
    { w: 400, h: 200 },
    { w: 300, h: 150 },
    { w: 200, h: 340 },
    { w: 150, h: 150 },
    { w: 200, h: 250 },
    { w: 300, h: 200 },
    { w: 400, h: 300 },
    { w: 300, h: 150 },
    { w: 200, h: 216 },
    { w: 150, h: 150 },
  ];

  const dummyImages = [
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
    if (action === 'next-img' && i < images.length - 1) {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'previous-img' && i > 0) {
      setData({ img: images[i - 1], i: i - 1 });
    }
  };

  const closeImage = (evt) => {
    if (evt.target === evt.currentTarget) {
      setData({ img: '', i: 0 });
      setOpen(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolio = await getPortfolio(userId, portfolioId);
        setPortfolio(portfolio);
        setImages(portfolio.images);
        await addViewToPortfolio(portfolioId);
      } catch (err) {
        console.error('Error al obtener las imágenes del portafolio:', err);
      } finally {
        setLoading(false);
      }

      return () => {
        setData({ img: '', i: 0 });
        setOpen(false);
      };
    };

    fetchData();
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
        <h2 className="gallery__title">{portfolio.title}</h2>
        <div className="gallery__container">
          <p className="gallery__paragraph">{portfolio.description}</p>

          {loading ? (
            <Preloader />
          ) : (
            <div className="gallery__content-image">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="15px">
                  {/* {dummyImages.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      className="gallery__image"
                      alt={`image_${i}`}
                      onClick={() => viewImage(image, i)}
                    />
                  ))} */}

                  {images
                    .sort((a, b) => {
                      return a.index - b.index;
                    })
                    .map((image, i) => (
                      <img
                        key={i}
                        src={image.imageUrl}
                        className="gallery__image"
                        alt={`image_${i}`}
                        onClick={() => viewImage(image.imageUrl, i)}
                        width={imagesSizes[i].w}
                        height={imagesSizes[i].h}
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
