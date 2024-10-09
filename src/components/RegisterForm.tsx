import Logo from "@/assets/logo.png";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateSurname,
} from "@/constants/validation";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/");
  };

  return (
    <div className="max-w-96 mx-auto mt-12 px-2">
      <img src={Logo} className="mx-auto" />
      <form className="flex flex-col mt-8" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name..."
          {...register("name", validateName)}
        ></input>
        <p className="text-red-500 text-sm font-normal h-4">
          {errors.name?.message}{" "}
        </p>
        <label>Surname</label>
        <input
          type="text"
          placeholder="Your surname..."
          {...register("surname", validateSurname)}
        ></input>
        <p className="text-red-500 text-sm font-normal h-4">
          {errors.surname?.message}{" "}
        </p>
        <label>Email</label>
        <input
          type="text"
          placeholder="Your email..."
          {...register("email", validateEmail)}
        ></input>
        <p className="text-red-500 text-sm font-normal h-4">
          {errors.email?.message}{" "}
        </p>
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password..."
          {...register("password", validatePassword)}
        ></input>
        <p className="text-red-500 text-sm font-normal h-4">
          {errors.password?.message}{" "}
        </p>
        <p className="text-center mt-2">
          Already registered? <Link to="/login">Log in</Link>
        </p>
        <button className="mt-4">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;