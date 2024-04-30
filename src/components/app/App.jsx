import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import data from "../../utils/data.json";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import LandingPage from "../landingPage/LandingPage";
import Register from "../register/Register";
import Login from "../login/Login";
import Portfolios from "../portfolios/Portfolios";
import ProfileCard from "../profileCard/ProfileCard";
import AboutMe from "../abouMe/AboutMe";
import Profile from "../profile/Profile";
import Services from "../contact/Contact";
import Footer from "../footer/Footer";

function App() {
  const [limit, setLimit] = useState(3);

  const renderData = data
    .slice(0, limit)
    .map((data, key) => (
      <ProfileCard
        key={key}
        userName={data.userName}
        image={data.image}
        alt={data.alt}
        className="profile-card"
      />
    ));

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <main className="page">
        <Routes>
          <Route path="/signup" element={<Register />} />

          <Route path="/signin" element={<Login />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Services />} />

          <Route
            path="/"
            element={
              <LandingPage onClick={handleSeeMore}>{renderData}</LandingPage>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
