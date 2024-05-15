import React from 'react';
import './CreatePortfolio.css';

function CreatePortfolio() {
  return (
    <section className="create-portfolio">
      <h2 className="create-portfolio__title">Crear Portafolio</h2>
      <form className="create-portfolio__form">
        <div className="create-portfololio__content">
          <h3 className="create-portfolio__subtitle">
            Formulario de Creación de Portafolio
          </h3>
          <input
            className="create-portfolio__input"
            type="text"
            placeholder="Elige el titulo del portafolio"
            id="title"
            required
          />
          <textarea
            className="create-portfolio__textarea"
            name="summary"
            id="summary"
            placeholder="Cuentanos de que trata tu portafolio"
            required
          ></textarea>
          <label className="create-portfolio__label">
            Sube tus imágenes
            <input
              className="create-portfolio__input "
              type="file"
              id="photos"
              name="photos"
              accept="image/*"
              multiple
              required
            />
          </label>
        </div>
      </form>
      <button className="create-portfolio__btn">Crear</button>
    </section>
  );
}

export default CreatePortfolio;
