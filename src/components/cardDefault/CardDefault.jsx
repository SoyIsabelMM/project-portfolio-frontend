import React from 'react';
import emptyState from '../../images/empty-state.png';

function cardDefaul() {
  return (
    <div className="card">
      <img className="card__image" src={emptyState} alt="Foto por defecto" />

      <div className="card__container">
        <h3 className="card__title">Crea un lindo portafolio</h3>
        <p className="card__description">
          En esta sección mostraremos tus portafolios
        </p>
        <div className="card__divider"></div>
        <div className="card__emotion">
          <div className="card__list-content">
            <ul className="card__list">
              <li className="card__item">
                <span>{0}</span> vistas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cardDefaul;
