import { login } from "@/app/api/auth/routes";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LogInForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const { push } = useRouter();

  const setStateValue = (
    property: "email" | "password" | "remember",
    value: any
  ) => {
    setState({ ...state, [property]: value });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await login({
        email: state.email,
        password: state.password,
      });
      localStorage.setItem("user", JSON.stringify(user));
      setState({ email: "", password: "", remember: false });
      push("/app");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Can't Login :(",
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(event) => setStateValue("email", event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-800 dark:focus:border-primary-800"
          placeholder="name@company.com"
          required={true}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          onChange={(event) => setStateValue("password", event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-800 dark:focus:border-primary-800"
          required={true}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              onChange={(event) =>
                setStateValue("remember", event.target.checked)
              }
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-800 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-800 dark:ring-offset-gray-800"
              required={false}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-gray-500 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-800 hover:bg-primary-1600 focus:ring-4 focus:outline-none focus:ring-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-800 dark:hover:bg-primary-1600 dark:focus:ring-primary-600"
      >
        <div className="flex flex-row items-center justify-center">
          {loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
          )}
          Sign in
        </div>
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don&lsquo;t have an account yet?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}
