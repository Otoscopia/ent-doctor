interface TableRow {
  name: string;
  gender: "Male" | "Female";
  status: "Final" | "Pending" | "Diagnosis" | "Medical";
  screenedBy: string;
  uploadedAt: Date;
}

const data: TableRow[] = [];

export default function TableBody() {
  return (
    <tbody>
      {data.map((row: TableRow, index) => {
        const day = row.uploadedAt.getDate();
        const month = row.uploadedAt.toLocaleString("default", {
          month: "short",
        });
        const year = row.uploadedAt.getFullYear();

        const formattedDate = `${month}. ${day}, ${year}`;

        return (
          <tr
            className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            key={index}
          >
            <th
              scope="row"
              className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {row.name}
            </th>
            <td className="px-4 py-3">{row.gender}</td>
            <td className="px-4 py-3">{row.status}</td>
            <td className="px-4 py-3">{row.screenedBy}</td>
            <td className="px-4 py-3">{formattedDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
