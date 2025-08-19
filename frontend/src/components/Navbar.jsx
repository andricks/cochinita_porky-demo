import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
// Assuming you have a CSS file for styling
const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="navbar"
      style={{
        background: `linear-gradient(90deg, rgba(244,114,182,${
          0.95 + scrollY * 0.001
        }) 0%, rgba(236,72,153,${0.95 + scrollY * 0.001}) 100%)`,
        boxShadow: `0 0px 8px rgba(236,72,153,${0.2 + scrollY * 0.002})`,
      }}
    >
      <div className="nav-inner">
        <a href="#" className="brand">
          <div className="brand-badge">🐷</div>
          <span>Porky Pig</span>
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn">
            <Heart />
            <span className="pill pill--rose">3</span>
          </button>
          <button className="icon-btn">
            <ShoppingCart />
            <span className="pill pill--blue">7</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
