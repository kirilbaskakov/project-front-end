import Woman from "@/assets/woman.jpg";
import { useTranslation } from "react-i18next";
import { PiGenderFemale } from "react-icons/pi";

const MyProfile = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full p-6 md:w-[40%]">
      <img src={Woman} className="w-full rounded-lg" />
      <form className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="w-3/4"
            placeholder={`${t("name")}, ${t("age")}`}
          />
          <PiGenderFemale className="w-8 h-8" />
        </div>
        <input type="text" className="w-3/4" placeholder={t("place")} />
        <input type="text" className="w-3/4" placeholder={t("principles")} />
        <textarea className="mt-4" rows={3} placeholder={t("tellAbout")} />
      </form>
    </div>
  );
};

export default MyProfile;
