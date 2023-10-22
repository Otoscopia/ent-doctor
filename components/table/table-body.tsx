"use client";

import { TableRow } from "@/interface/table-interface";
import { Screening } from "../../interface/screening-interface";
import { useRouter } from "next/navigation";

interface Props {
  screening: Screening[];
  team: string;
}

export default function TableBody({ screening, team }: Props) {
  const data: TableRow[] = screening.map((screen) => {
    const id = screen.$id;
    const name = screen.patient.fullName;
    const gender = screen.patient.gender;
    const status = screen.status;
    const screenedBy = "";
    const uploadedAt = screen.$createdAt;

    return {
      id: id,
      name: name,
      gender: gender,
      status: status,
      screenedBy: screenedBy,
      uploadedAt: uploadedAt,
    };
  });

  const { push } = useRouter();
  return (
    <tbody>
      {data.map((row: TableRow, _) => {
        return (
          <tr
            className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            key={row.uploadedAt}
            onClick={() => push(`/patient/${row.id}`)}
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
            <td className="px-4 py-3">{row.uploadedAt}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
