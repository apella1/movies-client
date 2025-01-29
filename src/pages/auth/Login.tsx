import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import SocialButton from "../../components/ui/SocialButton";

interface Login {
  email: string;
  password: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="grid h-screen place-items-center bg-[url(/login.jpg)] bg-cover">
      <form
        className="p-8 rounded-2xl border border-gray-400 shadow flex flex-col space-y-3 bg-white w-[400px]"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="self-center flex flex-col">
          <h1 className="self-center text-lg font-medium">
            Sign in with email
          </h1>
          <p className="text-sm self-center text-gray-600 text-center">
            Sign in to save your watching progress and customize your taste
          </p>
        </div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email address is required!",
          })}
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required!" })}
        />
        {errors.password && (
          <p className="text-xs text-red-600">{errors.password?.message}</p>
        )}
        <p className="self-end text-sm underline underline-offset-2 cursor-pointer">
          Forgot password?
        </p>
        <button className="w-full px-2 py-1.5 text-white text-sm bg-gray-800 rounded-2xl font-medium">
          Get Started
        </button>
        <p className="text-xs self-center text-gray-600">Or sign in with</p>
        <div className="flex items-center space-x-4 self-center">
          <SocialButton icon={<FcGoogle />} />
          <SocialButton icon={<FaGithub />} />
        </div>
      </form>
    </div>
  );
}
