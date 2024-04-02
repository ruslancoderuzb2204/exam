import Hero from "@/components/Home/Hero";
import Famous from "@/components/Home/Famous";
import Block from "@/components/Home/Block";
import WhyChoose from "@/components/Home/WhyChoose";
import Products from "@/components/Home/Products";

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Hero />
      <Famous />
      <Block />
      <WhyChoose />
      <Products />
    </div>
  );
};

export default Home;
