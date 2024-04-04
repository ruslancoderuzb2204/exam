import { directions } from "@/components/catalogue/directions";
import Cards from "./Cards";

const Catalogue = () => {
  return (
    <div className="container">
      <div className="text-[#202020] flex justify-between mb-10">
        <div className="p-5 rounded-lg border w-1/4 border-[#E5E2EE]">
          <h2 className="text-xl font-medium border-b-2 pb-4">Направления</h2>
          <ul className="mt-4">
            {directions?.map((direction, index) => (
              <li
                key={index}
                className="flex justify-between items-center my-2"
              >
                <p>{direction}</p>
                <span>{`>`}</span>
              </li>
            ))}
          </ul>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Catalogue;
