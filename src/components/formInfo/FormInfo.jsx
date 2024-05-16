import React, { useContext, useState, useEffect } from 'react';
import InputContent from '../inputContent/InputContect';
import Textarea from '../textarea/Textarea';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './FormInfo.css';
import { updateUser } from '../../utils/userApi';

function FormInfo() {
  const { currentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName || '');
      setLastName(currentUser.lastName || '');
      setCountry(currentUser.country || '');
      setEmail(currentUser.email || '');
      setResume(currentUser.resume || '');
    }
  }, [currentUser]);

  const onChangeFirstName = (evt) => {
    setFirstName(evt.target.value);
  };

  const onChangeLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const onChangeCountry = (evt) => {
    setCountry(evt.target.value);
  };

  const onChangeResume = (evt) => {
    setResume(evt.target.value);
  };

  const handleUpdateUserInfo = async (evt) => {
    evt.preventDefault();

    const updateUserData = {
      ...currentUser,
      firstName: firstName,
      lastName: lastName,
      country: country,
      resume: resume,
    };

    try {
      await updateUser(
        updateUserData.firstName,
        updateUserData.lastName,
        updateUserData.country,
        updateUserData.resume,
        currentUser.token
      );
    } catch (err) {
      console.error('Error al guardar la información del usuario:', err);
    }
  };

  return (
    <section className="form-info">
      <h2 className="form-info__title">Edita tu cuenta</h2>

      <div className="form-info__container">
        <form className="form-info__form" onSubmit={handleUpdateUserInfo}>
          <h3 className="form-info__subtitle">Personal</h3>

          <div className="form-info__content-input">
            <InputContent
              labelName="Nombre"
              type="text"
              onChange={onChangeFirstName}
              value={firstName}
            />

            <InputContent
              labelName="Apellido"
              type="text"
              onChange={onChangeLastName}
              value={lastName}
            />

            <InputContent
              labelName="País"
              type="text"
              onChange={onChangeCountry}
              value={country}
            />
          </div>

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Contacto</h3>

          <div className="form-info__content-input">
            <InputContent labelName="Email" type={'email'} value={email} />

            <InputContent labelName="Instagram" type="url" placeholder="url" />

            <InputContent labelName="Facebook" type="url" placeholder="url" />
            <InputContent labelName="Linkedin" type="url" placeholder="url" />
          </div>

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Reseña</h3>

          <div className="form-info__review">
            <Textarea
              name="resume"
              id="resume"
              value={resume}
              onChange={onChangeResume}
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

          <button type="submit" className="form-info__btn">
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormInfo;
