import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <p>Магазин канцелярии &copy; 2024</p>
          <p>Контакты: info@example.com</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="/about">О нас</a>
            </li>
            <li>
              <a href="/privacy">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="/terms">Условия использования</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
