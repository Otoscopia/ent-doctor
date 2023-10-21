"use client";

import {
  EmptyTable,
  TableBody,
  TableHeader,
  TableNav,
  TableTitles,
} from "@/app/components";
import {
  DATABASE_ID,
  FOLLOW_UPS_COLLECTION,
  NURSE_COLLECTION,
  PATIENT_COLLECTION,
  SCREENING_COLLECTION,
  client,
  databases,
} from "../api/appwrite";
import { useEffect, useState } from "react";

const table = [];

export default function Dashboard() {
  const [data, setData] = useState<unknown>();

  useEffect(() => {
    client.subscribe(
      [
        `databases.${DATABASE_ID}.collections.${PATIENT_COLLECTION}.documents`,
        `databases.${DATABASE_ID}.collections.${NURSE_COLLECTION}.documents`,
        `databases.${DATABASE_ID}.collections.${SCREENING_COLLECTION}.documents`,
        `databases.${DATABASE_ID}.collections.${FOLLOW_UPS_COLLECTION}.documents`,
      ],
      (response) => {
        if (
          response.events.includes("databases.*.collections.*.documents.create")
        ) {
          console.log("CREATED", response.payload);
        }

        if (
          response.events.includes("databases.*.collections.*.documents.update")
        ) {
          console.log("UPDATE", response.payload);
        }
      }
    );

    getPatients();
  }, []);

  const getPatients = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID!,
      NURSE_COLLECTION!
    );
    console.log(response);
  };

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
