import "animate.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LayoutProps } from "@/interface/layout-interface";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otoscopia",
  description: "Effortlessly Access and Manage your Medical Records.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <main className="flex flex-col min-h-screen max-w-full">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
