import Image from "next/image";
import LeftSide from "../Home/LeftSide";
import { Brand, Brand1, Brand2 } from "@/constants";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useRef } from "react";
import ButtonPrimary from "@/UI/ButtonPrimary";

const Brands = () => {
  const settings = {
    dots: true,
    infinite: true, // Enable infinite loop
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null); // Use useRef

  const next = () => {
    sliderRef.current.slickNext(); // Access current property
  };

  const previous = () => {
    sliderRef.current.slickPrev(); // Access current property
  };

  return (
    <div className="container">
      <div className="flex gap-40 relative mb-20">
        <LeftSide title="Бренды" elements={["Эксклюзивные", "Поставщики"]} />
        <div className="overflow-hidden">
          <Slider
            arrows={false}
            ref={sliderRef}
            {...settings}
            className="overflow-visible"
          >
            {[Brand, Brand1, Brand2, Brand, Brand1, Brand2].map(
              (brand, index) => (
                <div key={index} className="">
                  <div className="rounded-lg border m-2 border-[#E5E2EE] ">
                    <div className="mb-4 bg-white w-full h-56 flex justify-center items-center">
                      <Image alt="img" src={brand} width={200} height={200} />
                    </div>
                    <p className="text-xl py-3 pl-6 bg-[#f8f7f3] mb-2">
                      НМИЦ онкологии им. Н.Н. Блохина
                    </p>
                  </div>
                </div>
              )
            )}
          </Slider>
          <div className="flex justify-end mt-8">
            <ButtonPrimary>Сертификаты</ButtonPrimary>
          </div>
          <div className="text-3xl flex gap-4 absolute left-15 bottom-1 ">
            <button
              className="button p-2 rounded-full border-2  "
              onClick={previous}
            >
              <GrFormPreviousLink />
            </button>
            <button className="button p-2 rounded-full border-2" onClick={next}>
              <GrFormNextLink />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
