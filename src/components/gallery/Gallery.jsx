import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Preloader from '../preloader/Preloader';
import './Gallery.css';
import { getPortfolio, addViewToPortfolio } from '../../utils/userApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Gallery() {
  const navigate = useNavigate();
  const { userId, portfolioId } = useParams();

  const { currentUser } = useContext(CurrentUserContext);

  const [data, setData] = useState({ img: ' ', i: 0 });
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [portfolio, setPortfolio] = useState({});

  const handleEditPortfolio = () => {
    navigate(`/create-portfolio/${portfolioId}`);
  };

  const viewImage = (img, i) => {
    setData({ img, i });
    setOpen(true);
  };

  const imagesSizes = [
    { w: 280, h: 380 },
    { w: 320, h: 200 },
    { w: 380, h: 280 },
    { w: 300, h: 160 },
    { w: 200, h: 340 },
    { w: 150, h: 260 },
    { w: 200, h: 250 },
    { w: 300, h: 200 },
    { w: 400, h: 300 },
    { w: 300, h: 150 },
    { w: 200, h: 216 },
    { w: 150, h: 150 },
  ];

  const imgAction = (action) => {
    let i = data.i;

    if (action === 'next-img') {
      i = Math.min(i + 1, images.length - 1);
    }
    if (action === 'previous-img') {
      i = Math.max(i - 1, 0);
    }
    const nextImageUrl = images[i] ? images[i].imageUrl : '';

    setData({ img: nextImageUrl, i });
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

        if (portfolio.images?.length) {
          setImages(portfolio.images);
        } else {
          setImages([
            { imageUrl: 'https://picsum.photos/2000/2500', index: 1 },
            { imageUrl: 'https://picsum.photos/3000/2000', index: 2 },
            { imageUrl: 'https://picsum.photos/4000/3000', index: 3 },
            { imageUrl: 'https://picsum.photos/3000/1500', index: 4 },
            { imageUrl: 'https://picsum.photos/2000/2165', index: 5 },
            { imageUrl: 'https://picsum.photos/1500/1500', index: 6 },
          ]);
        }
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

  const renderImages = () => {
    return images
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
      ));
  };

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
                <Masonry gutter="15px">{renderImages()}</Masonry>
              </ResponsiveMasonry>
            </div>
          )}

          {currentUser._id === userId && (
            <button className="portfolios__btn" onClick={handleEditPortfolio}>
              Editar portafolio
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Gallery;
