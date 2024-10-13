import navLinks from "@/constants/navLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed left-0 w-full bottom-0 py-3 bg-white">
      <nav className="flex gap-10 justify-center items-center">
        {navLinks.map(({ path, icon }) => (
          <Link to={path}>
            <img src={icon} className="w-10 h-10" />
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
