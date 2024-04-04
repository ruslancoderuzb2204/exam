import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { MdMenu } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="container ">
      <div className="flex items-center justify-between py-6 text-sm">
        <ul className="flex gap-5">
          <li>
            <Link className="flex items-center gap-1" href="/catalogue">
              <MdMenu /> Каталог
            </Link>
          </li>
          <li>Производители</li>
          <li>Кабинеты под ключ</li>
          <li>Услуги</li>
          <li>Акции</li>
          <li>Покупателям</li>
          <li>Контакты</li>
        </ul>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            Москва <CiLocationOn />
          </p>
          <ButtonSecondary>+7(495)000-00-00</ButtonSecondary>
          <ButtonPrimary>Заказать звонок</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
