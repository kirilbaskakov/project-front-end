import React from "react";
import SelectOne from "./SelectOne";
import SelectMany from "./SelectMany";
import FiltersType from "@/types/FiltersType";

const qualities = [
  "Honesty",
  "Empathy",
  "Persistence",
  "Creativity",
  "Responsibility",
  "Independence",
];

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const citites = ["Minsk", "Mogilev", "Vitebsk", "Grodno"];

const Filters = ({
  filters,
  setFilters,
}: {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}) => {
  const onGenderSelect = (gender: string) => {
    setFilters({ ...filters, gender: gender as "woman" | "man" });
  };

  const onQualitiesSelect = (qualities: string[]) => {
    setFilters({ ...filters, qualities });
  };

  const onSignsSelect = (signs: string[]) => {
    setFilters({ ...filters, signs });
  };

  const onWithPhotoSelect = (withPhoto: string) => {
    setFilters({ ...filters, withPhoto: withPhoto === "with photo" });
  };

  return (
    <div className="flex-1 bg-white p-8 rounded-xl border-2 border-gray-200 flex flex-col items-center gap-5">
      <h2 className="text-2xl">Filters</h2>
      <SelectOne
        optionLeft="woman"
        optionRight="man"
        onSelect={onGenderSelect}
      />
      <div className="w-full flex items-center flex-col">
        <p className="text-xl">Choose the city</p>
        <select className="w-3/4 text-lg py-2">
          {citites.map((city) => (
            <option>{city}</option>
          ))}
        </select>
      </div>
      <SelectMany
        label={"Choose the most important qualities in a person"}
        tags={qualities}
        onSelect={onQualitiesSelect}
      />
      <SelectMany
        label={"Choose zodiac signs"}
        tags={zodiacSigns}
        onSelect={onSignsSelect}
      />
      <SelectOne
        optionLeft="with photo"
        optionRight="without photo"
        onSelect={onWithPhotoSelect}
      />
      <button className="w-full rounded-3xl bg-purple-600 py-3 mt-auto">
        Search
      </button>
    </div>
  );
};

export default Filters;
