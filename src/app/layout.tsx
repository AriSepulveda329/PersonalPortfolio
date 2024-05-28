import type { Metadata } from "next";
import { roboto } from "@/ui/fonts";
import Navbar from "@/components/Navbar";
import "@/styles/App.css";

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
    <html lang="en" className="h-full">
      <body className={`${roboto.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
