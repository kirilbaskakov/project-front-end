import searchUsers from "@/api/searchUsers";
import Filters from "@/components/Filters";
import SearchProfile from "@/components/SearchProfile";
import FiltersType from "@/types/FiltersType";
import UserType from "@/types/UserType";
import { useEffect, useState } from "react";

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

const defaultFilters: FiltersType = {
  gender: "woman",
  city: "Minsk",
  qualities,
  signs: zodiacSigns,
  withPhoto: true,
};

const SearchPage = () => {
  const [filters, setFilters] = useState<FiltersType>(defaultFilters);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    searchUsers(filters).then(setUsers);
  }, [filters]);

  return (
    <>
      <SearchProfile users={users} />
      <Filters filters={filters} setFilters={setFilters} />
    </>
  );
};

export default SearchPage;
