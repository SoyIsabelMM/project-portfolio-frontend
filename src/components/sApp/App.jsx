import React from "react";
import { Route, Routes } from "react-router-dom";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../sHeader/Header";
import NavBar from "../sNavBar/NavBar";
import Card from "../sCard/Card";
import LandingPage from "../sLandingPage/LandingPage";
import Register from "../sRegister/Register";
import Login from "../sLogin/Login";
import Main from "../sMain/Main";

function App() {
  const headerComponent = (
    <Header>
      <NavBar />
    </Header>
  );

  return (
    <div className="page">
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              {headerComponent}
              <Register />
            </>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              {headerComponent} <Login />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              {headerComponent} <Main />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              {headerComponent}
              <LandingPage>
                <Card className="card" />
                <Card className="card" />
                <Card className="card" />
                <Card className="card" />
                <Card className="card" />
                <Card className="card" />
              </LandingPage>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
