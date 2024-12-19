import React from "react";
import PersonCard from "./PersonCard";
import { useTranslation } from "react-i18next";

const NewFollowers = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className="text-blue-600 text-lg">{t("newFollowers")}</h4>
      <div className="flex gap-1 justify-between mt-2">
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
};

export default NewFollowers;
