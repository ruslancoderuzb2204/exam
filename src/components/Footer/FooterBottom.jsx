import { Logo1, MasterCard, Visa, Mir } from "@/constants";
import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
const FooterBottom = () => {
  return (
    <div>
      <div className="mt-4 flex justify-between">
        <div>
          <div>
            <Image src={Logo1} alt="Logo" width={100} height={40} />
          </div>
          <p className="text-sm mt-2">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Мы в соцсетях</h3>
          <div className=" flex justify-between">
            <div className="text-[#088269] rounded p-2 bg-[#F8F7F3]">
              <SlSocialVkontakte />
            </div>
            <div className="text-[#088269] rounded p-2 bg-[#F8F7F3]">
              <FaTelegramPlane />
            </div>
            <div className="text-[#088269] rounded p-2 bg-[#F8F7F3]">
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <p className="mt-2">Партнерская программа</p>
            </li>
            <li>
              <p className="mt-2">Оптовые продажи</p>
            </li>
            <li>
              <p className="mt-2">Реквизиты</p>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 ">
          <ul>
            <li>
              <p className="mt-2">Политика конфиденциальности</p>
            </li>
            <li>
              <p className="mt-2">Условия соглашения</p>
            </li>
            <li>
              <p className="mt-2">Карта сайта</p>
            </li>
          </ul>
          <div className="mt-2">
            <h3 className="font-semibold mb-2">Способы оплаты</h3>
            <div className="flex gap-4">
              <Image width={100} className="w-14" src={MasterCard} alt="img" />
              <Image width={100} className="w-14" src={Visa} alt="img" />
              <Image width={100} className="w-14" src={Mir} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-20 justify-between mt-10 text-sm items-center">
        <p className="w-40">
          © 2022 Медоборудование Все  права защищены
        </p>
        <p className="opacity-75">
          Информация на данном сайте носит справочный характер и не является
          публичной офертой, определяемой положениями Статьи 437 Гражданского
          кодекса Российской Федерации
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
