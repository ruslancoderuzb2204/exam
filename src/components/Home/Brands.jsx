import Image from "next/image";
import LeftSide from "../Home/LeftSide";
import { Brand, Brand1, Brand2 } from "@/constants";
const Brands = () => {
  return (
    <div className="flex gap-10">
      <LeftSide title="Бренды" elements={["Эксклюзивные", "Поставщики"]} />
      <div>
        <div>
          <div>
            <Image alt="img" src={Brand} />
          </div>
          <p>НМИЦ онкологии им. Н.Н. Блохина</p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
