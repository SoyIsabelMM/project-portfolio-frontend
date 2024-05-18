import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './portfolios.css';
import Card from '../card/Card';
import { fetchPortfolios } from '../../utils/userApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from '../preloader/Preloader';

function Portfolios() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { currentUser } = useContext(CurrentUserContext);

  const _userId = userId ? userId : currentUser._id;

  const [limit, setLimit] = useState(3);
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCreatePortfolio = () => {
    navigate('/create-portfolio');
  };

  const renderPortfolios = portfolios.map((portfolio) => (
    <Card
      key={portfolio._id}
      userId={portfolio.userId}
      id={portfolio._id}
      userName={'_'}
      image={portfolio.images[0]?.imageUrl}
      alt={portfolio.title}
      className="card"
      title={portfolio.title}
      description={portfolio.description}
      views={portfolio.views}
    />
  ));

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const portfolios = await fetchPortfolios(_userId);

        setPortfolios(portfolios);
      } catch (err) {
        console.error('Error fetching portfolios', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_userId]);

  return (
    <section className="portfolios">
      <h2 className="portfolios__title">Portafolios</h2>

      {loading ? (
        <Preloader />
      ) : (
        <div className="portfolios__content-portfolio">{renderPortfolios}</div>
      )}

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
