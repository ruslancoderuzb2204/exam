"use client";
import Image from "next/image";
import { Table1, Table2, Table3 } from "../../constants";
// import ButtonPrimary from "@/UI/ButtonPrimary";
// import ButtonSecondary from "@/UI/ButtonSecondary";

const equipmentItems = [
  { image: Table1, title: "Экспресс лаборатория" },
  { image: Table2, title: "Лазерная терапия" },
  { image: Table3, title: "Операционный блок" },
];

import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useRef } from "react";
import ButtonSecondary from "@/UI/ButtonSecondary";
import ButtonPrimary from "@/UI/ButtonPrimary";

function EquipmentBlock() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <h2 className="text-3xl ml-4 font-semibold">
        Комплексное оснащение кабинетов
      </h2>
      <Slider
        arrows={false}
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {equipmentItems.map((item, index) => (
          <div key={index}>
            <div className="border m-4  border-[#E5E2EE] rounded-lg">
              <Image objectFit="cover" className="w-full" src={item.image} />
              <p className="py-5  pl-6">{item.title}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-3xl flex gap-4 absolute left-20 ">
        <button className="button p-2 rounded-full bg-white" onClick={previous}>
          <GrFormPreviousLink />
        </button>
        <button className="button p-2 rounded-full bg-white" onClick={next}>
          <GrFormNextLink />
        </button>
      </div>
      <div className="flex justify-end gap-4">
        <ButtonSecondary>Бесплатная консультация</ButtonSecondary>
        <ButtonPrimary>Рассчитать стоимость</ButtonPrimary>
      </div>
    </div>
  );
}

export default EquipmentBlock;
