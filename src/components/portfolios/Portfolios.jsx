import React, { useState } from 'react';
import './portfolios.css';
import data from '../../utils/data.json';
import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';

function Portfolios() {
  const [limit, setLimit] = useState(3);

  const navigate = useNavigate();

  const handleGallery = () => {
    navigate('/gallery');
  };

  const handleCreatePortfolio = () => {
    navigate('/create-portfolio');
  };

  const renderPortfolios = data
    .slice(0, limit)
    .map((data) => (
      <Card
        key={data.id}
        image={data.image}
        alt={data.alt}
        className="card"
        title={data.title}
        description={data.description}
        numberLike={data.like}
        onClick={handleGallery}
      />
    ));

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

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
