const SecondList = () => {
  const arr = [
    "Реанимация",
    "Хирургия",
    "Офтальмология",
    "Лабораторная диагностика",
    "Акушерство и Гинекология",
    "Гистология",
    "Косметология",
    "Орториноларинг",
    "Рентгенология и томография",
    "Стрерилизация",
    "Физиотерапия и реабилитация",
    "Функциональная диагностика",
    "Эндоскопия",
    "Новинки",
    "Распродажи",
    "Кабинеты под ключ",
    "Скачать каталог",
  ];
  return (
    <div className="flex justify-between mt-4">
      <ul className="mr-2 md:mr-1">
        {arr.slice(0, 6).map((item) => (
          <li key={item}>
            <p className="my-2">{item}</p>
          </li>
        ))}
      </ul>
      <ul>
        {arr.slice(7, 12).map((item) => (
          <li key={item}>
            <p className="my-2">{item}</p>
          </li>
        ))}
      </ul>
      <ul className="ml-2">
        {arr.slice(13, 17).map((item) => (
          <li key={item}>
            <p className="my-2">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondList;
