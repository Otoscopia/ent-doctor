"use client";

import { useEffect, useState } from "react";
import { Screening } from "@/interface/screening-interface";
import {
  DATABASE_ID,
  FOLLOW_UPS_COLLECTION,
  PATIENT_COLLECTION,
  SCREENING_COLLECTION,
  client,
  fetchScreeningCollection,
} from "../../api/appwrite";
import { Models } from "appwrite";
import TableHeader from "@/components/table/table-header";
import TableTitles from "@/components/table/table-titles";
import TableBody from "@/components/table/table-body";
import EmptyTable from "@/components/table/empty-table";
import TableNav from "@/components/table/table-nav";
import Loading from "@/app/loading";
import { getTeams } from "@/app/api/auth/routes";

export default function Dashboard() {
  const [screenings, setScreenings] = useState<Screening[]>([]);
  const [team, setTeam] = useState<Models.TeamList<Models.Preferences>>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      const teams = await getTeams();

      const screening = await fetchScreeningCollection();
      setScreenings(screening.documents as Screening[]);

      setLoading(false);
      setTeam(teams);
    };

    const patientSubscription = `databases.${DATABASE_ID}.collections.${PATIENT_COLLECTION}.documents`;
    const screeningSubscription = `databases.${DATABASE_ID}.collections.${SCREENING_COLLECTION}.documents`;
    const followUpsSubscription = `databases.${DATABASE_ID}.collections.${FOLLOW_UPS_COLLECTION}.documents`;

    const subscribe = client.subscribe(
      [patientSubscription, screeningSubscription, followUpsSubscription],
      (snapshot) => {
        const payload = snapshot.payload;
        if (snapshot.events.includes(screeningSubscription)) {
          // setScreenings(payload);
          console.log("payload", payload);
        }
        if (snapshot.events.includes(followUpsSubscription)) {
          // dawda
        }
      }
    );

    data();
    return () => {
      subscribe();
    };
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="py-3 sm:py-5 max-w-full min-h-screen">
      <div className="mx-auto max-w-screen-2xl h-full flex flex-col items-center justify-center">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg flex flex-col w-full">
          <TableHeader />
          <div className="overflow-x-auto h-[720px]">
            {screenings.length > 0 ? (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableTitles />
                <TableBody screening={screenings} team={team!.teams[0].$id} />
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
