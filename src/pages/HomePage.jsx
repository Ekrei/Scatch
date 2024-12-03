import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import LoyaltyProgram from "../components/LoyaltyProgram";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <ProductList />
        <div className="promo-blocks">
          <Newsletter />
          <LoyaltyProgram />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
