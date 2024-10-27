const registerUser = async (body: {
  name: string;
  surname: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(
    "https://d434-46-56-217-34.ngrok-free.app/api/register",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    },
  );
  const data = await response.json();
  return data;
};

export default registerUser;
