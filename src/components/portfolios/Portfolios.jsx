import React, { useState } from "react";
import "./portfolios.css";
import data from "../../utils/data.json";
import Card from "../card/Card";

function Portfolios() {
  const [limit, setLimit] = useState(3);

  const renderPortfolios = data
    .slice(0, limit)
    .map((data, index) => (
      <Card
        key={index}
        userName={data.userName}
        image={data.image}
        alt={data.alt}
        className="card"
        title={data.title}
        description={data.description}
        numberLike={data.like}
      />
    ));

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  return (
    <section className="portfolios">
      <h2 className="portfolios__title">Portafolios</h2>
      <div className="portfolios__content">{renderPortfolios}</div>
      <button className="portfolios__btn" onClick={handleSeeMore}>
        Ver más portafolios
      </button>
    </section>
  );
}

export default Portfolios;
