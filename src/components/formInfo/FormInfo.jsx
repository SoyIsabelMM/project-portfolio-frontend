import React, { useContext, useState } from 'react';
import InputContent from '../inputContent/InputContect';
import Textarea from '../textarea/Textarea';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './FormInfo.css';
import { updateUser } from '../../utils/userApi';

function FormInfo() {
  const { currentUser } = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(currentUser);
  const btnSaveElement = (
    <button type="submit" className="form-info__btn">
      Guardar
    </button>
  );

  // const handleChange = (evt) => {
  //   const { firstName, lastName, country, birthDate, value } = evt.target;

  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     [firstName]: value,
  //     [lastName]: value,
  //     [country]: value,
  //     [birthDate]: value,
  //   }));
  // };

  // const handleUpdateUserInfo = async (evt) => {
  //   evt.preventDefault();

  //   try {
  //     await updateUser(currentUser._id, userData, currentUser.token);
  //     console.log('Se guardó la data correctamente', userData);
  //   } catch (err) {
  //     console.error('Error al guardar la información del usuario:', err);
  //   }
  // };

  return (
    <section className="form-info">
      <h2 className="form-info__title">Edita tu cuenta</h2>

      <div className="form-info__container">
        <form className="form-info__form">
          <h3 className="form-info__subtitle">Personal</h3>

          <div className="form-info__content-input">
            <InputContent labelName="Nombre" type="text" />

            <InputContent labelName="Apellido" type="text" />

            <InputContent labelName="País" type="text" />

            <InputContent labelName="Cumpleaños" type="date" />
          </div>

          {btnSaveElement}

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Contacto</h3>

          <div className="form-info__content-input">
            <InputContent labelName="Email" type={'email'} />

            <InputContent labelName="Instagram" type="url" placeholder="url" />

            <InputContent labelName="Facebook" type="url" placeholder="url" />
            <InputContent labelName="Linkedin" type="url" placeholder="url" />
          </div>
          {btnSaveElement}

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Reseña</h3>

          <div className="form-info__review">
            <Textarea
              name="review"
              id="review"
              type="text"
              placeholder="Cuéntanos sobre tu vida como profesional"
            />

            <InputContent
              className="form-info__label"
              classNameInput="form-info__input"
              labelName="Foto de Perfil"
              type="file"
            />
            <InputContent
              className="form-info__label"
              classNameInput="form-info__input"
              labelName="Banner"
              type="file"
            />
          </div>

          {btnSaveElement}

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Sobre mí</h3>

          <div className="form-info__review">
            <Textarea
              name="about"
              id="about"
              type="text"
              placeholder="Cuéntanos sobre ti en general"
            />

            <InputContent
              className="form-info__label"
              classNameInput="form-info__input"
              labelName="Foto"
              type="file"
            />

            <Textarea
              name="hobbies"
              id="hobbies"
              type="text"
              placeholder="¿Qué te gusta hacer?"
            />

            <InputContent
              className="form-info__label"
              classNameInput="form-info__input"
              labelName="Foto"
              type="file"
            />

            <Textarea
              name="activities"
              id="activities"
              type="text"
              placeholder="¿Practicas algún deporte o actividad extra?"
            />

            <InputContent
              className="form-info__label"
              classNameInput="form-info__input"
              labelName="Foto"
              type="file"
            />

            <Textarea
              name="happyPlaces"
              id="happyPlaces"
              type="text"
              placeholder="¿Cuál es tu lugar feliz?"
            />

            <InputContent
              className="form-info__label"
              classNameInput="form-info__input"
              labelName="Foto"
              type="file"
            />
          </div>
          {btnSaveElement}
        </form>
      </div>
    </section>
  );
}

export default FormInfo;
