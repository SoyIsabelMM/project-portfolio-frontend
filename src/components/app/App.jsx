import React from "react";
import { Route, Routes } from "react-router-dom";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import LandingPage from "../landingPage/LandingPage";
import Register from "../register/Register";
import Login from "../login/Login";
import Home from "../home/Home";
import Portfolios from "../portfolios/Portfolios";
import ProfileCard from "../profileCard/ProfileCard";

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
              <ProfileCard className="profile-card" />
              <ProfileCard className="profile-card" />
              <ProfileCard className="profile-card" />
              <ProfileCard className="profile-card" />
              <ProfileCard className="profile-card" />
              <ProfileCard className="profile-card" />
            </LandingPage>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
