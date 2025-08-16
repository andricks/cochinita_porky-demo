import React from "react";
import PromoCard from "./PromoCards";

const products = [
  {
    title: "Tacos de birria",
    price: "$29.99",
    originalPrice: "$39.99",
    discount: "25% OFF",
    rating: 4.8,
    features: ["3 tacos de birria ", " queso derretido", "Salsa especial"],
     image: "https://i.postimg.cc/qvLS8tsY/tacof.png"



  },
  {
    title: "Tacos de Camarones",
    price: "$79.99",
    originalPrice: "$99.99",
    discount: "20% OFF",
    rating: 4.9,
    features: ["5 tacos ", "Queso derretido ", "Camarones ,res y huecamole"],
    image:"https://i.postimg.cc/vmjsLhFX/camarones.jpg"
  },
  {
    title: "Burrito Gigante",
    price: "$49.99",
    originalPrice: "$69.99",
    discount: "30% OFF",
    rating: 4.7,
    features: ["Tamaño XXL", "Extra suave", "Edición limitada"],
    image:"https://i.postimg.cc/MpTNPBYL/burrito.png"
  },
  {
    title: "Burrito Gigante",
    price: "$49.99",
    originalPrice: "$69.99",
    discount: "30% OFF",
    rating: 4.7,
    features: ["Tamaño XXL", "Extra suave", "Edición limitada"],
    image:"https://i.postimg.cc/MpTNPBYL/burrito.png"
  },
];

const PromoSection = () => {
  return (
    <section id="ofertas" className="promo-section">
      <div className="promo-header">
        <h2>Ofertas Especiales</h2>
        <p>Disfruta de nuestras promociones más irresistibles, con platos llenos de sabor a precios que te encantarán.</p>
      </div>

      <div id="productos" className="promo-grid">
        {products.map((item, idx) => (
          <PromoCard item={item} index={idx} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
