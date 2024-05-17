import React from 'react';
import Textarea from '../textarea/Textarea';
import './CreatePortfolio.css';
import InputContent from '../inputContent/InputContent';

function CreatePortfolio() {
  return (
    <section className="create-portfolio">
      <h2 className="create-portfolio__title">Crear Portafolio</h2>
      <form className="create-portfolio__form">
        <div className="create-portfololio__content">
          <h3 className="create-portfolio__subtitle">
            Formulario de Creación de Portafolio
          </h3>

          <InputContent
            type="text"
            classNameInput="create-portfolio__input"
            labelName="Título del portafolio"
            placeholder="ej: Sentada en una pradera"
          />

          <Textarea
            className="create-portfolio__textarea"
            name="summary"
            id="summary"
            placeholder="Cuéntanos de que trata tu portafolio"
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 1"
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 2"
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 3"
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 4"
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 5"
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 6"
          />
        </div>
      </form>
      <button className="create-portfolio__btn">Crear</button>
    </section>
  );
}

export default CreatePortfolio;
