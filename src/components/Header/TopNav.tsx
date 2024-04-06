const TopNav = () => {
  return (
    <div className="text-[#7A7687] base:hidden flex justify-between items-center container text-xs  ">
      <ul className="flex gap-6 md:gap-4 sm:gap-2 py-4  ">
        <li>
          <p>О компании</p>
        </li>
        <li>
          <p>Доставка</p>
        </li>
        <li>
          <p>Оплата</p>
        </li>
        <li>
          <p>Гарантии</p>
        </li>
        <li>
          <p className="md:hidden">Блог</p>
        </li>
      </ul>
      <ul className="flex gap-12 md:gap-8 sm:gap-4">
        <li>
          <p>info@mail.ru</p>
        </li>
        <li>
          <p>г. Москва, ул. Московская, д. 35</p>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;
