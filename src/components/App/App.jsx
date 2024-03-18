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

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header>
                <NavBar />
              </Header>
              <LandingPage>
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
