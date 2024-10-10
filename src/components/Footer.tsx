import navLinks from "@/constants/navLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex gap-8 justify-center items-center">
      {navLinks.map(({ path, icon }) => (
        <Link to={path}>
          <img src={icon} className="w-12 h-12" />
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
