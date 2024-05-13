import React from "react";
import "./Register.css";
import Form from "../form/Form";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <Form title="Registro">
        <p className="register_paragraph">
          ¿Ya eres miembro? Inicia{" "}
          <Link to="/signin" className="register__link">
            sesión aquí
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
