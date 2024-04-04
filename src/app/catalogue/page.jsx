"use client";
import Block from "@/components/Home/Block";
import WhyChoose from "@/components/Home/WhyChoose";
import Products from "@/components/Home/Products";
import Brands from "@/components/Home/Brands";
import News from "@/components/Home/News";
import Questions from "@/components/Home/Questions";
import Subscribe from "@/components/Home/Subscribe";
import BreadCrumb from "@/components/catalogue/BreadCrumb";
import Catalogue from "@/components/catalogue/Catalogue";

import { AboutCompAccordion } from "@/components/Home/AboutCompAccordion";

import React from "react";
const CataloguePG = () => {
  return (
    <div>
      <BreadCrumb />
      <Catalogue />
      <Block />
      <WhyChoose />
      <Products />
      <Brands />
      <News />
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
      <Questions />
      <Subscribe />
    </div>
  );
};

export default CataloguePG;
