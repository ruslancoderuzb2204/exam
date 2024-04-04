import ButtonPrimary from "@/UI/ButtonPrimary";
import { EmailIcon } from "@/constants";
import Image from "next/image";
const Subscribe = () => {
  return (
    <div className="bg-[#E5E4ED] relative py-9 pr-20 mt-20 ">
      <div className="container flex    justify-end">
        <div className="absolute left-32 top-0">
          <Image alt="img" src={EmailIcon} width={300} />
        </div>
        <div>
          <h2 className="text-black text-3xl font-medium mb-4">
            Подпишитесь и будьте в курсе!
          </h2>
          <p className="text-[#7A7687] mb-10 font-medium">
            Акции, скидки, распродажи ждут!
          </p>
          <div className="flex rounded-full justify-between bg-white">
            <input
              placeholder="Введите email"
              type="text"
              className="pl-4 rounded-full"
            />
            <ButtonPrimary>Подписаться</ButtonPrimary>
          </div>
          <div className="flex items-center mt-5 gap-2 text-xs font-medium">
            <input type="checkbox" />
            <p> Я даю согласие на обработку своих персональных данных.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
