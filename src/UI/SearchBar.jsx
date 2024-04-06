import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex items-center base:justify-between my-2 border-[#D5D1E1] border  rounded-full">
      <p className="px-4 py-2.5 base:px-2 base:py-1   rounded-full bg-[#EFEFEF]">
        Все категории
      </p>
      <label className="flex items-center bg-[#D5D1E1] rounded-full">
        <input
          type="text"
          placeholder="Поиск"
          className="border-none rounded-full h-10 bg-[#f8f7f3] pl-2 outline-none"
        />
        <BiSearch className="w-10  rounded-full" />
      </label>
    </div>
  );
};

export default SearchBar;
