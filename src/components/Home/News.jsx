import Image from "next/image";
import LeftSide from "../Home/LeftSide";
import { Rectangle, Rectangle1, Rectangle2, Rectangle3 } from "@/constants";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useRef } from "react";
import ButtonPrimary from "@/UI/ButtonPrimary";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="container">
      <div className="flex gap-40 relative my-20">
        <LeftSide title="Новости компании" elements={[]} />
        <div className="overflow-hidden">
          <Slider
            arrows={false}
            ref={sliderRef}
            {...settings}
            className="overflow-visible"
          >
            {[Rectangle, Rectangle1, Rectangle2, Rectangle3].map(
              (brand, index) => (
                <div key={index} className="">
                  <div className="rounded-lg border m-2 border-[#E5E2EE] ">
                    <div className="mb-4 bg-white  w-full">
                      <Image
                        alt="img"
                        src={brand}
                        className="w-full"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="py-3 pl-6">
                      <span className="text-xs text-[#7A7687]">07.11.2022</span>
                      <h3 className="text-base font-semibold">
                        Название новости{" "}
                      </h3>
                      <p className="text-lg font-medium  text-[#7A7687] mb-2">
                        Допускает внедрение поэтапного и развития общества.
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
          <div className="flex justify-end mt-8">
            <ButtonPrimary>Все новости</ButtonPrimary>
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

export default News;
