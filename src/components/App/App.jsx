import React from "react";
import { Route, Routes } from "react-router-dom";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import LandingPage from "../LandingPage/LandingPage";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";

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
          path="/portfolio"
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </LandingPage>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
