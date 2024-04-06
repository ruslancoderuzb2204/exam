import ButtonPrimary from "@/UI/ButtonPrimary";
import ButtonSecondary from "@/UI/ButtonSecondary";
import SearchBar from "@/UI/SearchBar";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { MdMenu } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="container ">
      <div className="hidden base:block">
        <SearchBar />
      </div>
      <div className="flex items-center base:hidden justify-between py-6 lg:py-4 md:py-2 text-sm">
        <ul className="flex gap-5">
          <li>
            <Link className="flex items-center gap-1" href="/catalogue">
              <MdMenu /> Каталог
            </Link>
          </li>
          <li>Производители</li>
          <li>Кабинеты под ключ</li>
          <li className="md:hidden">Услуги</li>
          <li className="md:hidden">Акции</li>
          <li className="lg:hidden">Покупателям</li>
          <li className="lg:hidden">Контакты</li>
        </ul>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            Москва <CiLocationOn />
          </p>
          <ButtonSecondary classNames={" xl:hidden"}>
            +7(495)000-00-00
          </ButtonSecondary>
          <ButtonPrimary classNames={"hidden lg:block p-0"}>
            <PhoneCall />
          </ButtonPrimary>

          <ButtonPrimary classNames={"lg:hidden"}>
            Заказать звонок
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
