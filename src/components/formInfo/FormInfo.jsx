import { useContext, useState, useEffect } from 'react';
import InputContent from '../inputContent/InputContent';
import Textarea from '../textarea/Textarea';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './FormInfo.css';
import { updateUser, updateUserImage } from '../../utils/userApi';
import { useNavigate } from 'react-router-dom';

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

  //set de input imágenes
  const [banner, setBanner] = useState(null);
  const [bannerUrl, setBannerUrl] = useState('');

  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');

  const [resumeImage, setResumeImage] = useState(null);
  const [resumeImageUrl, setResumeImageUrl] = useState('');

  const [hobbiesImage, setHobbiesImage] = useState(null);
  const [hobbiesImageUrl, setHobbiesImageUrl] = useState('');

  const [activitiesImage, setActivitiesImage] = useState(null);
  const [activitiesImageUrl, setActivitiesImageUrl] = useState('');

  const [happyPlacesImage, setHappyPlacesImage] = useState(null);
  const [happyPlacesImageUrl, setHappyPlacesImageUrl] = useState('');

  const navigate = useNavigate();

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

  const onChangeAvatar = (evt) => {
    setAvatar(evt.target.files[0]);
    setAvatarUrl(evt.target.value);
  };

  const onChangeResumeImage = (evt) => {
    setResumeImage(evt.target.files[0]);
    setResumeImageUrl(evt.target.value);
  };

  const onChangeHobbiesImage = (evt) => {
    setHobbiesImage(evt.target.files[0]);
    setHobbiesImageUrl(evt.target.value);
  };

  const onChangeHappyPlacesImage = (evt) => {
    setHappyPlacesImage(evt.target.files[0]);
    setHappyPlacesImageUrl(evt.target.value);
  };

  const onChangeActivitiesImage = (evt) => {
    setActivitiesImage(evt.target.files[0]);
    setActivitiesImageUrl(evt.target.value);
  };

  const handleUpdateImage = async (target, file) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      await updateUserImage(formData, currentUser.token, target);
    } catch (error) {
      console.error(`Error updating ${target}:`, error);
    }
  };

  const handleUpdateUserInfo = async (evt) => {
    evt.preventDefault();

    const imagesUploads = [];
    if (banner) {
      imagesUploads.push(handleUpdateImage('banner', banner));
    }
    if (avatar) {
      imagesUploads.push(handleUpdateImage('avatar', avatar));
    }
    if (resumeImage) {
      imagesUploads.push(handleUpdateImage('resumeImage', resumeImage));
    }
    if (hobbiesImage) {
      imagesUploads.push(handleUpdateImage('hobbiesImage', hobbiesImage));
    }
    if (activitiesImage) {
      imagesUploads.push(handleUpdateImage('activitiesImage', activitiesImage));
    }
    if (happyPlacesImage) {
      imagesUploads.push(
        handleUpdateImage('happyPlacesImage', happyPlacesImage)
      );
    }

    const updateUserData = {
      ...currentUser,
      firstName,
      lastName,
      country,
      resume,
      instagram,
      facebook,
      linkedin,
      about,
      hobbies,
      activities,
      happyPlaces,
    };

    try {
      await Promise.all(imagesUploads);
      await updateUser(updateUserData, currentUser.token);
      setCurrentUser(updateUserData);
      navigate(`/profile/${currentUser._id}`);
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
            <InputContent
              labelName="Email"
              type={'email'}
              value={email}
              onChange={() => {}}
            />

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
              value={resumeImageUrl}
              onChange={onChangeResumeImage}
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
              labelName="Foto sobre mí"
              type="file"
              value={avatarUrl}
              onChange={onChangeAvatar}
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
              labelName="Foto hobbie"
              type="file"
              value={hobbiesImageUrl}
              onChange={onChangeHobbiesImage}
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
              labelName="Foto actividad física"
              type="file"
              value={activitiesImageUrl}
              onChange={onChangeActivitiesImage}
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
              labelName="Foto de tu lugar feliz"
              type="file"
              value={happyPlacesImageUrl}
              onChange={onChangeHappyPlacesImage}
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
