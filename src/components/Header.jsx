import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Логотип</div>
        <input
          type="text"
          className="search-input"
          placeholder="Поиск товаров..."
        />
        <div className="icons">
          <span className="icon">🛒</span>
          <span className="icon">❤️</span>
          <span className="icon">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
