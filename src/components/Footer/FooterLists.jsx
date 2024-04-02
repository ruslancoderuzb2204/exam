import Head from "./Head";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
import ThirdList from "./ThirdList";

const FooterLists = () => {
  return (
    <div >
      <div className="flex py-5 gap-20 text-[#F8F7F3]">
        <div className="w-1/5">
          <Head title="Покупателям" />
          <FirstList />
        </div>
        <div className="w-3/5">
          <Head title="Каталог" />
          <SecondList />
        </div>
        <div className="w-1/5">
          <Head title="Контакты" />
          <h3 className="mt-4">Адрес:</h3>
          <p>г. Москва, ул. Московская, д. 35 </p>
          <ThirdList />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#F8F7F3]"></div>
      
    </div>
  );
};

export default FooterLists;
