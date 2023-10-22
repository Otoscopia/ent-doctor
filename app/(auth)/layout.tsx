"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession } from "../api/auth/routes";
import Loading from "../loading";
import { LayoutProps } from "@/interface/layout-interface";

export default function AuthLayout({ children }: LayoutProps) {
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
          if (!session.labels.includes("doctor")) {
            push("/sign-in");
            localStorage.clear();
            throw new Error("You are not a doctor");
          }
          push("/app");
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

  return <section>{children}</section>;
}
