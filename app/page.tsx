import Link from "next/link";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Otoscopia</h1>

        <p className="mt-3 text-2xl">Ear Screening Telemedicine Application</p>

        <div className="mt-10">
          <button
            type="button"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            <Link href="/sign-in">Get Started</Link>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
