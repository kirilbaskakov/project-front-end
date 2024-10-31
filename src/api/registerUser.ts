import UserType from "@/types/UserType";

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
    throw new Error("Registration error");
  }
  const data = await response.json();
  return data;
};

export default registerUser;
