import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const hits = [
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 1 (хит)",
      price: 500,
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 2 (хит)",
      price: 750,
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 3 (хит)",
      price: 300,
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 4 (хит)",
      price: 1200,
    },
  ];

  const novelties = [
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 1 (новинка)",
      price: 500,
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 2 (новинка)",
      price: 750,
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 3 (новинка)",
      price: 300,
    },
    {
      image: "https://via.placeholder.com/200",
      title: "Товар 4 (новинка)",
      price: 1200,
    },
  ];

  return (
    <section className="product-list">
      <div className="product-category">
        <h2>Хиты продаж</h2>
        <div className="product-category-list">
          {hits.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <div className="product-category">
        <h2>Новинки</h2>
        <div className="product-category-list">
          {novelties.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
