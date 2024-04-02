import Image from "next/image";
import { Table1, Table2, Table3 } from "../../constants";
import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";

const EquipmentBlock = () => {
  const equipmentItems = [
    { image: Table1, title: "Экспресс лаборатория" },
    { image: Table2, title: "Лазерная терапия" },
    { image: Table3, title: "Операционный блок" },
  ];

  return (
    <div>
      <h2 className="font-medium text-3xl">Комплексное оснащение кабинетов</h2>
      <div className="flex justify-between my-8">
        {equipmentItems.map((item, index) => (
          <div key={index} className="border border-[#E5E2EE] rounded-lg">
            <Image src={item.image} />
            <p className="py-5 pl-6">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex mb-8 justify-between">
        <div className="flex text-3xl gap-2">
          <p>⬅️</p>
          <p>➡️</p>
        </div>
        <div className="flex gap-2">
          <ButtonSecondary>Бесплатная консультация</ButtonSecondary>
          <ButtonPrimary>Рассчитать стоимость</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default EquipmentBlock;
