import loginUser from "@/api/loginUser";
import registerUser from "@/api/registerUser";
import UserType from "@/types/UserType";
import { ReactNode, useState } from "react";
import { createContext } from "react";

type AuthContextType = {
  user: UserType | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (body: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
};

export const UserContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const UserProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const register = async (body: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => {
    const data = await registerUser(body);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
  };

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem("token", data.token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
