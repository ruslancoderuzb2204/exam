import Image from "next/image";
import { Choose, Choose1, Choose2, Choose3 } from "../../constants";

const WhyChoose = () => {
  const chooseItems = [
    { image: Choose1, text: "Быстрая доставка" },
    { image: Choose, text: "Быстрая доставка Весь товар сертифицирован" },
    { image: Choose2, text: "Быстрая доставка Гибкая система скидок" },
    { image: Choose3, text: "Лет на рынке" },
  ];

  return (
    <div className="container">
      <div className="my-20">
        <h2 className="font-medium mb-4 text-3xl ">Почему выбирают нас?</h2>
        <div className="grid grid-cols-4 gap-4">
          {chooseItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border  border-[#E5E2EE] rounded px-10 py-20 justify-center items-center"
            >
              <Image src={item.image} />
              <p className="text-center mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
