import Logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="flex justify-between max-w-[1200px] mx-auto py-1">
      <img src={Logo} className="w-24" />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
