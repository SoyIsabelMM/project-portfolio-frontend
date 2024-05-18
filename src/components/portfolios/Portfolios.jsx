import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './portfolios.css';
import Card from '../card/Card';
import { fetchPortfolios } from '../../utils/userApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Portfolios() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { currentUser } = useContext(CurrentUserContext);

  const _userId = userId ? userId : currentUser._id;
  console.log(currentUser._id);

  const [limit, setLimit] = useState(3);
  const [portfolios, setPortfolios] = useState([]);

  const handleGallery = () => {
    navigate('/gallery');
  };

  const handleCreatePortfolio = () => {
    navigate('/create-portfolio');
  };

  const renderPortfolios = portfolios.map((portfolio) => (
    <Card
      key={portfolio._id}
      id={portfolio._id}
      userName={'_'}
      image={portfolio.images[0]?.imageUrl}
      alt={portfolio.title}
      className="card"
      title={portfolio.title}
      description={portfolio.description}
      numberLike={0}
      onClick={handleGallery}
    />
  ));

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(_userId);
        const portfolios = await fetchPortfolios(_userId);

        setPortfolios(portfolios);
      } catch (err) {
        console.error('Error fetching portfolios', err);
      }
    };

    fetchData();
  }, [_userId]);

  return (
    <section className="portfolios">
      <h2 className="portfolios__title">Portafolios</h2>
      <div className="portfolios__content">{renderPortfolios}</div>

      <div className="portfolios__container-btn">
        <button className="portfolios__btn" onClick={handleSeeMore}>
          Ver más portafolios
        </button>
        <button className="portfolios__btn" onClick={handleCreatePortfolio}>
          Crear Portafolio
        </button>
      </div>
    </section>
  );
}

export default Portfolios;
