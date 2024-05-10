import React from "react";
import "./Profile.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <img
          className="profile__banner"
          src="https://img.freepik.com/fotos-premium/mujer-sonriendo-felizmente-playa_816336-123.jpg"
          alt="banner portada"
        />
        <div className="profile__name-user">
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

        <div className="profile__history">
          <p className="profile__history-description">
            El arte es un lenguaje universal que trasciende barreras culturales
            y lingüísticas, y tiene el poder de emocionar, inspirar y
            transformar a quienes lo experimentan. Siglos y siglos de historia
            demuestran que las obras de arte son parte de la crónica de la
            evolución de la humanidad. Transmite reflexiones, momentos
            históricos, así como sentimientos y sensaciones. El arte es
            comunicación y permite que personas de diferentes culturas y épocas
            confluyan entre sí a través de imágenes, sonidos e historias. El
            arte es también un catalizador de emociones y un activador del
            pensamiento.
          </p>
        </div>
        <Link to={"/portfolios"}>
          <button className="profile__btn">
            {" "}
            <p className="profile__btn-link">Ver mis portafolios</p>{" "}
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Profile;
