import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__options">
          <NavLink end className="nav-bar__ref" to="/profile">
            Perfil
          </NavLink>
        </li>
        <li className="nav-bar__options">
          <NavLink className="nav-bar__ref" to="/portfolios">
            Portafolios
          </NavLink>
        </li>
        <li className="nav-bar__options">
          <NavLink className="nav-bar__ref" to="/about-me">
            Acerca de
          </NavLink>
        </li>
        <li className="nav-bar__options">
          <NavLink className="nav-bar__ref" to="/contact">
            Contacto
          </NavLink>
        </li>
        <li className="nav-bar__options">
          <NavLink className="nav-bar__ref" to="/edit-info">
            Editar Perfil
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
