import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__content">
        <img
          className="preloader__img"
          src="https://i.imgur.com/cWGLRFJ.png"
          alt="preloader"
        />
      </div>
    </div>
  );
}

export default Preloader;
