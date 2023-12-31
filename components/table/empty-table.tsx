import Image from "next/image";
import Pikachu from "@/public/pikachu-waiting.svg";

export default function EmptyTable() {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Pikachu have an empty patients.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Please contact Nurse Joy to have them screen some patients.
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={Pikachu} alt="Empty Table" />
        </div>
      </div>
    </section>
  );
}
