import React from "react";
import { Route, Routes } from "react-router-dom";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import Card from "../card/Card";
import LandingPage from "../landingPage/LandingPage";
import Register from "../register/Register";
import Login from "../login/Login";
import Main from "../main/Main";

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
