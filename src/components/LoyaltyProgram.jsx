import React from "react";
import "./LoyaltyProgram.css";

const LoyaltyProgram = () => {
  return (
    <section className="loyalty-program">
      <div className="content">
        <h2>Программа лояльности</h2>
        <p>
          Присоединяйтесь к нашей программе лояльности и получайте бонусы за
          каждую покупку. Чем больше покупок — тем больше бонусов!
        </p>
        <button className="join-btn">Присоединиться</button>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
