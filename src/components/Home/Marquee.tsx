import { MarqueeImg, MarqueeImg1, MarqueeImg2 } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueePg = () => {
  // Data for the cards
  const cards = [
    { imgSrc: MarqueeImg, text: "Дерматологическое оборудование" },
    { imgSrc: MarqueeImg1, text: "Дерматологическое оборудование" },
    { imgSrc: MarqueeImg2, text: "Дерматологическое оборудование" },
    { imgSrc: MarqueeImg, text: "Дерматологическое оборудование" },
    { imgSrc: MarqueeImg1, text: "Дерматологическое оборудование" },
    { imgSrc: MarqueeImg2, text: "Дерматологическое оборудование" },
  ];

  return (
    <div className="bg-[#E5E4ED] py-10 my-20">
      <div className="container grid grid-cols-2">
        <h2 className="font-semibold text-3xl">Наши клиенты</h2>
        <p className="text-5xl pl-10 font-medium w-1/2">
          БОЛЕЕ <span className="text-[#088269]">5000</span> УСПЕШНЫХ ПРОЕКТОВ
        </p>
      </div>
      <Marquee direction="right" className="mt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col mr-8 justify-between rounded-lg h-[18rem] border border-[#E1DFE7] overflow-hidden"
          >
            <div className="bg-white flex-grow flex items-center justify-center">
              <Image
                alt="img"
                src={card.imgSrc}
                width={150}
                height={150}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="py-5 text-base bg-[#F8F7F3] px-6">{card.text}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueePg;
