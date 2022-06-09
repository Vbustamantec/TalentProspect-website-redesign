import React from "react";
import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__logo">
        <img src={images.logoFooter} alt="logo" />
      </div>
      <div className="footer__about">
        <h3>SOBRE NOSOTROS</h3>
        <ul>
          <li>
            <a href="">Conoce al equipo</a>
          </li>
          <li>
            <a href="">Faqs</a>
          </li>
        </ul>
      </div>
      <div className="footer__services">
        <h3>SERVICIOS</h3>
        <ul>
          <li>
            <a href="">Reclutamiento</a>
          </li>
          <li>
            <a href="">Contratación internacional</a>
          </li>
          <li>
            <a href="">Base de datos de talento</a>
          </li>
          <li>
            <a href="">revision de CV+LinkedIn</a>
          </li>
          <li>
            <a href="">Estrategia de busqueda de vacantes</a>
          </li>
        </ul>
      </div>
      <div className="footer__social">
        <h3>SIGUENOS</h3>
        <div className="footer__social_images"></div>
        <ul>
          <li>
            <a href="">Conoce al equipo</a>
          </li>
          <li>
            <a href="">Faqs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
