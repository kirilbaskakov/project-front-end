import UserType from "@/types/UserType";
import logger from "@/utils/Logger";

const loginUser = async (
  email: string,
  password: string,
): Promise<{ user: UserType; token: string }> => {
  const body = JSON.stringify({ email, password });
  const response = await fetch(import.meta.env.VITE_API_URL + "/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body,
  });
  if (!response.ok) {
    logger.error(`User with email=${email} error while log in`);
    throw new Error("Login error");
  }
  const data = await response.json();
  logger.info(`User ${data.user.id} succesfully logged in`);
  return data;
};

export default loginUser;
