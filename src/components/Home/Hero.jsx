"use client";
import React, { useRef } from "react";
import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="relative container">
      <Slider
        arrows={false}
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <div
            key={key}
            className="bg-[#E5E4ED] hero mt-8 rounded-md slider-container"
          >
            <div className="w-2/5  pt-10  pl-10">
              <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl base:text-xl">
                Заголовок баннерав пару строк
              </h1>
              <p className="text-lg text-[#7A7687] mt-6 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex gap-4">
                <ButtonPrimary>Запросить цену</ButtonPrimary>
                <ButtonSecondary>В каталог</ButtonSecondary>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-3xl flex gap-4 absolute right-20 bottom-5">
        <button className="button p-2 rounded-full bg-white" onClick={previous}>
          <GrFormPreviousLink />
        </button>
        <button className="button p-2 rounded-full bg-white" onClick={next}>
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
}

export default Hero;
