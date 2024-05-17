import React, { useContext, useState, useEffect } from 'react';
import InputContent from '../inputContent/InputContect';
import Textarea from '../textarea/Textarea';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './FormInfo.css';
import { updateUser, updateUserBanner } from '../../utils/userApi';

function FormInfo() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [about, setAbout] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [activities, setActivities] = useState('');
  const [happyPlaces, setHappyPlaces] = useState('');

  const [banner, setBanner] = useState({});
  const [bannerUrl, setBannerUrl] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName || '');
      setLastName(currentUser.lastName || '');
      setCountry(currentUser.country || '');
      setEmail(currentUser.email || '');
      setResume(currentUser.resume || '');
      setInstagram(currentUser.instagram || '');
      setFacebook(currentUser.facebook || '');
      setLinkedin(currentUser.linkedin || '');
      setAbout(currentUser.about || '');
      setHobbies(currentUser.hobbies || '');
      setActivities(currentUser.activities || '');
      setHappyPlaces(currentUser.happyPlaces || '');
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

  const onChangeInstagram = (evt) => {
    setInstagram(evt.target.value);
  };

  const onChangeFacebook = (evt) => {
    setFacebook(evt.target.value);
  };

  const onChangeLinkedin = (evt) => {
    setLinkedin(evt.target.value);
  };

  const onChangeAbout = (evt) => {
    setAbout(evt.target.value);
  };

  const onChangeHobbies = (evt) => {
    setHobbies(evt.target.value);
  };

  const onChangeActivities = (evt) => {
    setActivities(evt.target.value);
  };

  const onChangeHappyPlaces = (evt) => {
    setHappyPlaces(evt.target.value);
  };

  const onChangeBanner = (evt) => {
    setBanner(evt.target.files[0]);
    setBannerUrl(evt.target.value);
  };

  const handleUpdateBanner = async () => {
    try {
      const formData = new FormData();
      formData.append('banner', banner);

      await updateUserBanner(formData, currentUser.token);
      console.log('Banner updated successfully', currentUser);
    } catch (error) {
      console.error('Error updating banner:', error);
    }
  };

  const handleUpdateUserInfo = async (evt) => {
    evt.preventDefault();
    handleUpdateBanner();

    const updateUserData = {
      ...currentUser,
      firstName: firstName,
      lastName: lastName,
      country: country,
      resume: resume,
      instagram: instagram,
      facebook: facebook,
      linkedin: linkedin,
      about: about,
      hobbies: hobbies,
      activities: activities,
      happyPlaces: happyPlaces,
    };

    try {
      await updateUser(
        updateUserData.firstName,
        updateUserData.lastName,
        updateUserData.country,
        updateUserData.resume,
        updateUserData.instagram,
        updateUserData.facebook,
        updateUserData.linkedin,
        updateUserData.about,
        updateUserData.hobbies,
        updateUserData.activities,
        updateUserData.happyPlaces,
        currentUser.token
      );

      console.log('tengo todo', updateUserData);
      setCurrentUser(updateUserData);
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

            <InputContent
              labelName="Instagram"
              type="url"
              placeholder="url"
              onChange={onChangeInstagram}
              value={instagram}
            />

            <InputContent
              labelName="Facebook"
              type="url"
              placeholder="url"
              onChange={onChangeFacebook}
              value={facebook}
            />
            <InputContent
              labelName="Linkedin"
              type="url"
              placeholder="url"
              onChange={onChangeLinkedin}
              value={linkedin}
            />
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
              value={bannerUrl}
              onChange={onChangeBanner}
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
              value={about}
              onChange={onChangeAbout}
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
              value={hobbies}
              onChange={onChangeHobbies}
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
              value={activities}
              onChange={onChangeActivities}
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
              value={happyPlaces}
              onChange={onChangeHappyPlaces}
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
