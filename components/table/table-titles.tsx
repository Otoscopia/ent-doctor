export default function TableTitles() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-4 py-3">
          Name
        </th>
        <th scope="col" className="px-4 py-3">
          Gender
        </th>
        <th scope="col" className="px-4 py-3">
          Status
        </th>
        <th scope="col" className="px-4 py-3">
          Screened by
        </th>
        <th scope="col" className="px-4 py-3">
          Uploaded at
        </th>
      </tr>
    </thead>
  );
}
