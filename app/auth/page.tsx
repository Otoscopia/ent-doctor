"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Otoscopia from "@/public/otoscopia.svg";
import Pikachu from "@/public/pikachu-sign-in.svg";
import Image from "next/image";

export default function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const setStateValue = (
    property: "email" | "password" | "remember",
    value: any
  ) => {
    setState({ ...state, [property]: value });
  };

  const onSubmitPress = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <section className="flex flex-row items-center justify-center">
      <div className="flex items-center">
        <Image src={Pikachu} alt="" width={780} />
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link href="#" className="">
              <Image src={Otoscopia} alt="Otoscopia Logo" className="h-8" />
            </Link>
            <div className="space-y-2">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome back
              </h1>
              <p className="text-sm leading-tight tracking-tight text-gray-900 dark:text-gray-300">
                Start checking patients medical records now.
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={onSubmitPress}>
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
                  onChange={(event) =>
                    setStateValue("email", event.target.value)
                  }
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
                  onChange={(event) =>
                    setStateValue("password", event.target.value)
                  }
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
                Sign in
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
          </div>
        </div>
      </div>
    </section>
  );
}
