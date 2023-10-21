import FilterStatus from "./filter-status";
import RefreshButton from "./refresh-button";
import SearchInput from "./search-input";

export default function TableHeader() {
  return (
    <div className="max-w-full">
      <div className="relative bg-white shadow-md dark:bg-gray-800">
        <div className="flex flex-col items-center p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <SearchInput />
          <FilterStatus />
          <RefreshButton />
        </div>
      </div>
    </div>
  );
}
