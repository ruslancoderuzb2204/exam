"use client";
import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";
import "swiper/swiper-bundle.css";

const Hero = () => {
  return (
    <section className="bg-[#E5E4ED] hero mt-8 rounded-md">
      <div className="w-2/5 p-10">
        <h1 className="text-5xl">Заголовок баннерав пару строк</h1>
        <p className="text-lg text-[#7A7687] mt-6 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="flex gap-4">
          <ButtonPrimary>Запросить цену</ButtonPrimary>
          <ButtonSecondary>В каталог</ButtonSecondary>
        </div>
      </div>
    </section>
  );
};

export default Hero;
