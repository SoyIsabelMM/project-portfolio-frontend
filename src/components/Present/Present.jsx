import React from "react";
import "./Present.css";
import banner from "../../images/avatar-default.png";

function Present() {
  return (
    <section className="present">
      <div className="present__content">
        <img className="present__banner" src={banner} alt="banner portada" />
        <span className="present__name-user">R A C H E L * M I L A N O</span>
      </div>
    </section>
  );
}

export default Present;
