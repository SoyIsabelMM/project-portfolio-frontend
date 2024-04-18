import React from "react";
import "./Main.css";
import Present from "../sPresent/Present";
import Portfolios from "../sPortfolios/Portfolios";

function Main() {
  return (
    <main className="main">
      <Present />
      <Portfolios />
    </main>
  );
}

export default Main;
