import React from "react";
import "./Conocenos.scss";
import { images } from "../../constants";

const Conocenos = () => {
  return (
    <div className="app__conocenos-wrapper">
      <div className="app__conocenos-header">
        <h2>¿Quieres Conocernos Mas?</h2>
        <img src={images.divisor} alt="divisor" />
      </div>
      <div className="app__conocenos-container">
        <div className="app__conocenos-text">
          <h3>Conoce un poco mas de Nuestro equipo</h3>
          <p className="p-text">
            Encuentra un poco sobre nuestra historia y que nos motiva a crear un
            mejor ecosistema laboral en Latino América.
          </p>
          <button className="app__conocenos-btn">
            <a href="#">Sobre Nosotros</a>
          </button>
        </div>
        <div className="app__conocenos-image">
          <img src={images.conocenos} alt="conocenos" />
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
