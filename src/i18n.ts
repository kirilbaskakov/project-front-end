import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import es from "../locales/es.json";
import de from "../locales/de.json";
import getCookie from "@/utils/getCookie";

const language = getCookie("lang") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    es: { translation: es },
    de: { translation: de },
  },
  lng: language,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
