import FooterLists from "@/components/Footer/FooterLists";
import FooterBottom from "@/components/Footer/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#088269] text-[#F8F7F3]">
      <div className="container">
        <FooterLists />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
