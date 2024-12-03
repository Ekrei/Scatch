import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Вы подписались на рассылку с email: ${email}`);
      setEmail("");
    } else {
      alert("Пожалуйста, введите ваш email");
    }
  };

  return (
    <section className="newsletter">
      <h2>Подпишитесь на нашу рассылку</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Введите ваш email"
          required
        />
        <button type="submit">Подписаться</button>
      </form>
    </section>
  );
};

export default Newsletter;
