"use client";

import Link from "next/link";
import Otoscopia from "@/public/otoscopia.svg";
import Pikachu from "@/public/pikachu-sign-in.svg";
import Image from "next/image";
import LogInForm from "./components/sign-in-form";

export default function SignIn() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link href="/">
              <Image src={Otoscopia} alt="Otoscopia Logo" className="h-16" />
            </Link>
            <div className="space-y-2">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome back
              </h1>
              <p className="text-sm leading-tight tracking-tight text-gray-900 dark:text-gray-300">
                Start checking patients medical records now.
              </p>
            </div>
            <LogInForm />
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ml-auto">
          <Image
            src={Pikachu}
            alt="Pikachu Welcomes you"
            className="animate_animated animate__fadeInRight animate_slower"
          />
        </div>
      </div>
    </section>
  );
}
