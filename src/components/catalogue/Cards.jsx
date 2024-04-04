import Image from "next/image";
import ButtonPrimary from "../../UI/ButtonPrimary";
import {
  Famous1,
  Famous2,
  Famous3,
  Famous4,
  Famous5,
  Famous6,
  Famous7,
} from "@/constants";

const Cards = () => {
  return (
    <div>
      <div>
        <div className="flex w-full gap-x-4">
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            {[Famous1, Famous2, Famous4, Famous5].map((image, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#E5E2EE] overflow-hidden"
              >
                <div style={{ paddingTop: "100%" }} className="relative">
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="py-5 text-base px-6">
                  Дерматологическое оборудование
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border flex flex-col justify-between border-[#E5E2EE]">
            <div className="overflow-hidden bg-white h-full flex items-center justify-center">
              <Image src={Famous3} className="rounded-lg " />
            </div>
            <p className="py-5 text-base px-6">
              Дерматологическое оборудование
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row-reverse mt-4 gap-4">
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            {[Famous1, Famous2, Famous4, Famous5].map((image, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#E5E2EE] overflow-hidden"
              >
                <div style={{ paddingTop: "100%" }} className="relative">
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <p className="py-5 text-base px-6">
                  Дерматологическое оборудование
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border flex flex-col justify-between border-[#E5E2EE]">
            <div className="overflow-hidden bg-white h-full flex items-center justify-center">
              <Image src={Famous3} className="rounded-lg " />
            </div>
            <p className="py-5 text-base px-6">
              Дерматологическое оборудование
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
