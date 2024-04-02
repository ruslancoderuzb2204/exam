import Border from "@/UI/Border";
import BottomNav from "@/components/Header/BottomNav";
import MiddleNav from "@/components/Header/MiddleNav";
import TopNav from "@/components/Header/TopNav";

const Header = () => {
  return (
    <header>
      <TopNav />
      <Border />
      <MiddleNav />
      <Border />
      <BottomNav />
      <Border />
    </header>
  );
};

export default Header;
