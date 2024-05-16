import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import logoPT from '../../images/Logo-PT.png';

function Header({ children }) {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleInit = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content-item">
          <img
            className="header__logo"
            src={logoPT}
            alt="Logo PortFolio"
            onClick={handleInit}
          />

          <FontAwesomeIcon
            className="header__menu-bars"
            icon={faBars}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
        {children && (
          <div className={` ${isMenuOpen ? 'open' : ''}`}>{children}</div>
        )}{' '}
      </div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
