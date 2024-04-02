import Image from "next/image";
import { CompareIcon, Logo } from "@/constants";
import { BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
const MiddleNav = () => {
  return (
    <div className="container flex justify-between items-center ">
      <div className="text-[#7A7687] flex text-sm py-4 items-center gap-10 lg:gap-8 md:gap-4 sm:gap-2">
        <div>
          <Image src={Logo} alt="Logo" width={50} height={20} />
        </div>
        <div className="flex items-center  border-[#D5D1E1] border  rounded-full">
          <p className="px-4 py-2.5   rounded-full bg-[#EFEFEF]">
            Все категории
          </p>
          <label className="flex items-center bg-[#D5D1E1] rounded-full">
            <input
              type="text"
              placeholder="Поиск"
              className="border-none rounded-full h-10 bg-[#f8f7f3] pl-2 outline-none"
            />
            <BiSearch className="w-10 rounded-full" />
          </label>
        </div>
        <div>
          <p>
            Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
          </p>
        </div>
      </div>
      <div>
        <ul className="flex text-sm items-end gap-8 md:gap-6 sm:gap-4">
          <li className="flex flex-col items-center gap-1 text-[#7A7687]">
            <GoPerson className=" scale-150" />
            <p>Войти</p>
          </li>
          <li className="flex flex-col items-center gap-1 text-[#7A7687]">
            <CiHeart className=" scale-150" />
            <p>Избранное</p>
          </li>
          <li className="flex flex-col items-center gap-1 text-[#7A7687]">
            <div>
              <Image width={17} src={CompareIcon} alt="compare icon" />
            </div>
            <p>Сравнить</p>
          </li>
          <li className="flex flex-col items-center gap-1 text-[#7A7687]">
            <SlBasket className=" scale-150" />
            <p>Корзина</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MiddleNav;
