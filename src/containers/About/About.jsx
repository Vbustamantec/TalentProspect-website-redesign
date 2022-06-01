import React from "react";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="app__about-wrapper">
      <div className="app__about-header">
        <h3>NUESTROS SERVICIOS</h3>
        <h2>Esto Es Lo Que Hacemos:</h2>
        <img src={images.divisor} className="divisor" alt="divisor" />
        <p>
          Nuestra misión es tener vacantes de empresas interesantes para
          trabajar y talento de calidad para que las empresas logren sus
          objetivos.
        </p>
      </div>
      <div className="app__about-cards">
        <div className="app__about-card">
          <img src={images.iman} alt="#" />
          <h3>Busqueda de Talentos</h3>
          <p>
            Contamos con perfiles de Ingeniería, Marketing, Data, Producto,
            entre otros. Los cuales son previamente entrevistados para
            asegurarnos que son lo que necesitas.
          </p>
        </div>
        <div className="app__about-card">
          <img src={images.CV} alt="#" />
          <h3>Busqueda de empleos</h3>
          <p>
            Siempre velaremos por tus intereses por lo que nuestras vacantes son
            previamente aprobadas donde te aseguramos una experiencia laboral
            segura y enriquecedora.
          </p>
        </div>
        <div className="app__about-card">
          <img src={images.Optimization} alt="#" />
          <h3>Busqueda de Talentos</h3>
          <p>
            Desarrollamos un programa de inserción laboral en el cual te
            apoyamos a optimizar cartas de presentación y estrategia de
            búsqueda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
