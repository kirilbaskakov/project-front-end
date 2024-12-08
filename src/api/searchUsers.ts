import FiltersType from "@/types/FiltersType";
import UserType from "@/types/UserType";

const searchUsers = async (filters: FiltersType): Promise<UserType[]> => {
  const body = JSON.stringify(filters);
  const response = await fetch(import.meta.env.VITE_API_URL + "/search", {
    method: "POST",
    body,
  });
  const users = await response.json();
  return users;
};

export default searchUsers;
