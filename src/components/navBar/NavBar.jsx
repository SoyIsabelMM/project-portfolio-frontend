import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './NavBar.css';

function NavBar() {
  const { currentUser } = useContext(CurrentUserContext);
  const isLoggedIn = currentUser !== null;
  const hasSelectedProfile = isLoggedIn && currentUser._id;

  return (
    <div className="nav-bar">
      <ul className="nav-bar__list">
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
    </div>
  );
}

export default NavBar;
