import { Sidebar } from "@/components";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-row max-w-full container">
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen">{children}</div>
    </section>
  );
}
