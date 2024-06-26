import { useState } from 'react';
import PropTypes from 'prop-types';

import './FormContact.css';
import { sendContactEmail } from '../../utils/userApi';

function FormContact({ userId }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formContactMessage, setFormContactMessage] = useState(
    '¡Gracias por enviar tu mensaje!'
  );
  const [subtmitted, setSubmitted] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSubmitted(false);

    console.log('datos del formulario', {
      userId,
      firstName,
      lastName,
      email,
      message,
    });

    try {
      await sendContactEmail({ userId, firstName, lastName, email, message });
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      setFormContactMessage('¡Gracias por enviar tu mensaje!');
      setSubmitted(true);
    } catch (error) {
      setFormContactMessage('¡No se ha podido enviar tu mensaje!');
      setSubmitted(true);
    }
  };

  const onChangeFirstName = (evt) => {
    setFirstName(evt.target.value);
  };

  const onChangeLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const onChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const onChangeMessage = (evt) => {
    setMessage(evt.target.value);
  };

  return (
    <div className="form-contact">
      <form className="form-contact__content" onSubmit={handleSubmit}>
        <h3 className="form-contact__title">Ponte en contacto conmigo</h3>

        <div className="form-contact__box">
          <label className="form-contact__label">
            Nombre
            <input
              className="form-contact__input"
              type="text"
              value={firstName}
              onChange={onChangeFirstName}
            />
          </label>
          <label className="form-contact__label">
            Apellido
            <input
              className="form-contact__input"
              type="text"
              value={lastName}
              onChange={onChangeLastName}
            />
          </label>{' '}
        </div>

        <div className="form-contact__box form-contact__box_direction">
          <label className="form-contact__label">
            Email
            <input
              className="form-contact__input form-contact__input_width"
              type="text"
              value={email}
              onChange={onChangeEmail}
            />
          </label>
          <label className="form-contact__label">
            Escribe un mensaje
            <textarea
              className="form-contact__input form-contact__input_width"
              type="text"
              value={message}
              onChange={onChangeMessage}
            />
          </label>
        </div>
        <div className="form-contact__content-btn">
          <button className="form-contact__contact-btn">Enviar</button>
          {subtmitted && (
            <span className="form-contact__message">{formContactMessage}</span>
          )}
        </div>
      </form>
    </div>
  );
}

FormContact.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default FormContact;
