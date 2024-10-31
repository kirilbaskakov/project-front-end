import UserType from "@/types/UserType";

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
    throw new Error("Login error");
  }
  const data = await response.json();
  return data;
};

export default loginUser;
