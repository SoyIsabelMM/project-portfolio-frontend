import React from "react";
import Form from "../form/Form";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Form title="Iniciar Sesión">
          <p className="login_paragraph">
            ¿Aún no eres miembro?{" "}
            <Link to="/signup" className="login__link">
              Regístrate aquí
            </Link>
          </p>
        </Form>
      </div>
    </section>
  );
}

export default Login;
