"use client";
import Famous from "@/components/Home/Famous";
import Block from "@/components/Home/Block";
import WhyChoose from "@/components/Home/WhyChoose";
import Products from "@/components/Home/Products";
import News from "@/components/Home/News";
import Questions from "@/components/Home/Questions";
import Subscribe from "@/components/Home/Subscribe";

import { AboutCompAccordion } from "@/components/Home/AboutCompAccordion";

import React from "react";
import Hero from "@/components/Home/Hero";
import MarqueePg from "@/components/Home/Marquee";
import Brands from "@/components/Home/Brands";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Famous />
      <Block />
      <WhyChoose />
      <Products />
      <MarqueePg />
      <Brands />
      <div className=" bg-[#088269] py-8">
        <div className="grid grid-cols-2 mb-20 text-white items-start container">
          <h2 className="ml-10 text-2xl">Информация о компании</h2>
          <div>
            <AboutCompAccordion title={"Next Js"} />
            <AboutCompAccordion title={"React Js"} />
            <AboutCompAccordion title={"Javascript"} />
            <AboutCompAccordion title={"Typescript"} />
          </div>
        </div>
      </div>
      <News />
      <Questions />
      <Subscribe />
    </div>
  );
};

export default Home;
