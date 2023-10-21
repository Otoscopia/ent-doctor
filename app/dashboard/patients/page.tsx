import TableTitles from "@/components/table/table-titles";
import TableBody from "@/components/table/table-body";
import TableHeader from "@/components/table/table-header";
import TableNav from "@/components/table/table-nav";

export default function Patients() {
  return (
    <section className="py-3 sm:py-5 max-w-full">
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
