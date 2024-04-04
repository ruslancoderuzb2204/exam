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

const Famous = () => {
  return (
    <section className="container">
      <div className="my-20">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-3xl">Популярные категории</h2>
          <ButtonPrimary>Все категории</ButtonPrimary>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-rows-2 gap-4">
              {[Famous1, Famous2].map((image, index) => (
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
            <div className="rounded-lg border border-[#E5E2EE] overflow-hidden">
              <div style={{ paddingTop: "100%" }} className="relative h-[92%]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={Famous3}
                  className="rounded-lg"
                />
              </div>
              <p className="py-5 text-base px-6">
                Дерматологическое оборудование
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[Famous4, Famous5, Famous6, Famous7].map((image, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Famous;
