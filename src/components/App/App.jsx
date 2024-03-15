import React from "react";
import { Route, Routes } from "react-router-dom";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Header>
              <NavBar />
            </Header>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
