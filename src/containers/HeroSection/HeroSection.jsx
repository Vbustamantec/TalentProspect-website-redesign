import React from "react";
import "./HeroSection.scss";
import { images } from "../../constants";

const HeroSection = () => {
  return (
    <section className="app__hero-wrapper">
      <div className="app__hero-container">
        <div className="app__hero-text">
          <h2>
            Contrata talento <span>Latinoamericano</span> <br /> en menos de 3
            semanas
          </h2>
          <p className="p-text">
            Te proveemos de perfiles como ingeniería, data, product, marketing
            entre otros, previamente entrevistados por nosotrxs para asegurarte
            que son el match perfecto en los requerimientos técnicos y en los
            valores que profesa tu compañía.
          </p>
          <button className="app__hero-btn">
            <a href="/empresas">Descubre Mas</a>
          </button>
        </div>
        <div className="app__hero-image">
          <img src={images.BgHeader} alt="Header Background" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
