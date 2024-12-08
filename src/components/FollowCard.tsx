import Woman from "@/assets/woman.jpg";
import { useTranslation } from "react-i18next";

const FollowCard = () => {
  const { t } = useTranslation();

  return (
    <div className="flex gap-8 w-full items-center">
      <img src={Woman} className="w-16 h-16 rounded-full" />
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-semibold">lorem, 18</h4>
        <div className="flex gap-6 text-lg text-gray-500">
          {t("startedFollow")}
        </div>
      </div>
      <button className="px-6 py-1 ml-auto">{t("follow")}</button>
    </div>
  );
};

export default FollowCard;
