const CustomInput = ({ type, placeholder, onChange, value, required }) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      name={type}
      value={value}
      onChange={onChange}
      className="bg-white border-b outline-none border-gray-300 text-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required={required}
    />
  </div>
);

export default CustomInput;
