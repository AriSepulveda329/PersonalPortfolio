import type { Metadata } from "next";
import { rubik } from "@/ui/fonts";
import Navbar from "@/components/Navbar";
import "./global.css";

export const metadata: Metadata = {
  title: "Fitness Tracker",
  description: "Portfolio project by Ari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full m-0 p-0">
      <body
        className={`${rubik.className} relative mainBG max-w-full w-full h-full flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
