import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Header.css';
import logoPT from '../../images/Logo-PT.png';

function Header({ children }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/signup', { state: 'success' });
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
  };

  const handleInit = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={logoPT}
          alt="Logo PortFolio"
          onClick={handleInit}
        />
        {children}
      </div>

      {currentUser ? (
        <div className="header__button">
          <button className="header__login" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className="header__button">
          <button className="header__login" onClick={handleLogin}>
            Iniciar Sesión
          </button>
          <button className="header__button-register" onClick={handleRegister}>
            Registro
          </button>
        </div>
      )}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
