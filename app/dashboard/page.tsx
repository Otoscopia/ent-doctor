import {
  EmptyTable,
  TableBody,
  TableHeader,
  TableNav,
  TableTitles,
} from "@/components";

const table = [];

export default async function Dashboard() {
  return (
    <section className="py-3 sm:py-5 max-w-full min-h-screen">
      <div className="mx-auto max-w-screen-2xl h-full flex flex-col items-center justify-center">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg flex flex-col w-full">
          <TableHeader />
          <div className="overflow-x-auto">
            {table.length > 0 ? (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableTitles />
                <TableBody />
              </table>
            ) : (
              <EmptyTable />
            )}
          </div>
          <TableNav />
        </div>
      </div>
    </section>
  );
}
