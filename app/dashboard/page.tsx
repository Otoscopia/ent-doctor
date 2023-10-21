import { TableBody, TableHeader, TableNav, TableTitles } from "@/components";

export default async function Dashboard() {
  return (
    <section className="py-3 sm:py-5 max-w-full w-full bg-pink-400">
      <div className="px-4 mx-auto max-w-screen-2xl">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <TableHeader />
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <TableTitles />
              <TableBody />
            </table>
          </div>
          <TableNav />
        </div>
      </div>
    </section>
  );
}