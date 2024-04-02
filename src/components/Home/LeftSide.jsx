const LeftSide = ({ title, elements }) => {
  return (
    <div className="w-1/4">
      <h2 className="font-medium text-3xl mb-10">{title}</h2>
      <ul>
        {elements.map((el) => (
          <li key={el}>
            <p className="text-base font-medium text-[#202020] my-2">{el}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
