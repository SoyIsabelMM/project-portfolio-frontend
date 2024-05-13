import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Form.css';

const baseUrl = import.meta.env.VITE_API_URL;

function Form({ title, children }) {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (evt) => {
    evt.preventDefault();
    setErrorMsg("");

    if (!email || !password) {
      setErrorMsg("Email y Contraseña son requeridos");
    }

    try {
      const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const currentUser = await response.json();
        setCurrentUser(currentUser);

        return navigate(`/profile/${currentUser._id}`);
      }

      setErrorMsg("Email o Contraseña incorrectos");
    } catch (error) {
      console.log("error iniciando sesión", error);
      setErrorMsg("Se ha producido un error");
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
          <button className="form__btn" onClick={handleLogin}>
            {" "}
            Iniciar sesión
          </button>
          <div className="form__error-message">{errorMsg}</div>
          <br></br>
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
