import Image from "next/image";
import { Logo } from "@/constants";
const MiddleNav = () => {
  return (

    <div className="container">
    <div>
      <div>
        <Image src={Logo} alt="Logo" width={50} height={20} />
      </div>
      <div>
        
      </div>
    </div>
    </div>
  );
};

export default MiddleNav;
