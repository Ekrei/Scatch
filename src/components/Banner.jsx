import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1 className="banner-title">СКИДКИ</h1>
        <p className="banner-description">НА МЕБЕЛЬ И ТЕХНИКУ ДЛЯ ОФИСА</p>
        <button className="banner-button">ПОДРОБНЕЕ</button>
      </div>
    </section>
  );
};

export default Banner;
