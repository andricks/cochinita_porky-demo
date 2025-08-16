import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
 // Assuming you have a CSS file for styles
const HeroSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className={`hero-wrap ${show ? "is-visible" : ""}`}>
        <h1 className="hero-title">
          ¡Bienvenido a <span>porky pig!</span>
        </h1>
        <p className="hero-sub">
          Más que un restaurante, una experiencia. Una experiencia  única  ,
          donde la calidad y el detalle se sirven en cada platillo donde su sabor enamora.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#productos">
            Explorar Productos <ArrowRight className="i" />
          </a>
          <a className="btn btn-ghost" href="#ofertas">
            Ver Ofertas
          </a>
        </div>

        <ul className="hero-stats">
          <li>
            <strong>10K+</strong>
            <span>Clientes felices</span>
          </li>
          <li>
            <strong>500+</strong>
            <span>Productos</span>
          </li>
          <li>
            <strong>4.9★</strong>
            <span>Calificación</span>
          </li>
        </ul>

        <div className="hero-card">
          <div className="hero-card-inner">
            <span className="hero-emoji">🐷</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
