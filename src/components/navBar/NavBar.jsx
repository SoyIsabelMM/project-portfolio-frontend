import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './NavBar.css';

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const isLoggedIn = currentUser !== null;
  const hasSelectedProfile = isLoggedIn && currentUser._id;

  const [isOpen] = useState(false);

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

  return (
    <div
      className={`nav-bar ${!isOpen && !isLoggedIn ? 'nav-bar_height' : ''}`}
    >
      <ul className={`nav-bar__list ${isOpen ? 'open' : ''}`}>
        {isLoggedIn && hasSelectedProfile && (
          <li className="nav-bar__options">
            <NavLink
              className="nav-bar__ref"
              to={`/profile/${currentUser._id}`}
            >
              Perfil
            </NavLink>
          </li>
        )}
        {isLoggedIn && hasSelectedProfile && (
          <li className="nav-bar__options">
            <NavLink className="nav-bar__ref" to="/portfolios">
              Portafolios
            </NavLink>
          </li>
        )}

        {isLoggedIn && hasSelectedProfile && (
          <li className="nav-bar__options">
            <NavLink className="nav-bar__ref" to="/about-me">
              Acerca de
            </NavLink>
          </li>
        )}
        {isLoggedIn && hasSelectedProfile && (
          <li className="nav-bar__options">
            <NavLink className="nav-bar__ref" to="/contact">
              Contacto
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li className="nav-bar__options">
            <NavLink className="nav-bar__ref" to="/edit-info">
              Editar Perfil
            </NavLink>
          </li>
        )}
      </ul>

      {currentUser ? (
        <div className={`nav-bar__content-button ${isOpen ? 'open' : ''}`}>
          <button className="nav-bar__login" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className={`nav-bar__content-button  ${isOpen ? 'open' : ''}`}>
          <button
            className="nav-bar__login nav-bar__login_margin"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
          <button
            className="nav-bar__button-register nav-bar__button-register_margin"
            onClick={handleRegister}
          >
            Registro
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar;
