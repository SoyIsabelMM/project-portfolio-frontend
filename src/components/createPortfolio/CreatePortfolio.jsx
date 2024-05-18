import React, { useContext, useState } from 'react';
import Textarea from '../textarea/Textarea';
import InputContent from '../inputContent/InputContent';
import { createPortfolio, uploadPortfolioImage } from '../../utils/userApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './CreatePortfolio.css';

function CreatePortfolio() {
  const { currentUser } = useContext(CurrentUserContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [creationResponse, setCreationResponse] = useState(null);

  const [image1, setImage1] = useState(null);
  const [image1Url, setImage1Url] = useState('');

  const [image2, setImage2] = useState(null);
  const [image2Url, setImage2Url] = useState('');

  const [image3, setImage3] = useState(null);
  const [image3Url, setImage3Url] = useState('');

  const [image4, setImage4] = useState(null);
  const [image4Url, setImage4Url] = useState('');

  const [image5, setImage5] = useState(null);
  const [image5Url, setImage5Url] = useState('');

  const [image6, setImage6] = useState(null);
  const [image6Url, setImage6Url] = useState('');

  const handleCreatePortfolio = async (evt) => {
    evt.preventDefault();

    try {
      const response = await createPortfolio(
        title,
        description,
        currentUser.token
      );
      console.log('Te cree un lindo portafolio', response);

      await handleImagesUpload(response._id);
      setCreationResponse(response);
    } catch (err) {
      console.error('Error al crear el portafolio:', err);
      setCreationResponse(null);
    }
  };

  const handleImagesUpload = async (portfolioId) => {
    const imagesUploads = [];
    if (image1) imagesUploads.push(handleUploadImage(portfolioId, 1, image1));
    if (image2) imagesUploads.push(handleUploadImage(portfolioId, 2, image2));
    if (image3) imagesUploads.push(handleUploadImage(portfolioId, 3, image3));
    if (image4) imagesUploads.push(handleUploadImage(portfolioId, 4, image4));
    if (image5) imagesUploads.push(handleUploadImage(portfolioId, 5, image5));
    if (image6) imagesUploads.push(handleUploadImage(portfolioId, 6, image6));

    return await Promise.all(imagesUploads);
  };

  const handleUploadImage = async (portfolioId, index, file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      await uploadPortfolioImage(
        formData,
        portfolioId,
        index,
        currentUser.token
      );
    } catch (error) {
      console.error(`Error uuploading image ${index}:`, error);
    }
  };

  return (
    <section className="create-portfolio">
      <h2 className="create-portfolio__title">Crear Portafolio</h2>
      <form className="create-portfolio__form" onSubmit={handleCreatePortfolio}>
        <div className="create-portfololio__content">
          <h3 className="create-portfolio__subtitle">
            Formulario de Creación de Portafolio
          </h3>

          <InputContent
            type="text"
            classNameInput="create-portfolio__input"
            labelName="Título del portafolio"
            placeholder="ej: Sentada en una pradera"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />

          <Textarea
            className="create-portfolio__textarea"
            name="description"
            id="description"
            placeholder="Cuéntanos de que trata tu portafolio"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 1"
            value={image1Url}
            onChange={(evt) => {
              setImage1(evt.target.files[0]);
              setImage1Url(evt.target.value);
            }}
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 2"
            value={image2Url}
            onChange={(evt) => {
              setImage2(evt.target.files[0]);
              setImage2Url(evt.target.value);
            }}
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 3"
            value={image3Url}
            onChange={(evt) => {
              setImage3(evt.target.files[0]);
              setImage3Url(evt.target.value);
            }}
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 4"
            value={image4Url}
            onChange={(evt) => {
              setImage4(evt.target.files[0]);
              setImage4Url(evt.target.value);
            }}
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 5"
            value={image5Url}
            onChange={(evt) => {
              setImage5(evt.target.files[0]);
              setImage5Url(evt.target.value);
            }}
          />

          <InputContent
            type="file"
            classNameInput="create-portfolio__input"
            labelName="Foto 6"
            value={image6Url}
            onChange={(evt) => {
              setImage6(evt.target.files[0]);
              setImage6Url(evt.target.value);
            }}
          />
        </div>

        <button type="submit" className="create-portfolio__btn">
          Crear
        </button>
      </form>

      {creationResponse && (
        <div>
          <p>El portafolio ha sido creado con éxito.</p>
        </div>
      )}
    </section>
  );
}

export default CreatePortfolio;
