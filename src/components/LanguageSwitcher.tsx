import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { MdLanguage } from "react-icons/md";
import setCookie from "@/utils/setCookie";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownVisible(false);
    setCookie("i18next", lang, 30);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="focus:outline-none bg-transparent text-black"
        onClick={toggleDropdown}
      >
        <MdLanguage size={50} />
      </button>
      {dropdownVisible && (
        <div className="absolute right-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${i18n.language === lang.code ? "font-bold" : ""}`}
              onClick={() => switchLanguage(lang.code)}
            >
              {i18n.language === lang.code && <span className="mr-2">✔️</span>}
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
