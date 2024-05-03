import React from "react";
import "./InfoContent.css";

function InfoContent({
  type,
  typeTwo,
  children,
  fieldOne,
  fieldTwo,
  fieldThree,
  fieldFour,
}) {
  return (
    <div className="info-content">
      <label className="info-content__label">
        {fieldOne}
        <input className="info-content__input" type={type} />
      </label>
      <label className="info-content__label">
        {fieldTwo}
        <input className="info-content__input" type={type} />
      </label>

      <label className="info-content__label">
        {fieldThree}
        <input className="info-content__input" type={type} />
      </label>
      <label className="info-content__label">
        {fieldFour}
        <input className="info-content__input" type={typeTwo} />
      </label>
      {children}
    </div>
  );
}

export default InfoContent;
