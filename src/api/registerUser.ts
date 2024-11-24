import UserType from "@/types/UserType";
import logger from "@/utils/Logger";

const registerUser = async (body: {
  name: string;
  surname: string;
  email: string;
  password: string;
}): Promise<{ user: UserType; token: string }> => {
  const response = await fetch(import.meta.env.VITE_API_URL + "/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    logger.error(`User with email=${body.email} error while registration`);
    throw new Error("Registration error");
  }
  const data = await response.json();
  logger.info(`User ${data.user.id} succesfully registered`);
  return data;
};

export default registerUser;
