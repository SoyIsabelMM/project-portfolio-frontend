import React from "react";
import "./Home.css";
import banner from "../../images/avatar-default.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <img className="home__banner" src={banner} alt="banner portada" />
        <div className="home__name-user">
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

        <button className="home__btn">
          {" "}
          <Link className="home__btn-link" to={"/portfolios"}>
            Ver mis proyectos
          </Link>{" "}
        </button>
      </div>
    </section>
  );
}

export default Home;
