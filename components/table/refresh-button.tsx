import { refresh } from "@/app/api/app/routes";
import { RefreshIcon } from "@/icons";

export default function RefreshButton() {
  return (
    <div className="flex justify-end w-full">
      <button
        type="button"
        onClick={refresh}
        className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <RefreshIcon />
        Refresh
      </button>
    </div>
  );
}
