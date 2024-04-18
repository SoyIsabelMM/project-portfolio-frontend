import React from "react";
import "./portfolios.css";
import Card from "../card/Card";

function Portfolios() {
  return (
    <section className="portfolios">
      <div className="portfolios__content">
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
      </div>
    </section>
  );
}

export default Portfolios;
