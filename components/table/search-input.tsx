"use client";

import { Combobox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PersonIcon, SearchIcon } from "@/icons";

interface People {
  id: number;
  name: string;
}

const people: People[] = [];

export default function SearchInput() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-full md:w-1/2">
      <Combobox
        value={selectedPerson}
        onChange={setSelectedPerson}
        disabled={people.length == 0}
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>

          <Combobox.Input
            type="text"
            id="search"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(person: People) => person.name}
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
          />
        </div>
        <Combobox.Options className="bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700 dark:divide-gray-600 absolute top-16">
          <ul className="py-1 text-base text-gray-700 dark:text-gray-200">
            {filteredPeople.map((person) => (
              /* Use the `active` state to conditionally style the active option. */
              /* Use the `selected` state to conditionally style the selected option. */
              <Combobox.Option key={person.id} value={person} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`flex p-2 items-center ${
                      selected
                        ? "bg-primary-1600 text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white pl-6"
                    }`}
                  >
                    <span className="pr-2">{selected && <PersonIcon />}</span>
                    {person.name}
                  </li>
                )}
              </Combobox.Option>
            ))}
          </ul>
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
