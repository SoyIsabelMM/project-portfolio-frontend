import React from "react";
import { Link, Route } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__options">
          <Link className="nav-bar__ref" to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-bar__options">
          <Link className="nav-bar__ref" to="/about-us">
            Acerca de
          </Link>
        </li>
        <li className="nav-bar__options">
          <Link className="nav-bar__ref" to="/services">
            Servicios
          </Link>
        </li>
        <li className="nav-bar__options">
          <Link className="nav-bar__ref" to="/contact">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
