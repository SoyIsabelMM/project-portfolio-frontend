import React from "react";
import "./FormInfo.css";
import InfoContent from "../infoContent/InfoContent";
import Presentation from "../presentation/Presentation";
import History from "../history/History";

function FormInfo() {
  return (
    <section className="form-info">
      <h2 className="form-info__title">Edita tu cuenta</h2>

      <div className="form-info__container">
        <form className="form-info__form">
          <h3 className="form-info__subtitle">Personal</h3>

          <InfoContent
            type={"text"}
            typeTwo={"date"}
            fieldOne={"Nombre"}
            fieldTwo={"Apellido"}
            fieldThree={"País"}
            fieldFour={"Cumpleaños"}
          >
            <button className="form-info__btn">Guardar</button>
          </InfoContent>

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Contacto</h3>

          <InfoContent
            type={"email"}
            typeDate={"url"}
            fieldOne={"Email"}
            fieldTwo={"Instagram"}
            fieldThree={"Facebook"}
            fieldFour={"Linkedin"}
          >
            <button className="form-info__btn">Guardar</button>
          </InfoContent>

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Presentación</h3>

          <Presentation>
            <button className="form-info__btn">Guardar</button>
          </Presentation>

          <div className="form-info__divider"></div>

          <h3 className="form-info__subtitle">Acerca de mí</h3>

          <History>
            <button className="form-info__btn">Guardar</button>
          </History>
        </form>
      </div>
    </section>
  );
}

export default FormInfo;
