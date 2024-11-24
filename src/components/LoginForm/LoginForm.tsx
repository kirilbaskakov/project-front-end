import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/logo.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { validateEmail, validatePassword } from "@/constants/validation";
import useUser from "@/hooks/useUser";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Inputs>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setError(null);
      setLoading(true);
      await login(data.email, data.password);
      navigate("/profile");
    } catch {
      setError("Ошибка авторизации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-96 mx-auto mt-12 px-2">
      <img src={Logo} className="mx-auto" />
      <form className="flex flex-col mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Your email..."
          {...register("email", validateEmail)}
        ></input>
        <p className="text-red-500 text-sm font-normal h-4">
          {errors.email?.message}
        </p>
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password..."
          {...register("password", validatePassword)}
        ></input>
        <p className="text-red-500 text-sm font-normal h-4">
          {errors.password?.message}
        </p>
        <p className="text-center mt-2">
          Not registered yet? <Link to="/register">Register</Link>
        </p>
        <p className="text-red-500 font-normal h-5 mt-1 text-center">{error}</p>
        <button className="mt-2" disabled={loading}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
