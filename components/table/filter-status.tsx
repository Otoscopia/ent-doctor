"use client";

import { FunnelIcon } from "@/icons";
import { Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";

interface Status {
  id: number;
  name: string;
}

const status: Status[] = [
  { id: 1, name: "Final" },
  { id: 2, name: "Pending" },
  { id: 3, name: "Diagnosis" },
  { id: 4, name: "Medical" },
];

export default function FilterStatus() {
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  return (
    <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
      <div className="flex items-center w-full space-x-3 md:w-auto">
        <Listbox value={selectedStatus} onChange={setSelectedStatus}>
          <Listbox.Button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <FunnelIcon /> Filter by Status: {selectedStatus.name}
          </Listbox.Button>
          <Listbox.Options className="bg-white divide-y divide-gray-100 rounded shadow w-48 dark:bg-gray-700 dark:divide-gray-600 absolute top-16">
            <ul className="py-1 text-base text-gray-700 dark:text-gray-200">
              {status.map((filter) => (
                <Listbox.Option key={filter.id} value={filter} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`flex p-2 items-center ${
                        selected
                          ? "bg-primary-1600 text-white"
                          : "hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white pl-6"
                      }`}
                    >
                      <span className="pr-2">{selected && <FunnelIcon />}</span>
                      {filter.name}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </ul>
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
}
