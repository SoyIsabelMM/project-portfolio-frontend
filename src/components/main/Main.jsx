import React from "react";
import "./Main.css";
import Present from "../present/Present";
import Portfolios from "../portfolios/Portfolios";

function Main() {
  return (
    <main className="main">
      <Present />
      <Portfolios />
    </main>
  );
}

export default Main;
