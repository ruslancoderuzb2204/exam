import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { Logo1, MasterCard, Visa, Mir } from "@/constants";

const MenuItem = ({ text }) => <p className="mt-2">{text}</p>;

const SocialIcon = ({ icon }) => (
  <div className="text-[#088269] rounded p-2 bg-[#F8F7F3]">{icon}</div>
);

const PaymentMethod = ({ src }) => (
  <Image width={100} className="w-14" src={src} alt="img" />
);

const FooterBottom = () => (
  <div>
    <div className="mt-4 flex md:grid-cols-1 xl:grid xl:grid-cols-2 justify-between">
      <div>
        <div>
          <Image src={Logo1} alt="Logo" width={100} height={40} />
        </div>
        <p className="text-sm mt-2">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Мы в соцсетях</h3>
        <div className="flex justify-between">
          <SocialIcon icon={<SlSocialVkontakte />} />
          <SocialIcon icon={<FaTelegramPlane />} />
          <SocialIcon icon={<FaWhatsapp />} />
        </div>
      </div>
      <div>
        <ul>
          {["Партнерская программа", "Оптовые продажи", "Реквизиты"].map(
            (item, index) => (
              <MenuItem key={index} text={item} />
            )
          )}
        </ul>
      </div>
      <div className="flex gap-6">
        <ul>
          {[
            "Политика конфиденциальности",
            "Условия соглашения",
            "Карта сайта",
          ].map((item, index) => (
            <MenuItem key={index} text={item} />
          ))}
        </ul>
        <div className="mt-2">
          <h3 className="font-semibold mb-2">Способы оплаты</h3>
          <div className="flex gap-4">
            {[MasterCard, Visa, Mir].map((src, index) => (
              <PaymentMethod key={index} src={src} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-20 justify-between mt-10 text-sm items-center">
      <p className="w-40">© 2022 Медоборудование Все права защищены</p>
      <p className="opacity-75">
        Информация на данном сайте носит справочный характер и не является
        публичной офертой, определяемой положениями Статьи 437 Гражданского
        кодекса Российской Федерации
      </p>
    </div>
  </div>
);

export default FooterBottom;
