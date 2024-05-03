import React from "react";
import "./Presentation.css";

function Presentation({ children }) {
  return (
    <div className="presentation">
      <textarea
        className="presentation__textarea"
        name="presentation"
        type="text"
        id="presentation"
        placeholder="Cuentanos sobre tu vida como profesional"
        required
      />

      <label className="presentation__label">
        Foto de Perfil
        <input className="presentation__input " type="file" required />
      </label>
      <label className="presentation__label">
        Banner
        <input className="presentation__input" type="file" required />
      </label>
      {children}
    </div>
  );
}

export default Presentation;
