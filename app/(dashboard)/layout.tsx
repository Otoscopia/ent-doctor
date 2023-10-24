"use client";

import Sidebar from "@/components/sidebar";
import React, { ReactNode, useEffect, useState } from "react";
import { getSession } from "../(auth)/api/routes";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import { getAccount } from "../api/appwrite";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSession();
        if (!session) {
          push("/sign-in");
          localStorage.clear();
        } else {
          const user = getAccount();
          if (!(await user).labels.includes("doctor")) {
            push("/sign-in");
            localStorage.clear();
            throw new Error("You are not a doctor");
          }
          setLoading(false);
        }
      } catch (error) {
        push("/sign-in");
        setLoading(false);
      }
    };

    checkSession();
  }, [push]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="flex flex-row max-w-full container">
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen">{children}</div>
    </section>
  );
}
