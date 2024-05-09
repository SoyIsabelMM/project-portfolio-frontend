import React, { Children } from "react";
import "./History.css";

function History({ children }) {
  const fields = [
    {
      name: "about-me",
      placeholder: "Cuentame sobre tí",
      label: "Foto",
    },
    {
      name: "hobbie",
      placeholder: "Que te gusta hacer",
      label: "Foto",
    },
    {
      name: "activity",
      placeholder: "¿Practicas algún deporte o actividad aparte?",
      label: "Foto",
    },
    {
      name: "happy-place",
      placeholder: "¿Cual es tu lugar que te hace feliz?",
      label: "Foto",
    },
  ];

  return (
    <div className="history">
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          <textarea
            className="history__presentation"
            name={field.name}
            type="text"
            placeholder={field.placeholder}
          />
          <label className="history__label">
            {field.label}
            <input className="history__input" type="file" required />
          </label>
        </React.Fragment>
      ))}

      {children}
    </div>
  );
}

export default History;
