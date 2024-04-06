const ButtonSecondary = ({ children, classNames }) => {
  return (
    <button
      className={`${classNames} rounded-full text-[#088269] border-[#D5D1E1] border py-3 px-6`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
