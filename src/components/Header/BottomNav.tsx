import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";
import { CiLocationOn } from "react-icons/ci";
import { MdMenu } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="container flex items-center text-sm justify-between">
      <ul className="flex py-6 gap-3">
        <li className="flex items-center gap-1">
          <MdMenu />
          <p>Каталог</p>
        </li>
        <li>
          <p>Производители</p>
        </li>
        <li>
          <p>Кабинеты под ключ</p>
        </li>
        <li>
          <p>Услуги</p>
        </li>
        <li>
          <p>Акции</p>
        </li>
        <li>
          <p>Покупателям</p>
        </li>
        <li>
          <p>Контакты</p>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <p>Москва</p>
          <CiLocationOn />
        </div>
        <ButtonSecondary>+7(495)000-00-00</ButtonSecondary>
        <ButtonPrimary>Заказать звонок</ButtonPrimary>
      </div>
    </div>
  );
};

export default BottomNav;
