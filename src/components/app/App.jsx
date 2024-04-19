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
import Home from "../home/Home";
import Portfolios from "../portfolios/Portfolios";

function App() {
  return (
    <main className="page">
      <Header>
        <NavBar />
      </Header>
      <Routes>
        <Route path="/signup" element={<Register />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/portfolios" element={<Portfolios />} />

        <Route
          path="/"
          element={
            <LandingPage>
              <Card className="card" />
              <Card className="card" />
              <Card className="card" />
              <Card className="card" />
              <Card className="card" />
              <Card className="card" />
            </LandingPage>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
