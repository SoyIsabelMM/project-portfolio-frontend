import { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const baseUrl = import.meta.env.VITE_API_URL;

function Form({ title, children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (evt) => {
    if (!email || !password) {
      alert('email y pass son requeridos');
    }

    evt.preventDefault();
    const url = `${baseUrl}/users/login`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert(`Hola ${data.name}`);

        return;
      }

      console.log('no se ha podido iniciar sesión');
    } catch (error) {
      console.log('error iniciando sesión', error);
    }
  };

  return (
    <div className="form">
      <h3 className="form__title">{title}</h3>
      <form className="form__container">
        <input
          className="form__input"
          type="email"
          placeholder="Correo electrónico"
          id="userName"
          minLength={3}
          maxLength={40}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form__input"
          type="password"
          placeholder="Contraseña"
          id="password"
          minLength={3}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form__btn-container">
          <button className="form__btn">Regístrate</button>
          <button className="form__btn form__btn_google" onClick={handleLogin}>
            {' '}
            Iniciar sesión
          </button>
        </div>
      </form>
      {children}
    </div>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Form;
