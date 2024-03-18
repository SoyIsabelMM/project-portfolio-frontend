import React from "react";
import { Route, Routes } from "react-router-dom";
//archivo css con normalizer y el fonts
import "../../index.css";
import "./App.css";

// componentes
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";

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
              <Card />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
