import React from "react";
import "./Companies.scss";
import { images } from "../../constants";

const Companies = () => {
  return (
    <div className="app__companies-wrapper">
      <div className="app__companies-header">
        <h2>
          Empresas Que Confian En <span>Nosotros</span>
        </h2>
        <img src={images.divisor} className="divisor" alt="divisor" />
      </div>
      <div className="app__companies-items">
        <div className="app__companies-item">
          <img src={images.clover} alt="clover" />
        </div>
        <div className="app__companies-item">
          <img src={images.persistent} alt="persistent" />
        </div>
        <div className="app__companies-item">
          <img src={images.trackchain} alt="trackchain" />
        </div>
        <div className="app__companies-item">
          <img src={images.relier} alt="relier" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
