import React from "react";
import "./Present.css";
import banner from "../../images/avatar-default.png";
import Typewriter from "typewriter-effect";

function Present() {
  return (
    <section className="present">
      <div className="present__content">
        <img className="present__banner" src={banner} alt="banner portada" />
        <div className="present__name-user">
          {
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Bienvenido a mi Portafolio")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("R A C H E L * M I L A N O")
                  .start();
              }}
            />
          }
        </div>
      </div>
    </section>
  );
}

export default Present;
