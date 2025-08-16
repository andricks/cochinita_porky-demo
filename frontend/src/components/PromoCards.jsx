import React from "react";
import { Star, Check } from "lucide-react";
// Assuming you have a CSS file for styling
const PromoCard = ({ item, index }) => {
  return (
    <article
      className="promo-card fade-up"
      style={{ animationDelay: `${index * 80}ms` }}

      
    >

      <div className="promo-top">
          {item.image && (
          <img
          src={item.image}
      alt={item.title}
      className="promo-image"
      loading="lazy"
        />
          )}
        </div>

      <span className="promo-badge">{item.discount}</span>



      <div className="promo-body">
        <div className="promo-headline">
          <h3>{item.title}</h3>
          <div className="rating">
            <Star className="star" />
            <span>{item.rating}</span>
          </div>
        </div>

        <ul className="promo-features">
          {item.features.map((f, i) => (
            <li key={i}>
              <Check className="check" />
              {f}
            </li>
          ))}
        </ul>

        <div className="promo-price">
          <span className="price">{item.price}</span>
          <span className="price-old">{item.originalPrice}</span>
        </div>

        <button className="btn btn-full">Agregar al Carrito</button>
      </div>
    </article>
  );
};

export default PromoCard;
