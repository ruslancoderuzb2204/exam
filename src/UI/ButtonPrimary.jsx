const ButtonPrimary = ({ children, classNames }) => {
  return (
    <button className={`${classNames} rounded-full bg-[#088269] text-[#F8F7F3] border py-3 px-6`}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
