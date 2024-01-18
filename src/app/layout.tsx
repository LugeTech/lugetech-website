import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
export const revalidate = 0; // revalidate at most every hour
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lugetech.com",
  description: "Lugetech.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen md:w-10/12 mx-auto p-4 `}>
        {children}
      </body>
    </html>
  );
}
