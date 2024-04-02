"use client";
import Hero from "@/components/Home/Hero";
import Famous from "@/components/Home/Famous";
import Block from "@/components/Home/Block";
import WhyChoose from "@/components/Home/WhyChoose";
import Products from "@/components/Home/Products";
import Brands from "@/components/Home/Brands";

import { AboutCompAccordion } from "@/components/Home/AboutCompAccordion";

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Hero />
      <Famous />
      <Block />
      <WhyChoose />
      <Products />
      <Brands/>
      <div className="grid grid-cols-2 text-white items-start py-8 bg-[#088269] ">
        <h2 className="ml-10 text-2xl">Информация о компании</h2>
        <div>
          <AboutCompAccordion title={"Next Js"} />
          <AboutCompAccordion title={"React Js"} />
          <AboutCompAccordion title={"Javascript"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
