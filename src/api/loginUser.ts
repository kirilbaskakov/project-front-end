import UserType from "@/types/UserType";

const loginUser = async (
  email: string,
  password: string,
): Promise<{ user: UserType; token: string }> => {
  // const body = JSON.stringify({ email, password });
  // const response = await fetch(import.meta.env.VITE_API_URL + "/login", {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body,
  // });
  // if (!response.ok) {
  //   throw new Error("Login error");
  // }
  // const data = await response.json();
  const data = {
    user: {
      id: 1,
      email: email,
      name: "1234",
      surname: "1234",
    },
    token: "1234",
  };
  return data;
};

export default loginUser;
