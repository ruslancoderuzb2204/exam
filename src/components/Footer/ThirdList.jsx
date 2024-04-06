const ThirdList = () => {
  return (
    <div className="md:flex md:justify-between md:items-center md:w-full">
      <h2 className="font-semibold my-6">Карта проезда</h2>
      <ul>
        <li>
          <p>График работы:</p>
        </li>
        <li>
          <p>Пн-Пт с 09:00-19:00,</p>
        </li>
        <li>
          <p>Сб-Вс - выходной</p>
        </li>
      </ul>
      <ul className="mt-4">
        <li>
          <p>+7 000-000-00-00</p>
        </li>
        <li>
          <p>+7 495-000-00-00</p>
        </li>
        <li>
          <p>8 800-000-00-00</p>
        </li>
        <li>
          <p>info@mail.ru</p>
        </li>
      </ul>
    </div>
  );
};

export default ThirdList;
