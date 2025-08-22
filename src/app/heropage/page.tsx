import React from "react";
import Herosection from "./components/hero-section";
import Homecategory from "./components/home-category";
import Homesale from "./components/home-sale";
import Bestseller from "./components/bestseller";
import Product from "./components/product";
import Homeblog from "./components/homeblog";

function Hero() {
  return (
    <div>
      <>
        <Herosection />
        <Homecategory />
        <Homesale />
        <Bestseller />
        <Product />
        <Homeblog />
      </>
    </div>
  );
}

export default Hero;
