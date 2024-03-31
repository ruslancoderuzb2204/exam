import Border from "@/UI/Border";
import MiddleNav from "@/components/Header/MiddleNav";
import TopNav from "@/components/Header/TopNav";

const Header = () => {
  return (
    <header>
      <TopNav />
      <Border />
      <MiddleNav />
    </header>
  );
};

export default Header;
