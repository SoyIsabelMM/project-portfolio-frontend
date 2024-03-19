import React from "react";
import "./Register.css";
import Form from "../Form/Form";

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Form
          title="Inscribirse"
          nameBtn="Regístrate"
          question="¿Ya eres miembro? Inicia "
          link="sesión aquí"
        />
      </div>
    </section>
  );
}

export default Register;
