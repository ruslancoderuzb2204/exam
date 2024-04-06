const MenuItem = ({ text }) => (
  <li>
    <p className="my-2">{text}</p>
  </li>
);

const FirstList = () => (
  <div className="flex justify-between mt-4">
    <ul className="mr-2">
      {["О компании", "Сертификаты", "Вакансии", "Гарантии", "Услуги", "Акции", "Акции"].map((item, index) => (
        <MenuItem key={index} text={item} />
      ))}
    </ul>
    <ul>
      {["Оплата", "Возврат", "FAQ", "Лизинг", "Отзывы", "Блог"].map((item, index) => (
        <MenuItem  key={index} text={item} />
      ))}
    </ul>
  </div>
);

export default FirstList;
