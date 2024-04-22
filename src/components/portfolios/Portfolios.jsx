import React, { useState } from "react";
import "./portfolios.css";
import ProfileCard from "../profileCard/ProfileCard";

function Portfolios() {
  const [limit, setLimit] = useState(3);
  const portafolios = [
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 1",
      description: "Descripcion",
      className: "card",
    },
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 2",
      description: "Descripcion",
      className: "card",
    },
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 3",
      description: "Descripcion",
      className: "card",
    },
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 4 ",
      description: "Descripcion",
      className: "card",
    },
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 5 ",
      description: "Descripcion",
      className: "card",
    },
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 6 ",
      description: "Descripcion",
      className: "card",
    },
    {
      image:
        "https://s1.elespanol.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg",
      alt: "alt",
      userName: "Test 7 ",
      description: "Descripcion",
      className: "card",
    },
  ];

  const renderPortfolios = portafolios
    .slice(0, limit)
    .map((portafolio, index) => (
      <ProfileCard
        key={index}
        userName={portafolio.userName}
        className="profile-card"
      />
    ));

  const verMas = () => {
    setLimit(limit + 3);
  };

  return (
    <section className="portfolios">
      <div className="portfolios__content">{renderPortfolios}</div>
      <div onClick={() => verMas()}>Boton</div>
    </section>
  );
}

export default Portfolios;
